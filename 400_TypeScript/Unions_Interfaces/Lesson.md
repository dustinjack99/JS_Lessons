https://www.typescriptlang.org/docs/handbook/intro.html
https://www.typescript-training.com/course/fundamentals-v3/01-intro/

`npm i -g typescript`

Hello again! This forray into TS we're going to be covering Union Types,
Intersection Types, Interfaces, Type Aliases, and JSON types. Sounds like
a lot doesn't it? If you're thinking about boolean logic - Union types are
the OR logic. An intersection type is the AND logic. Here's a ven diagram.

# Union Types

Union types are a special snowflake in the world of typed languages. It
allows values to be one type of another. We've seen this before when TS
flagged our Tuple array. It said any of the values could be a number OR
a string. We can declare types like these ourselves.

Let's take a look.

Here we can see the output of our `flipCoin` function will be either a
string of heads or tails. Nothing too special.

To show off TS in something a little more robust. Here we have a `function`
that will get a user's info based on our flipCoin function, which now has
an error case. Its return type is a tuple of either some error data or
some successful user data. You can see when we `consume` this outcome var,
TS will know what type of data will be in the tuple.

Now the danger that comes with making union types, is that you now have two
branching paths your code can take. This is where TS can break down if you
stop being defensive about the code you write. You can see when we break
into our second.name, name is the only thing we can access. Becasuse name is
garunteed to exist on the Error object, and name is garunteed to be there in
both cases. Not for out email value! It doesn't exist on type error.
Thankfully we can garuntee that both sets of logic are accounted for if we
use a concept called type narrowing and type guards.

## Type Narrowing / Type Guards

Let's write a `type guard` where we know the branch of code will be an
instance of our Error. We can see in the first block of code the branching
path is an Error, so now we can access our error data like message. In our
else case, we can now break open and finally access our email data.

TS utilizes our instanceof keyword, and is able to create different paths
that can understand where these types will be called.

There's more we can do here, we don't even need to use isntanceof because
we're using a typed tuple. Let's write this `type guard again`, but use an
index of our outcome. TS is smart enough to understand that if the 0 index
of is an error, the second index will be type Error. This is a concept
called type discrimination, which uses linked data to rule out other options
of types that may exist.

# Intersection Types

We have a function that makes a week and spits out a date, but we also need
an end time. Instead of making a new function, typing that, make sure it has
no breaking changes throughout the code... we can just tack on some extra
stuff. By using the `&` operator, we can smash these two types together, then
when we `consume` them, you can see both start and end values are there for
us.

You will very very rarely ever use intersection types. Chances are, if you
are thinking about using one as your first line of defense, you are just
making a band-aid and you most likely be mocked with funny gifs in code review.

# Type Aliases / Interfaces

## Aliases

Let's move onto type aliases and interfaces. You may have noticed how bloated
some of these annotations of our types can be. Especially if we are annotating
objects. That can get really hard to read, really fast. Thankfully, like
storing a variable, we can give our types names with type aliases and interfaces.

This will allow us to declare what we want our type to be in a single place,
and give us the power to import / export it like we would a function in a JS
module.

Let's make a function printContactInfo. Instead of annotating the object, we
can import a type alias from another file. Ah, look at how much cleaner that
looks, and it works the same way as annotating the argument. What's more, we
can use it over and over again.

Now remember! This is a structural type system, we're only looking for those
properties to exist on the object, not if something shares the same name. If
data is passed with more properties on it, TS still lets the object pass through.
And remember this is because there may be other places this value is used outside
of our printContactInfo function. So we have the data shape needed, not the name.
TS is not a nominal type system, it does not worry about name, remember that!

Now let's clean up our old code, and clean it up a lot with type aliases. Let's
clean up our getUserInfo function.

One more thing to note is that you cannot have multiple type aliases of the same
name - that will be explained more once we cover interfaces.

## Interfaces

Interface are much more limited. They can only be used for object types. It can
be an object with properties. It can also be used with classes. You can also
import and export them.

Some special things that interfaces do, is handle inheritance, much like the base
JS classes.

Let's make ourselves a dog. A dog is also a mammal. A mammal is also an animal.
We can make and extend interfaces for all three of these classifications. Once
we get to class dog, which inhereits all of these things that animals and
mammals have, by the time we pass interface Dog to our function, look at that!
TS knows all the functions that should exist on our dog class, along with all
functions that were inherited.

But wait! There's more! TS adds a whole new type of inheritance keyword. It's the
`implements` keyword. Imagine is as a reverse of what extends does. Instead of
passing the attributes down to what is extended, the implement clause will be
there to tell you when you should add properties to the class or object itself.

In our example, when we implement this `new interface` into our Dog class, we will
be told to make sure we write the eat function into the class itself.

One more thing to cover about interfaces. Unlike type aliases, where you can only
have one name for each type, interfaces are `open`, meaning you can have more
than one ideclaration of an interface. What's even weirder, when you do this, the
multiple interfaces will combine at compile time, and small all of them together.

I hate this. Let me show you why. In our `AnimalLike` interface, we have a
declaration above and below our function where we consume it. Both AnimalLike
instances are put together, and in our function, we have access to both the
eat and isAlive functions. Remember my rant about hoisting and how terrible
the var keyword is? This is somehow worse than even that. This will have effects
throughout your entire codebase, wherever your multiple instances are used.

However, there is a use case for this.

If you have a global object, you might want to append something to it. Like as
web devs, we can append things to the window object. Once we do that, we'll be
able to accurately type it as well.
