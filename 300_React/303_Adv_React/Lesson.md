Hello again! I have good news! This is going to be the last React lesson for the
Tech Learning series. We're going to be covering more advanced tools of React,
mostly some hooks that you can implement into your functional components.

After we upload this lesson to Confluence, I'm pretty confident you'll have a
great in-house resource to dip your toes into React and how to build a frontend
with it.

So where do we go after this? The next lessons I'm going to be teaching is...
TypeScript! Woo! Without going too much into it, TypeScript was created to
transform JavaScript into a much more useful programming language for large
scale apps, mostly by adding types to it.

That being said, let's hammer out our last React lesson! Everything we cover
today are tools that are available in vanilla React, no other libraries needed,
to help solve some problems we're bound to run into at an enterprise level.

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

We do this by using two functions from React - createContext and the useContext hook.
After we create our context, which think of that as a place where we can store state
decoupled from the components themselves. We create a context by giving it an initial
state, and a function to update that state. This returns us a Context object that we can
use on our components.

By wrapping our top level component in a context provider. Then, when we want to use
and update this context, we can create a state variable and a set function from the
useContext hook.

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
where they live in the component tree. Reducers are a way that you can change the
data of this global state.

In our Reducer widget, we have these three increment / decrement values, which add
more of the color to the title. Unlike the useState hook, we accomplish this by
utilizing the useReducer hook. All it needs is the reducer function we wrote, an
intial state object (kind of like useContext), and we get a state variable back,
along with a way to update the reducer's object with a dispatch function.

When we use this dispatch, we send actions to the reducer, and it affects this global
state store we made. In this example, we aren't using a global store, but we can still
work with this decoupled value.

When we dispatch these actions to our reducer, the reducer affects our state based
on the action that we gave it. It's important to note, that this is not actually
mutating the state of the component, it is returning us an entirely new object.
This allows our faux-Redux (but just imagine that this is Redux), to know that we
have changed the state, and need the store to return to us in a different state.

Let's go over how this flows through our reducer.

If we didn't return a whole new object from the reducer, it becomes hard to reason
that anything changed, and we would all cry as we try to debug why our state isn't
behaving the way we want it to.

## Use Case?

Why even do this, this just seems like a useState hook with added complexity, more
ritual, and more steps to accomplish the same thing.

Yes! You are right. But there are two things Redux and the useReducer hook gives us
that more than make up for this.

First, like I touched on before, we have now decoupled our state from our component,
and we can now share this global state we get from the reducer in our other components.

Second, this makes our state much more testable. Because our state is out of the component,
our state is now made pure. We can give our reducer the same state and the same action, and
every time the result will always be what we expect it to be.

There isn't this guaruntee if you're mutating state in every component, everywhere in your app.

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

Because we are referencing this value value directly, instead of the captured state from
our useState function. So, when our timeout finishes, we have values being used that
are way behind what the current data of our components reflect.

## Use Case?

You can tie this to a JSX element in your component. So why do that? The most I've used
that is when using animation libraries.

From insuring it will be where you expect it to be across all renders. Because React is
constantly mounting and unmounting DOMelements, there's no guaruntee that any element will
stay where you expect unless you tie a ref to it.

You can imagine how painful animations in react would be, if you were animating a ball bouncing
across the screen, and React constantly resets the state of where that ball is based on
delayed functionality updating that data.

By tieing the bouncing ball to a useRef(), you are allowing that ball to utilize the most
current, accurate information, no matter what React does to rerender its other components.

`Questions??`

**_ HERE THERE BE... Performance Optimizations _**

The next section is solely ways to implement performance optimizations.

useMemo is for memoizing values.
useCallback is for memoizing functions.
React.memo() is used for memoizing components.

There is a danger here!

You do not want to memoize everything. A good rule of thumb is you want to have a
performance problem first, then implement performance optimizations. If everything is
memoized, everywhere in your components, your components are not going to render when
you expect them to.

You will wind up reverse debugging your optimizations because nothing in your changing
state will trigger your components to rerender and update the state in the UI.

# useMemo

`Memo.js`

In this part of the widget, we are calculating the Fibonacci sequence, which is notorious
for being expensive and taking forever to calculate. This function also uses exponential
recursion. Two very, very bad things to do if you are gunning for performance.

Once we increment the `n` number that the function takes, when we get to the 30s and 40s,
our component is to the point where it has to call hundreds, maybe thousands, of functions
to update the UI.

Because our component is rerendering when the title is clicked and the color changes,
we have to recalculate fibonacci every time. useMemo thankfully solves that.

So what if I need to interact with another part of my component, but that's also going to
trigger a rerender of that expensive part of the widget? I can memoize the expensive part
while that happens, which allows me to interact with other parts of the UI.

# useCallback

`Callback.js`

useCallback is basically the same and implemented with the same functionality as useMemo. We have
our very ExpensiveComputationComponent, which we only want to re-render whenever it absolutely has to.
Whenever React detects a change up the UI tree, it re-renders everything underneath it. This usually
isn't bad because React is still pretty fast at rendering things. But! You can run into performance
issues if you have to constantly rerender a parent component, say if it had a timer, but we still have
a very expensive child of that parent component.

In this case, we need to make sure that the function itself given to ExpensiveComputationComponent is
the same function every time. This is where useCallback can make sure that React is handing the same
fibonacci() to ExpensiveComputationComponent every time so it passes its React.memo check every single
time. Now it's only if count changes will it actually re-render (as evidenced by the time.)

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
this memo power. Because when your memoized components start to misbehave, it's really hard to track down
where in your data flow what's making it render, or not render, when you want it to.

`Questions??`
