/* eslint-disable */

function calculateTax() {
  // alert('calculateTax is called');
  // DEMO: perform the tax calculation here

  // get salary, side income, and tax rate
  const salary = document.querySelector('#salary').value;
  const sideIncome = document.querySelector('#sideIncome').value;
  const taxRate = document.querySelector('#taxRate').value;

  // calculate tax amount
  // const total = ((salary + sideIncome) * taxRate) / 100;
  const total = ((Number(salary) + Number(sideIncome)) * Number(taxRate)) / 100;

  // display result
  document.querySelector('#result').innerHTML = total.toFixed(2);
}

function splitBill() {
  // alert('splitBill is called');

  // TODO: get bill total and number of pax
  const billTotal = document.querySelector('#billTotal').value;
  const pax = document.querySelector('#pax').value;

  // TODO: calculate amount for each person
  const amountPerPax = Number(billTotal) / Number(pax);

  // TODO: display the result
  document.querySelector('#result').innerHTML = amountPerPax.toFixed(2);
}
