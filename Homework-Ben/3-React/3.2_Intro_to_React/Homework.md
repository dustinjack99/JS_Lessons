We have dipped our toes in React, and just to summarize what we covered today:

**_React Is..._**

- A view engine, and one of the most in demand front end libraries on the market.
- A library that combines HTML and JS into reusable JSX components.
- These components can consume data, and render this data into your UI with HTML syntax.
- Can be worked with just like vanilla JS, which means you have all the functionality of conditional logic, loops, functions, etc available for you to use.
- React is much, MUCH more, but we will cover all of this in later lessons. We've only scratched the surface...

For your homework, I want you to:

1. Make your own create-react-app inside this folder (which you've done already if you've been coding along).

2. Install axios - run `npm i axios`, then make yourself a custom component React file, call it `Users.js`.

3. In this React file, import axios. Then use these lines of code INSIDE your component, but BEFORE returning your JSX:
   `const users = await axios.get("https://jsonplaceholder.typicode.com/users");`
   `console.log(users);`

4. This will give you a list of 10 users in a JSON object. It is your job to use this data and build out the JSX to display it.

5. This custom component must also have two child components that you've written yourselves.

6. I want styling! I haven't made this a requirement for some time, but I want to see some CSS chops. Feel free to shop around and use external libraries.

**HINTS**
Remember that your components can consume data, called 'props'. This is how you'll be able to pass down data from parents components to their children.

**_Useful Links_**
Into to React - UW Bootcamp
`https://bootcampspot.com/sessions/606236/videos/81560`

Complete Intro to React, V6 - Frontend Masters
`https://frontendmasters.com/courses/complete-react-v6/`

React JS Crash Course 2021 - Traversy Media
`https://www.youtube.com/watch?v=w7ejDZ8SWv8`
