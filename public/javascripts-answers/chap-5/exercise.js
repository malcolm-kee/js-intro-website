/* eslint-disable */

function compute1(operation, a, b) {
  if (operation === 'add') {
    return a + b;
  }
  if (operation === 'minus') {
    return a - b;
  }
  if (operation === 'multiple') {
    return a * b;
  }

  return a / b;
}

function compute2(operation, a, b) {
  return operation === 'add'
    ? a + b
    : operation === 'minus'
    ? a - b
    : operation === 'multiple'
    ? a * b
    : a / b;
}

function compute3(operation, a, b) {
  switch (operation) {
    case 'add':
      return a + b;

    case 'minus':
      return a - b;

    case 'multiple':
      return a * b;

    default:
      return a / b;
  }
}
