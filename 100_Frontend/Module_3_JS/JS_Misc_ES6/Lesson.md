**_ Today's Lesson _**
START YOUR TIMER!

We listened to your feedback!

We will be covering ES6 features that I believe are most relevant for
working on a React codebase.

So we're covering a lot today, but we aren't covering regex functions,
some object and array functions that were added, and we're not covering
classes.

# 1. let / const Keywords

---

**old JS:**

```
var varString = "string";
console.log(varString, "first assignment");

//can be reassigned, even with other data types
varString = 23;
console.log(varString, "second assignment");
```

**ES6:**

```
let letString = "string";
console.log(letString, "first assignment");

//still be reassigned, does not hoist
letString = 23;
console.log(letString, "second assignment");



const constString = "string";
console.log(constString, "first assignment");

//cannot reassign
constString = 23;
console.log(constString, "second assignment");
```

---

# 2. Arrow Functions

---

We are going over the sugar today. Arrow functions also have a
functional use - they redefine the context of keyword 'this';

## _function declarations_

**old JS:**

```

```

**ES6+:**

```
// with fat arrow + implicit return
const sum = (a, b) => a + b;

// with single argument
const returnOne = (a) => a;
```

## _old example anonymous function .then_

**old JS:**

```
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data;
    })
    .catch(function (error) {
        return error;
    });
```

## _ES6 example anonymous function .then_

**ES6+:**

```
fetch(url)
.then((response) => response.json())
.then((data) => data)
.catch((error) => error);
```

---

# 3. Async / Await

---

**old JS**

```
function apiCall(url) {
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data;
    })
    .catch(function (error) {
        return error;
    });
}
apiCall(myApi).then(
    function (response) {
        console.log(response);
    },
    function (error) {
        console.log(error);
    }
);
```

---

**ES6+**

---

```
const newApiCall = async (url) => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    } catch (e) {
        return e;
    }
};
const apiData = await newApiCall(myApiUrl);
console.log(apiData);
```

---

# 4. Optional Chaining

---

**old JS**

```
if (response && response.data && response.data.length > 0) {
    console.log("That if statement is way too bloated");
}
```

**ES6+**

```
if (response?.data?.length > 0) {
    console.log("Ahhh, much better");
}
```

---

# 5. New String Features

---

<!-- ## _Multiline Strings_

**old JS:**

```
let oldMultiLine = "First line,\nSecond Line,\nThird Line";
```

**ES6+**

```
let newMultiLine = `First Line, Second Line, Third Line`;
``` -->

## _String Interpolation / Template Literals_

**old JS**

```
var username = "Dustin",
var hobby = "spoiling his cats";

var stringConcat = username + ' loves ' + hobby;
```

**ES6+**

```
const username = "Dustin",
const hobby = "spoiling his cats";

const tempLiteral = `${username} loves ${hobby}`;
console.log(tempLiteral);
```

---

# 6. Object Literal Syntax

---

**old JS**

```
function getCar(manufacturer, model, year) {
    return {
        manufacturer: manufacturer,
        model: model,
        year: year,
    };
}
console.log(getCar("Toyota", "Camry", "2020"));
```

**ES6+**

```
const getCar = (manufacturer, model, year) => {
return { manufacturer, model, year };
};

console.log(getCar("Mercury", "Linx", "1986"));
```

---

# 7. Spreading and Destructuring

---

## _Array / Object Spreading_

<!-- **array shallow copy**

```
let array = [1, 2, 3];
let newArray = [...array];
console.log(newArray, "spread array");
```

**object shallow copy**

```
let object = {
  name: "Dustin",
  layer1: {
    layer2: {
      string: "what's this?",
      layer3: { layer4: "whew" },
    },
  },
  cats: [
    {
      name: "Toots",
      hobbies: [
        "napping",
        "being sassy",
        ["napping", "being sassy", ["napping", "being sassy"]],
      ],
    },
    {
      name: "Waffles",
      hobbies: [
        "napping",
        "destroying all furniture",
        ["napping", "destroying all furniture", ["napping", "being sassy"]],
      ],
    },
  ],
};

let newObj = { ...object };
console.log(newObj, "spread object");
``` -->

## _Destructuring_

```
let nestedData = {
    layer1: {
        layer2: {
            layer3: {
                data: "Yay Data!",
            },
        },
    },
};
```

**old JS**

```
console.log(nestedData.layer1.layer2.layer3.data, "dot notation is terrible");
```

**ES6+**

```
let { data } = nestedData.layer1.layer2.layer3;
console.log(data, "yay destructuring!");
```

---
