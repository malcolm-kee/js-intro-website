/* eslint-disable */

(function initGuide() {
  const questionDemoBtn = document.querySelector('#question-demo-btn');
  questionDemoBtn.addEventListener('click', () => {
    helpers.prompt(
      {
        type: 'question',
        label: 'What is your favourite animal?'
      },
      (answer) => {
        console.log('Answer is ', answer);
      }
    );
  });

  const confirmationDemoBtn = document.querySelector('#confirmation-demo-btn');
  confirmationDemoBtn.addEventListener('click', () => {
    helpers.prompt(
      {
        type: 'confirmation',
        label: 'Are you sure you want to proceed?'
      },
      (answer) => {
        console.log('Answer is', answer);
      }
    );
  });

  // TODO: write code so that when user click "Age" button, prompt them with the
  // question "What is your age?" and the log the result as "The age is <provided age>."
  // E.g. when user enter 21, you should log "The age is 21."
  const askAgeBtn = document.querySelector('#ask-age-btn');

  // TODO: write code so that when user click "NSFW Content" button, prompt them with
  // the question "The following content is NSFW. Are you sure you want to proceed?",
  // and allow them to respond by clicking Yes or No.
  // - If user click Yes, prompt them with the question "What is your age?", and
  // finally log the message "User choose to proceed with age <provided age>.".
  // - If user click No, log the message "User choose to not proceed."
  const nsfwBtn = document.querySelector('#nsfw-btn');
})();
