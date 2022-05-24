1. let / const Keywords

**old JS:**

```
var varString = "string";
console.log(varString, "first assignment");

//can be reassigned, even with other data types
string = 23;
console.log(varString, "second assignment");
```

**ES6:**

```
let letString = "string";
console.log(letString, "first assignment");

//still be reassigned, does not hoist
letString = 23;
console.log(letString, "second assignment");

//cannot reassign
const constString = "string";
console.log(constString, "first assignment");

constString = 23;
console.log(constString, "second assignment");
```

2. Arrow Functions

**old JS:**

```
function sum(a, b) {
    return a + b;
}
```

**ES6+:**

```
// with fat arrow + implicit return
const sum = (a, b) => a + b;

// with single argument
const returnOne = (a) => a;
```

_old example anonymous function .then_

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

_ES6 example anonymous function .then_

```
fetch(url)
.then((response) => response.json())
.then((data) => data)
.catch((error) => error);
```

3. New String Features

**_Multiline Strings_**
**old JS:**

```
let oldMultiLine = "First line,\nSecond Line,\nThird Line";
```

**ES6+**

```
let newMultiLine = `First Line, Second Line, Third Line`;
```

**_String Interpolation / Template Literals_**

```
const username = "Dustin",
hobby = "spoiling his cats";

const stringLiteral = `${username} loves ${hobby}`;
console.log(stringLiteral);
```

4. Object Literal Syntax

**old JS**

```
function getMobile(manufacturer, model, year) {
    return {
        manufacturer: manufacturer,
        model: model,
        year: year,
    };
}
console.log(getMobile("Samsung", "Galaxy", "2020"));
```

**ES6+**

```
const getMobile = (manufacturer, model, year) => {
return { manufacturer, model, year };
};

consol.log(getMobile("Samsung", "Galaxy", "2020"));
```

5. Spreading and Destructuring

**_Array / Object Spreading_**

**array shallow copy**

```
let array = [1, 2, 3];
let newArray = [...array];
console.log(newArray, "spread array");
```

**object shallow copy**

```
let object = {
name: "Dustin",
cats: [
{ name: "Toots", hobbies: ["napping", "being sassy"] },
{ name: "Waffles", hobbies: ["napping", "destroying all furniture"] },
],
};

let newObj = { ...object };
console.log(newObj, "spread object");
```

**_Destructuring_**

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

6. Optional Chaining

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

7. Async / Await

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

**ES6+**

```
const newApiCall = async (url) => {
    try {
        const resp = await fetch(url);
        const data = resp.json();
        return data;
    } catch (e) {
        return e;
    }
};
const apiData = await newApiCall(myApiUrl);
console.log(apiData);
```
