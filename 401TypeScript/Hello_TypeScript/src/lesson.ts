// type inference
let age = 6;

age = "not a number";

// literal type
const strictAge = 6;

// implicit ANY type and type annotation
const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;

let startTime = new Date();
let endTime;

setTimeout(() => {
  endTime = 0;
  endTime = new Date();
}, RANDOM_WAIT_TIME);

//functions!
function add(a: number, b: number) {
  return a + b; // strings? numbers? a mix?
}

const result = add(3, "4");

result;

let p = new Promise(result);
