const express = require('express');
const nodemailer = require('nodemailer');
const NodeCache = require('node-cache');
const fetch = require('node-fetch');
const apiRouter = express.Router();

async function sendEmail(emailAddress) {
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    }
  });

  await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: emailAddress, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  });
}

const pokemonCache = new NodeCache({
  stdTTL: 60
});

apiRouter.get('/pokemons', (req, res, next) => {
  const { limit = 12, page = 1 } = req.query;
  const key = `${limit}-${page}`;

  const cachedResult = pokemonCache.get(key);

  if (cachedResult) {
    return res.json(cachedResult);
  }

  fetch(
    `https://pokemon-json.herokuapp.com/api/pokedex?_limit=${limit}&_page=${page}`
  )
    .then((response) => response.json())
    .then((result) => {
      pokemonCache.set(key, result);
      res.json(result);
    })
    .catch((err) => next(err));
});

apiRouter.get('/flaky-api', (req, res, next) => {
  const isSuccess = Math.random() >= 0.5;

  if (isSuccess) {
    res.status(200).json({
      message: 'success'
    });
  } else {
    next(new Error('Internal Server Error'));
  }
});

apiRouter.get('/pricing', (_, res) =>
  res.status(200).json([
    {
      tier: 'hobby',
      monthlyPrice: 12,
      annualPrice: 120
    },
    {
      tier: 'freelancer',
      monthlyPrice: 24,
      annualPrice: 240
    },
    {
      tier: 'startup',
      monthlyPrice: 32,
      annualPrice: 320
    },
    {
      tier: 'enterprise',
      monthlyPrice: 48,
      annualPrice: 480
    }
  ])
);

apiRouter.post('/signup', (req, res, next) => {
  if (!req.body || !req.body.email) {
    return res.status(401).json({
      message: 'Email is required.'
    });
  }
  sendEmail(req.body.email)
    .then(() =>
      res.json({
        message: 'Email sent!'
      })
    )
    .catch((err) => next(err));
});

module.exports = apiRouter;
