function splitBill() {
  // TODO: clear previous error message

  const billTotal = document.querySelector('#billTotal').value;
  const pax = document.querySelector('#pax').value;

  // TODO: validate bill total is provided

  // TODO: validate bill total is positive

  // TODO: validate num of pax is provided

  // TODO: validate num of pax is positive

  const amountPerPax = Number(billTotal) / Number(pax);

  document.querySelector('#result').innerHTML = amountPerPax.toFixed(2);
}

document.querySelector('#splitBtn').addEventListener('click', splitBill);
