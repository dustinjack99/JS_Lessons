# useContext

# useRef

`Ref.js`

We have two stateful values. One using useState, and the other created using useRef.

If I hit the delay logging button, we would expect the state in the UI and the state
in the alert to be the same.

They aren't! Why is that?

The difference is that the state of the Ref value, is going to remain the same
across all rerenders. Let's see what happens when I click the button over and over.

Ref is useful if you always want the most current state, regardless of closure
or render. When the delay is scheduled, useState captures the state of when we
clicked the button from the hook, NOT the direct state value that's stored in the Ref.

Because we are accessing this value on the DOM directly, instead of the virtual DOM,
this value will always be the most current version of what we need.

### Use Case?

You can tie this to a JSX element in your component, garunteeing is will be there
for you across all renders. Because React is constantly mounting and unmounting DOM
elements, there's no garuntee that any element will persist unless you tie a ref to it.

So why do that? The most I've used that is when using animation libraries.

You can imagine how painful animations in react would be, if you were animating a ball bouncing
across the screen, and React constantly destroys and resets the state of where that ball is.

By tieing the bouncing ball to a useRef(), you are allowing that ball to persist no matter
what React does to rerender your UI.

# useReducer

`Reducer.js`

This hook is going to be your new best friend when you start using Redux.

This hook allows you to use Redux reducers in your functional components.

You are able to receive a dispatch function, which you can fire off actions to,
and receive a new state from a Redux store.

A little bit of a primer. Redux is a way to manage the global state of your app,
so it allows us to store and retreive state from other components, regardless of
where they live in the component tree.

When we dispatch these actions to our reducer, the reducer affects our state based
on the action that we gave it. It's important to note, that this is not actually
mutating the state of the component, it is returning us an entirely new object.
This allows our faux-Redux (but just imagine that this is Redux), to know that we
have changed the state, and need the store to return to us in a different state.

If we didn't return a whole new object from the reducer, Redux would not know that
anything changed, and we would all cry as we try to debug why our state isn't
behaving the way we want it to.

## Use Case?

Why even do this, this just seems like a useState hook with added complexity, more
ritual, and more steps to accomplish the same thing.

Yes! You are right. But there are two things Redux and the useReducer hook gives us
that more than make up for this.

First, like I touched on before, we have now decoupled our state from our component,
and we can now share this global state we get from the reducer in our other components.

Second, this makes our state much more testable. Because our state is out of the component,
our state is now made pure. We can give our reducer the same state and the ame action, and
every time the result will always be the same.

There isn't this garuntee if you're just wildly using useState everywhere.

# useMemo

`Memo.js`

In this part of the widget, we are calculating the Fibonacci sequence, which is notorious
for being expensive and taking forever to calculate. This function also uses exponential
recursion. Two very, very bad things to do if you are gunning for performance.

Once we increment the `n` number that the function takes, when we get to the 30s and 40s,
our component is to the point where it has to call thousands of functions to update the UI.

So what if I need to interact with another part of my component while this expensive
calculation happens? I can memoize the expensive part while that happens, which allows
me to interact with other parts of the UI.

Because our component is rerendering when useMemo Example is clicked and the color changes,
we would have to recalculate fibonacci every time. useMemo thankfully solves that.

There is a danger here! You do not want to have useMemo everywhere. A good rule of thumb
is you want to have a performance problem first, then implement performance optimizations.
If there are useMemos everywhere in your components, your components are not going to
render when you expect them to.

# React.memo()

While useMemo() is for memoizing values, React.memo() can be used for the entire component
itself.
