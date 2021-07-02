function showError(msg) {
  document.querySelector('#errorMsg').innerHTML = msg;
  document.querySelector('#errorAlert').classList.remove('hidden');
}

function hideError() {
  document.querySelector('#errorMsg').innerHTML = '';
  document.querySelector('#errorAlert').classList.add('hidden');
}

function calculateTax() {
  // DEMO: perform validation

  // hide previous error
  hideError();

  const salary = document.querySelector('#salary').value;
  const sideIncome = document.querySelector('#sideIncome').value;
  const taxRate = document.querySelector('#taxRate').value;

  // check salary is not empty
  if (!salary) {
    showError('Salary is required.');
    return;
  }

  // check salary is not negative
  if (salary < 0) {
    showError('Salary must be a positive number.');
    return;
  }

  // check side income is not negative if provided
  if (sideIncome && sideIncome < 0) {
    showError('Side income must be a positive number.');
    return;
  }

  // check tax rate is not empty
  if (!taxRate) {
    showError('Tax rate is required.');
    return;
  }

  // check tax rate is not negative
  if (taxRate < 0) {
    showError('Tax rate cannot be negative.');
    return;
  }

  const total = ((Number(salary) + Number(sideIncome)) * Number(taxRate)) / 100;

  document.querySelector('#result').innerHTML = total.toFixed(2);
}

document.querySelector('#calculateBtn').addEventListener('click', calculateTax);
