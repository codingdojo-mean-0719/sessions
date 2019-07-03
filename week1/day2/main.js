

// // function func(callback) {
// //   if (typeof callback === 'function') {
// //     callback();
// //   }
// // }

// // var cb = function () { 
// //   console.log('inside func');
// // };

// // // cb()
// // func(cb);
// // var isFunc = typeof 'cb' === 'function';

// // console.log('is func', isFunc);

// function addTwo(array) {
//   const results = [];

//   for (let index = 0; index < array.length; index++) {
//     console.log(`index is ${index} and element is ${array[index]}`);
//     const value = array[index];
//     results.push(value + 2);
//   }

//   return results;
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // console.log(addTwo(numbers));

// function multByTwo(array) {
//   const results = [];

//   for (let index = 0; index < array.length; index++) {
//     const value = array[index];
//     results.push(value * 2);
//   }

//   return results;
// }

// // console.log(multByTwo(numbers));
function each(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    console.log('inside each loop', value);
    callback(value, index, array);
  }
}



function filter(array, callback) {
  const results = [];

  // for (let index = 0; index < array.length; index++) {
  //   const value = array[index];
  //   // result should be either true or false
  //   const result = callback(value, index);
  //   if (result) {
  //     results.push(value);
  //   }
  // }

  each(array, function (element, index, arr) {
    console.log('inside filter anon', element);
    const result = callback(element, index, arr);

    if (result) {
      results.push(element);
    }
  });

  return results;
}

function isEven(num) {
  return num % 2 === 0;
}

const filtered = filter(numbers, isEven);

console.log('filtered', filtered);

function map(array, callback) {
  const results = [];

  // for (let index = 0; index < array.length; index++) {
  //   const value = array[index];
  //   const result = callback(value, index);
  //   // console.log('result is ', result);
  //   results.push(result);
  // }
  each(array, function (element, index) {
    const result = callback(element, index, array);
    results.push(result);
  });

  return results;
}

const addedTwo = map(numbers, value => value + 2);
const multTwo = map(numbers, value => value * 2);

console.log('addedTwo', addedTwo);
const arrow = () => { };

// function square(num) {
//   return num * num;
// }

const square = num => num * num;
console.log('multTwo', multTwo)

const squared = map(numbers, square);

console.log('squared', squared);

// const mult = x => y => z => x * y * z;

// function mult(x) {
//   return function (y) {
//     return function (z) {
//       return x * y * z;
//     }
//   }
// } 

// mult(1)(2)(3)
