// 'use strict';

function Person(name, items) {
  if (!(this instanceof Person)) {
    console.log(`${name} is NOT a person`);
    return new Person(name, items);
  } 
  const person = { name };

  this.name = name;
  console.log(this);
  this.items = items;
  // this.take = take;


  // return this;
  // return person;
}

Person.prototype.take = function take(item, target) {
  if (!target || !Array.isArray(target.items)) {
    // console.log('target does not have an items array');
    throw new Error('target must have an items array');
  }

  console.log('this is --------->', this);

  for (let index = 0; index < target.items.length; index++) {
    if (item === target.items[index]) {
      // console.log(target.items.pop());
      // splice -- mutates array
      // slice -- makes a copy of values
      // console.log(target.items.slice(index, index +1));
      target.items.splice(index, 1)
      this.items.push(item);
      // console.log('content at index', index, target.items[index]);
      // console.log(target.items);

      return true;
    }
  }

  return false;
}


const bob = Person('Bob', ['phone', 'keys', 'sand']);
const sally = new Person('Sally', ['fish', 'gold', 'watch']);


// sally.take()

// const Person = (function () {
//   function Person() {

//   }

//   return Person;
// })();

console.log(bob);



// interface Target {
//   items: string[];
// }
try {
  sally.take('phone', bob); 

} catch (error) {
  console.log(error.message);
  // recover from the error
}


// console.log(1 === '1');

console.log(sally);
console.log(bob);

const backpack = {
  items: ['compass', 'map', 'snacks']
};

console.log(backpack);

bob.take('snacks', backpack);


// backpack.take = Person.prototype.take;


// backpack.take('gold', sally);


bob.take.apply(backpack, ['gold', sally]);

console.log(bob);
console.log(backpack);
console.log(sally);
