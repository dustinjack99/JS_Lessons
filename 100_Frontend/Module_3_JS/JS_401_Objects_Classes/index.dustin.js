// JavaScript Objects
// Object are a way to store data, much like an array does

//                 0  1  2  3  4
const testArray = [1, 2, 3, 4, 5];

// Objects!
// Store data not by an index but by Key / Value pairs.

const car = {
  // key  |  value
  model: "F-150",
  make: "Ford",
  color: "Color Apple Red",
  timeInShop: 5000,
  totaled: false,
  passengers: [{ firstName: "Dustin", lastName: "Jackson" }],
};

// console.log(car.make, car.passengers);

// THEORY TIME
// JavaScript is an OBJECT ORIENTED programming language

// Almost everything in the language is an object.
// console.log(new Array("this is my string"));

// JavaScript Classes

class Saiyan {
  constructor(saiyanName) {
    this.hit_points = 100;
    this.name = saiyanName;
  }

  punch(saiyan) {
    console.log("POW! " + this.name + " punched: " + saiyan.name);
    saiyan.hit_points -= 10;
  }
}

// Extending classes, adding more functionality on top of a base class
class UltraInstinct extends Saiyan {
  autoDodge() {
    this.hit_points += 10;
  }
}

class UltraEgo extends Saiyan {
  // writing a constructor function for an extended class
  // allows you to work with the base class "this" properties.
  constructor(saiyanName) {
    // super function is what carries over the "this" values.
    super();
    this.name = "Ultra " + saiyanName;
    this.hit_points *= 10;
  }
  ruthlessAttack(saiyan) {
    saiyan.hit_points = saiyan.hit_points / 2;
  }
}

const goku = new UltraInstinct("Goku");
const vegeta = new UltraEgo("Vegeta");

console.log(goku);
console.log(vegeta);

console.log(goku.punch(vegeta));
console.log(vegeta.punch(goku));
console.log(vegeta.ruthlessAttack(goku));
console.log(goku.autoDodge());

console.log(goku);
console.log(vegeta);
