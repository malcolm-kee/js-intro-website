function calculateTax() {
  // DEMO: perform validation

  // hide previous error

  const salary = document.querySelector('#salary').value;
  const sideIncome = document.querySelector('#sideIncome').value;
  const taxRate = document.querySelector('#taxRate').value;

  // check salary is not empty

  // check salary is not negative

  // check side income is not negative if provided

  // check tax rate is not empty

  // check tax rate is not negative

  const total = ((Number(salary) + Number(sideIncome)) * Number(taxRate)) / 100;

  document.querySelector('#result').innerHTML = total.toFixed(2);
}

document.querySelector('#calculateBtn').addEventListener('click', calculateTax);
