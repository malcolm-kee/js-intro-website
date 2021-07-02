function showError(msg) {
  document.querySelector('#errorMsg').innerHTML = msg;
  document.querySelector('#errorAlert').classList.remove('hidden');
}

function hideError() {
  document.querySelector('#errorMsg').innerHTML = '';
  document.querySelector('#errorAlert').classList.add('hidden');
}

function splitBill() {
  // TODO: clear previous error message
  hideError();

  const billTotal = document.querySelector('#billTotal').value;
  const pax = document.querySelector('#pax').value;

  // TODO: validate bill total is provided
  if (!billTotal) {
    showError('Bill total is required.');
    return;
  }

  // TODO: validate bill total is positive
  if (billTotal <= 0) {
    showError('Bill total must be more than 0.');
    return;
  }

  // TODO: validate num of pax is provided
  if (!pax) {
    showError('Pax is required.');
    return;
  }

  // TODO: validate num of pax is positive
  if (pax <= 0) {
    showError('Pax must be more than 0.');
    return;
  }

  const amountPerPax = Number(billTotal) / Number(pax);

  document.querySelector('#result').innerHTML = amountPerPax.toFixed(2);
}

document.querySelector('#splitBtn').addEventListener('click', splitBill);
