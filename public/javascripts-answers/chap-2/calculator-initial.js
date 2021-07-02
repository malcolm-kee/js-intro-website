/* eslint-disable */

function calculateTax() {
  // alert('calculateTax is called');
  // DEMO: perform the tax calculation here

  // get salary, side income, and tax rate
  const salary = document.querySelector('#salary').value;
  const sideIncome = document.querySelector('#sideIncome').value;
  const taxRate = document.querySelector('#taxRate').value;

  // calculate tax amount
  const total = ((salary + sideIncome) * taxRate) / 100;

  // display result
  document.querySelector('#result').innerHTML = total.toFixed(2);
}

function splitBill() {
  alert('splitBill is called');

  // TODO: get bill total and number of pax

  // TODO: calculate amount for each person

  // TODO: display the result
}
