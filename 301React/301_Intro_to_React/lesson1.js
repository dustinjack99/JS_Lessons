// START TIMER
// More experienced React people, feel free to chime in if I get something wrong!

// What is React?
// THE most in demand frontend library, it has become industry standard
// An open-source library from Facebook (META)!
// Developed to scale and build immense apps with rapidly changing data
// Solved by making an SPA where UI elements are broken into small, self-contained Components

// Concept of Components
// USE EXAMPLE JPEG.
// Idea of Components is breaking your UI down into the smallest, most reuseable parts.
// An example of what React can do? Look at Reddit's website.
// Look at how it may be broken apart in a component-based way.

// Data shifting applications
// We can now make enterprise-level apps that have data that constantly changes / updates
// How do we make sure our app's front end keeps up with this data?

// State management!
//  - Instead of countless event listeners and changing variables,
//  all you need to worry about the state of your app
// (Or, in Angular's case, incredibly bloated and complex controller / factory / template files)

//  - You can think of 'state' as the snapshot of your UI's data.

//  - React allows your components to rerender the UI whenever their 'state' changes

// Why rerender components?
// DOM reloads are super expensive - updating the DOM recalculates CSS, layout, and repaints the page.
// Does this by making virtual DOM, which lives in one index.html file.

// PROS
// + Resuable components - You don't have to write the same thing over and over again,
// EVEN in a distributed frontend.
// + UI updates on state changes, reducing expensive redrawing of the DOM
// + Can build React apps on web, server, desktop, and mobile
// + Easier learning curve than other frameworks, and most popular
// + One way data flow - which forces a more mindful approach to state management
// + It's lean - making it ideal for a distributed frontend.
// + Very, very testable, and also supported by Jest, the testing library maintained by META

// CONS
// - Only a view library, not a complete framework.
// - Requires more config / setup than other libraries.
// - One way data flow, which can make some side effects hard to reason about.
// - It does not run innately in browsers, and must be transpiled to JS to work.
// - Because React needs to be compiled, you lose SEO

// JUMP TO LESSON2.JS
