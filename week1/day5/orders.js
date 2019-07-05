function orderSupplies(item) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function () { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function () { return 'start painting!' }
        },
        tarp: {
          product: 'A large tarp',
          directions: function () { return 'cover the floor!' }
        }
      };

      if (item in warehouse) {
        resolve(warehouse[item]);
      } else {
        reject(new Error(`${item} is out of stock`));
      }
  
    }, deliveryTime);
  });
}

function receivedItem(item) {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
}

const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const tarp = orderSupplies('tarp');
const roller = orderSupplies('roller').catch(handleError);

// tarp
//   .then(receivedItem)
//   .then(() => paint)
//   .then(receivedItem)
//   .then(() => brush)
//   .then(receivedItem)
//   .catch(console.log);


Promise.all([tarp, paint, brush, roller])
  .then(function (items) {
    items.forEach(receivedItem);
  })
  .catch(handleError);


function handleError(error) {
  console.log(error.message);
}

/** 
 * Possible Output:
 * 
 * Received Neon Green Paint, time to mix it!
 * Received Horsehair brush, time to start painting!
 * 
 * or
 * 
 * Received Horsehair brush, time to start painting!
 * Received Neon Green Paint, time to mix it!
 * 
 * Consider the second set. We immediately try to paint, 
 * but how can we paint if we have not received it yet?
*/



// orderSupplies('tarp', function (tarp) {
//   receivedItem(tarp);
//   orderSupplies('paint', function (paint) {
//     receivedItem(paint);
//     orderSupplies('brush', receivedItem);
//   });
// });

// let havePaint = false;

// orderSupplies('paint', function (item) {
//   receivedItem(item);

//   havePaint = true;
// });


// orderSupplies('brush', function (item) {
//   if (havePaint) {
//     receivedItem(item);
//   } else {
//     // we need to check again if we have paint

//     // while (havePaint === false) {
      
//     // }

//     const timer = setInterval(function () {
//       console.log('....checking for paint... ');
//       if (havePaint) {
//         clearInterval(timer);
//         receivedItem(item);
//       }
//     }, 50);
//   }
// });


// orderSupplies('brush', handleBrush);

// function handleBrush(item) {
//   console.log('got brussh? ', item);
//   if (havePaint) {
//     return receivedItem(item);
//   }

//   console.log('...checking for paint...');
//   setTimeout(handleBrush, 50, item);
// }




// const orderList = ['tarp', 'paint', 'brush'];

// function order(supplies) {
//   const received = [];
//   // console.log(supplies);

//   for (let index = 0; index < supplies.length; index++) {
//     const product = supplies[index];

//     // console.log(`product ${product} at index ${index}`);

//     orderSupplies(product, function (item) {
//       // console.log('received', item, index);
//       received[index] = item;

//       // console.log('rrr ', received.filter(supply => supply));

//       if (received.filter(supply => supply).length === supplies.length) {
//         received.forEach(receivedItem);
//       }
//     });
//   }

//   // console.log('index is ' + index);
// }

// order(orderList);


// const brush = new Promise(function (resolve, reject) {
//   // console.log(resolve, reject);
//   orderSupplies('brush', resolve);
// });
// const paint = new Promise(function (resolve, reject) {
//   // console.log(resolve, reject);
//   orderSupplies('paint', resolve);
// });

// const tarp = new Promise(function (resolve, reject) {
//   // console.log(resolve, reject);
//   orderSupplies('tarp', resolve);
// });

// tarp
//   .then(receivedItem)
//   .then(() => paint)
//   .then(receivedItem)
//   .then(() => brush)
//   .then(receivedItem)
//   .catch(console.log);

