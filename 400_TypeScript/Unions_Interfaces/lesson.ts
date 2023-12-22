import { UserContactInfo, UserInfoOutcome } from "./types/index";

// UNION types
function flipCoin(): "heads" | "tails" {
  if (Math.random() > 0.5) return "heads";
  return "tails";
}

// more built out  Union type
function maybeGetUserInfo(): // UserInfoOutcome
["error", Error] | ["success", { name: string; email: string }] {
  if (flipCoin() === "heads") {
    return ["success", { name: "Dustin Jackson", email: "dustin@example.com" }];
  } else {
    return ["error", new Error("The coin landed on TAILS :(")];
  }
}

const outcome = maybeGetUserInfo();

// consume the data
const [first, second] = outcome;

// type guard
if (second instanceof Error) {
  second;
  second.message;
  second.name;
} else {
  second.email;
  second.name;
}

// discriminated union type
if (outcome[0] === "error") {
  // In this branch of your code, second is an Error
  outcome;
} else {
  // In this branch of your code, second is the user info
  outcome;
}

// Intersection Types
function makeWeek(): Date & { end: Date } {
  //⬅ return type

  const start = new Date();
  const end = new Date(start.valueOf() + "ONE_WEEK");

  return { ...start, end }; // kind of Object.assign
}

const thisWeek = makeWeek();

// can consume dates from fist start date and end date
thisWeek.toISOString();
thisWeek.end.toISOString();

function printContactInfo(info: UserContactInfo) {
  console.log(info);
  console.log(info.email);
}

const painter = {
  name: "Robert Ross",
  email: "bross@pbs.org",
  favoriteColor: "Titanium White",
};

printContactInfo(painter); // totally fine

// Interfaces

interface UserInfo {
  name: string;
  email: string;
}
function printUserInfo(info: UserInfo) {
  info.name;
}

// Extends
interface Animal {
  isAlive(): boolean;
}
interface Mammal extends Animal {
  getFurOrHairColor(): string;
}
interface Dog extends Mammal {
  getBreed(): string;
}
function careForDog(dog: Dog) {
  dog;
}

// Implements
interface AnimalLike {
  eat(food): void;
}

class Dog implements AnimalLike {
  bark() {
    return "woof";
  }
}

// MUTIPLE DECLARATIONS
interface AnimalLike {
  isAlive(): boolean;
}
function feed(animal: AnimalLike) {
  animal.eat;

  animal.isAlive;
}

// SECOND DECLARATION OF THE SAME NAME
interface AnimalLike {
  eat(food): void;
}
