// JS OBJECTS
// Objects store data, much like an array does
const testArray = [1, 2, 3, 4, 5];
// console.log(testArray);

//Objects store data with Key / Value pairs
//things a car has
const car = {
  model: "F-150",
  make: "Ford",
  color: "Candy Apple Red",
};

//Accessing Values from a key:
// By using . Dot Notation
// console.log(car);
// console.log(car.make);
// console.log(car.model);

//THEORY TIME! In JS, everything is an Object.
//Demo String, Array

//how to access useful methods on objects you've worked with :)
// const nealString = "This is Neal's test string";
// console.log(nealString);
// console.log(nealString.split("s"));

// JS CLASSES
// class Superhero

class Hero {
  //Constructor method used to give your class its properties
  constructor(outsideName) {
    //^^^ you can pass a class a value
    //health, hp, punch, etc.
    this.hit_points = 100;
    this.attack_power = 5;
    this.cape = "blue cape";
    this.name = outsideName;
    //^^^ setting a property with the outside value
  }

  // You can also give your classes their own methods!
  // You can access your class's properties by using the 'this' keyword
  punch(target) {
    target.hit_points = target.hit_points - this.attack_power;
    //^^^ how you use 'this'.
    console.log(`${this.name} has hit ${target.name}. Whack!`);
  }
}

//Instantiation
// bringing a class to life
const Dexter_Morgan = new Hero("Dexter Morgan");
const Batman = new Hero("Batman");

//uncomment to see Batman punching Dexter
// console.log(Dexter_Morgan);
// console.log(Batman);
// Batman.punch(Dexter_Morgan);
// console.log(Dexter_Morgan);
// console.log(Batman);

//Inheritance
// making a class, which inherits properties from a parent "super" class
class Sidekick extends Hero {
  constructor(sidekickName, phrase) {
    super();
    this.name = sidekickName;
    this.phrase = phrase;
  }

  catchPhrase() {
    return this.phrase;
  }
}

//uncomment to see Robin punch Batman
const Robin = new Sidekick("Damien Wayne", "Hello, Father...");
// console.log(Robin);
// console.log(Robin.catchPhrase());
// console.log(Robin.punch(Batman));
// console.log(Batman);
