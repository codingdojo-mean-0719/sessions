

function personMaker(name, items) {
  const person = { name };

  person.items = items;


  return person;
}

const bob = personMaker('Bob', ['phone', 'keys', 'sand']);
const sally = personMaker('Sally', ['fish', 'gold', 'watch']);

console.log(bob);

function take(item, target) {
  if (!target || !Array.isArray(target.items)) {
    // console.log('target does not have an items array');
    throw new Error('target must have an items array');
  }
}

// interface Target {
//   items: string[];
// }
try {
  take('gold');

} catch (error) {
  console.log(error.message);
  // recover from the error
}