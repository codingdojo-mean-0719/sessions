var myStr = 'this is a string';

myStr = 234;

console.log(myStr);
//  index(offset) 0      1      2 
var array = ['dog', 'cat', 'fish'];

console.log(array.push(myStr));

console.log(array);

// for (var index = 0; index < array.length; index++) {
//   console.log('index is ' + index, array[index]);
// }

// for (var index in array) {
//   console.log('index is ' + index, array[index]);
// }

// for (var [index, value] of array.entries()) {
//   // console.log('entry is ', entry[0], entry[1]);
//   console.log('index is ', index, value);
// }

// var [, dog, anything] = array;
// var dog = array[0];

// console.log('dog var is ', dog, anything);
// eyes hair age
// var person = ['blue', 'red', 34];

var person = {
  'eye-color': 'blue',
  hair: 'red',
  age: 34,
  key: 'thisis key',
  name: 'Bob'
};

// person['height'] = 6; 

// console.log(person);

// for (var key in person) {
//   console.log('key is ' + key, person[key]);
// }


function sayHello(name) {
  var thing = 'this is aa thing';
  // person.name = name;
  console.log('Hello ' + person.name);
}

sayHello('Jason');
// console.log(person);

// console.log(thing);
