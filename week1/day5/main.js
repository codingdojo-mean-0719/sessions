

// console.log('before hello');

// function sayHello() {
//   setTimeout(function () { 
//     console.log('hello');
//   }, 2000);

//   // anything left to do
// }

// sayHello();
 
// console.log('after hello');


function getThingsFromDb(query, callback) {
  console.log('query is ', query);
  return setTimeout(function () {
    const data = ['thing1', 'thing2', ' thing3'];
    console.log(callback);
    callback(data);
    console.log('dataa is ', data);
    return data;
  }, 2000);
}

getThingsFromDb('select * from things;', function (things) { 
  console.log('inside caallback', things);
  for (let index = 0; index < things.length; index++) {
    console.log('got ' + things[index]);
  }
});
