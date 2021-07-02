/* eslint-disable */

/* TODO: create a doubleItem function that accepts an array of number and 
returns an array of equal length but with all of its item double  */
const doubleItem = (numbers) => {
  const result = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    result.push(element * 2);
  }
  return result;
};

/* TODO: create an invertSign function that accepts an array of number and 
returns an array of equal length but with all of its item sign inverted */
const invertSign = (numbers) => {
  const result = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    result.push(-element);
  }
  return result;
};

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  const idNumbers = participants.map((person) => person.idNumber); // TODO: change this line so that idNumbers will be assigned with list of idNumber

  console.log(idNumbers); // ['S7282395H', 'T4689018Z', 'G5512873T', 'T8198514B']
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get the results of multiplication of all the numbers using reduce method
  const resultByReduce = numbers.reduce(
    (prevResult, item) => prevResult * item,
    1
  );

  // TODO: get the results of multiplication of all the numbers using for...of loop
  let resultByForOf = 1;

  for (const num of numbers) {
    resultByForOf = resultByForOf * num;
  }
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get all the positive numbers (above or equal to 0)
  const positiveNumbers = numbers.filter((n) => n >= 0);

  // TODO: get all the odd numbers
  const oddNumbers = numbers.filter((n) => n % 2 === 0);

  // TODO: get all the numbers that is larger before the number before it
  // (exclude first number)
  const largerThanBefore = numbers.filter(
    (num, index) => index > 0 && num > numbers[index - 1]
  );
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: get the names for all participants
  const allNames = participants.map((p) => p.name);

  // TODO: get the id numbers for female participants only
  const femaleIds = participants
    .filter((p) => p.gender === 'female')
    .map((p) => p.idNumber);
}
