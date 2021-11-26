// Exercise 1: rewrite the following function to use destructuring
function logTodosPlan(activities) {
  const firstActivity = activities[0];
  const secondActivity = activities[1];
  const thirdActivity = activities[2];
  const doLaters = activities.slice(3);
  console.log('I will start my day with ' + firstActivity);
  console.log('Then I will ' + secondActivity);
  console.log('Finally, I ' + thirdActivity);
  console.log('Activities that I will do later are: ' + doLaters.join(', '));
}
logTodosPlan(['eat', 'sleep', 'code', 'read', 'watch Avengers', 'get a gf/bf']);

// Exercise 2: rewrite the following function to use destructuring
function logPerson(person) {
  const name = person.name;
  const firstName = name.firstName;
  const lastName = name.lastName;
  const age = person.age;
  console.log(firstName + ' ' + lastName + ', aged ' + age);
}
const persons = [
  {
    name: { firstName: 'Malcolm', lastName: 'Kee' },
    age: 29
  },
  {
    name: { firstName: 'Andy', lastName: 'Lau' },
    age: 55
  }
];
logPerson(persons[0]);
logPerson(persons[1]);
