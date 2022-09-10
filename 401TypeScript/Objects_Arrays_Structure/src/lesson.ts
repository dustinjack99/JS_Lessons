// Object Typing
let myCar: {
  make: string;
  model: string;
  year: number;
  //optional property
  //   chargeVoltage?: number;
};

myCar = {
  make: "Mercury",
  model: "Cougar",
  year: 1990,
  // excess property
  //   licensePlate: "123123"
};

// typing the arg as an object
function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  console.log(`${car.make}, ${car.chargeVoltage}`);
}

// why is this valid?
printCar(myCar);

// yet this isn't valid?
printCar({
  make: "Mercury",
  model: "Cougar",
  year: 1990,
  //   licensePlate: "123123"
});

printCar({
  make: "Mercury",
  model: "Cougar",
  year: 1990,
  chargeVoltage: 10000,
});

// Index Signatures

const phones = {
  home: { country: "+1", area: "211", number: "652-4515" },
  work: { country: "+1", area: "670", number: "752-5856" },
  fax: { country: "+1", area: "322", number: "525-4357" },
};

phones.fax;

const phoneSigs: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {};

phoneSigs.fax;
// assumes that any entry will be of a certain type.
phoneSigs.cell;

// Arrays

const strArr = ["1", "2", "3"];

// Tuples

//              YEAR   MAKE       MODEL
const carArr = [2002, "Mercury", "Courgar"];
// destructured, it will be these variables
const [year, make, model] = carArr;

let myCarArr: [number, string, string] = [2002, "Toyota", "Corolla"];
// ERROR: not the right convention
myCarArr = ["Honda", 2017, "Accord"];

// ERROR: too many items
myCarArr = [2017, "Honda", "Accord", "Sedan"];

const [yearVal, makeVal, modelVal] = myCarArr;

makeVal;

// limitations of push / pop
// does not throw err
myCarArr.push(1);

// throws err
myCarArr[2] = 8;
