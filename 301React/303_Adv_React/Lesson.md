Hello again! I have good news! This is going to be the last React lesson for the
Tech Learning series. We're going to be covering more advanced uses of React,
mostly some hooks that you might run into with your functional components.

After we upload this lesson to Confluence, I'm pretty confident you'll have a
great in-house resource to dip your toes into React and how to build a frontend
with it.

So where do we go after this? The next lessons I'm going to be teaching is...
TypeScript! Woo! Without going too much into it, TypeScript was created to
transform JavaScript into a much more useful programming language for large
scale apps, mostly by adding types to it.

That being said, let's hammer out our last React lesson! What we'll be talking
about are advanced hooks and tools that exist in vanilla React to help solve
some problems we're bound to run into.

# useContext

`Context.js`

Let's talk about the Context hook. This is where we start touching on the concept
of global state in React. So we know that React has one way data flow: state data
glows from top to bottom, from parent components to their children.

As we've covered, React does this by passing state data, called "props" down the
UI tree. Here we have a component with five layers, or five levels of child
components.

We have this state data at the first level, and we somehow need to get this data
all the way down to the bottom to the increment UI.

The normal way you'd accomplish this is by passing the user object through the
props of each component. But let's look at what that would look like:

We now need to add props to our first level... second level... third level...
all the way down. This is called prop drilling, and it's the worst feeling in
the world to have to code this.

That's where useContext comes to the rescue. Because we can inject this context
into all of our components, no matter how deep they are, we no longer need to
code out all the props and state functions being passed to each component.

## Use Case?

The benefits of this are hopefully obvious. This idea of a global state helps clean
up the need to prop drill state data and state functions again and again, no matter
how deep the UI tree goes.

Although an argument can be made being aware of your data flow is a good thing, if
you have an enterprise scale app, expecially if you are working in a monolith instead
of a micro frontend your components become very bloated very fast, and you're probably
going to default to these state management tools once that happens.

This is also a very useful idea, global state, to keep in mind when you start using
state management libraries like Redux, which are a lot more built out and useful than
the vanilla useContext hook.

`Questions??`

# useReducer

`Reducer.js`

Speaking of Redux! Let's talk about another hook call useReducer. This hook is going to
be your new best friend when you start using Redux.

This hook allows you to use Redux reducers (or any reducers) in your functional components.

Wait Dustin, what the heck is a reducer??

A little bit of a primer. Redux is a way to manage the global state of your app,
so it allows us to store and retreive state from other components, regardless of
where they live in the component tree.

In our Reducer widget, we have these three increment / decrement values, which add
more of the color to the title. Unlike the useState hook, we accomplish this by
dispatching actions to a global state store we made.

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

There isn't this guaruntee if you're just wildly using useState everywhere.

`Questions??`

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

## Use Case?

You can tie this to a JSX element in your component, garunteeing is will be there
for you across all renders. Because React is constantly mounting and unmounting DOM
elements, there's no garuntee that any element will persist unless you tie a ref to it.

So why do that? The most I've used that is when using animation libraries.

You can imagine how painful animations in react would be, if you were animating a ball bouncing
across the screen, and React constantly destroys and resets the state of where that ball is.

By tieing the bouncing ball to a useRef(), you are allowing that ball to persist no matter
what React does to rerender your UI.

`Questions??`

**_ Here there be Performance Optimizations _**

# useMemo

`Memo.js`

In this part of the widget, we are calculating the Fibonacci sequence, which is notorious
for being expensive and taking forever to calculate. This function also uses exponential
recursion. Two very, very bad things to do if you are gunning for performance.

Once we increment the `n` number that the function takes, when we get to the 30s and 40s,
our component is to the point where it has to call thousands of functions to update the UI.

So what if I need to interact with another part of my component, but that's also going to
trigger a rerender of that expensive part of the widget? I can memoize the expensive part
while that happens, which allows me to interact with other parts of the UI.

Because our component is rerendering when useMemo example is clicked and the color changes,
we would have to recalculate fibonacci every time. useMemo thankfully solves that.

There is a danger here! You do not want to have useMemo everywhere. A good rule of thumb
is you want to have a performance problem first, then implement performance optimizations.
If there are useMemos everywhere in your components, your components are not going to
render when you expect them to.

# useCallback

`Callback.js`

useCallback is basically the same and implemented with the same functionality as useMemo. We have
our very ExpensiveComputationComponent, which we only want to re-renders whenever it absolutely has to.
Whenever React detects a change up the UI tree, it re-renders everything underneath it. This usually
isn't bad because React is still pretty fast at rendering things. But! You can run into performance
issues if you have to constantly rerender a component, say if it had a timer, but we still have a very
expensive to render part of the component.

In this case, we need to make sure that the function itself given to ExpensiveComputationComponent is
the same function every time. This is where useCallback can make sure that React is handing the same
fibonacci() to ExpensiveComputationComponent every time so it passes its React.memo check every single
time. Now it's only if count changes will it actually re-render (as evidenced by the time.)

Try removing the useCallback call and see if you get the the count to 40+ that the page crawls as it
updates every second.

`Questions ?`

# React.memo()

`memo/ParentComponent.js - memo/MemoCounts.js`

Here we have a wonderful widget to help us choose what wine we want with whatever cheese we are eating.

At the bottom of the widget, I have a render counting component. Even though I have state changing in
its parent component, nothing in this child component ever changes. The data flowing into it, and the
data inside never changes. So why would I use valuable resources re-rendering it?

This is where React.memo() comes in.

While useMemo() is for memoizing values and functions, React.memo() can be used for the entire component
itself. This will make sure a component doesn't re-render unless the props they're being passed change.

All I have to do is wrap the export of my component in React.memo() and all my rerenders of the parent
component no longer render the child component. None of the props are changing, so there's no need to
waste resources redrawing it.

Somewhat danger here! This is less dangerous to use everywhere than the useMemo hook, but you do run
into the area of making your app behave in ways that you don't expect. What's also interesting to note
is that the React devs at Facebook (or META) are working on auto-memoizing components out of the box
for a future release.

This would be a major performance jump for React, other frameworks like Svelte and I think Vue do this
by default, memoizing their components. But for now, React forces you to consider when and where to use
this memo power. Because when your memoized components start to misbehave, it's really hard to track down where in your data flow what's making it render, or not render, when you want it to.

`Questions??`
