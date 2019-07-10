const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/animals', { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log('connected to mongodb'));

// const m = {
//   Schema: 'this is schema',
//   Types: 'this is type',
// };
// // const schema = mongoose.Schema;
// // const Types = mongoose.Types;

// const {Schema: schema, Types} = m;
// // const {Types} = m;


// console.log(Schema, Types, schema);

// defines shape with schema
const AnimalSchema = new Schema({
  name: {
    type: String,
    required: [true, 'You must supply a name'],
    index: true
  },
  legs: {
    type: Number,
    min: [0, 'you must have more legs'],
    required: [true, 'you must have some legs']
  },
  isPet: {
    type: Boolean,
    default: true
  }
});

// Animal is a model   --      'model name'
// mongoose convert to lowercase and plural =>> animals
const Animal = mongoose.model('Animal', AnimalSchema);

const animal = new Animal({
  name: 'Spot',
  legs: 4,
});



// animal.save(function (error, savedAnimal) {
//   if (error) {
//     throw error;
//     // or handle the error
//   }

//   console.log(savedAnimal);
// });

animal.save()
  .then(savedAnimal => {
    console.log(savedAnimal)
  })
  .catch((error) => {
    // console.log(error.errors.name.message);
    const errors = Object.keys(error.errors).map(key => error.errors[key].message);



    // for (let index = 0; index < keys.length; index++) {
    //   console.log('key is ', index, keys[index]);
    //   errors.push(error.errors[keys[index]].message);
    // }

    console.log(errors);
  });

Animal.find({})
  .then(animals => console.log(animals))
  .catch(console.log);