// getting-started.js from mongoose doc
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ekart'); //make the db ekart 
    console.log("Connected to server:) ")//added this line
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  
//schema
const kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'Meow name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
  };

//make it a model (a compiled schema)
const Kitten = mongoose.model('Kitten', kittySchema);

//can make objects now (aka documents in mongod)
const silvrfur = new Kitten({ name: 'Silvrfur' });
console.log(silvrfur.name);

//run the function declared
silvrfur.speak();

//adding new cat
const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

//to save all the cats
await silvrfur.save();
await fluffy.save();

//to see all kittens saved
//you can see the same output using find command in mongosh shell
const kittens = await Kitten.find();
console.log(kittens);

//filter and queries
await Kitten.find({ name: /^fluff/ });

}

