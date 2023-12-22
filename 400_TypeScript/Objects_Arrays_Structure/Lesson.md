https://www.typescriptlang.org/docs/handbook/intro.html
https://www.typescript-training.com/course/fundamentals-v3/01-intro/

`npm i -g typescript`

Hello and welcome back for our second lesson in TypeScript. Today, we are
going to cover typing Objects, Arrays, Tuples, and touch on the theory of
how TypeScript structurally types your code, which is different than most
other languages accomplish type safety.

# Objects

Done by typing the names of your properties, then listing the type those
properties are.

Much like how we did type annotations on arguments for functions, we can
attach this object type syntax to variables and arguments, and TS will know
the shape of the data this object type needs.

## Optional Properties

Let's add an optional property to our object. We at Urgently are partnering
with tons of electric vehicle manufacturers. So some of our vehicles are
expecting a chargeVoltage property, but not all of them.

When we add that field to the type declaration, you can see TS gets fussy.
So how to we annotate that this field is optional? Easy, just throw a ?
operator at the end of the property.

Now chargeVoltage is not required, because some cars are gas powered, and
thus won't have it. But when we do have chargeVoltage, it will be a number.

So let's see it in action as a function. We'll make a `printCar()` function
that accepts a car. You can see that it will run if we have make, model, and
year, as well as when we pass it chargeVoltage. This makes TS very happy.

## Excess Property Checking

TS will also check if we add properties that are not defined in the type.
So if an engineer is implementing license plates into this codebase,
TS will throw an error if that type is not defined. Because we cannot
safely access this value from inside the function.

A few caveats! What happens if we add the value ourside the function, yet
still pass it. We get no error. That's because we don't want to stop other
code from reaching in and accessing licensePlate. The value still exists on
the object. This function does not know if this value is relied upon, so
the function allows passing licensePlate.

The part we can't do, is pass an object literal. That will yell at us for
the shape of our data type, because we know the literal shape of this object.

## Index Signatures

So what if we have a dictionary? What if we have a consistant type of data,
that can be looked up by a key in an object?

This is where we can use index signatures. Now we can access the name of
any key, and TS will infer its type, knowing all the entries are going to
be the same shape of data.

Now you may want to check if fax or area are actually present. To add a bit
more secutiry, you can pass it make it a union type of undefined. This will
force you to consider and check if cell really exists.

# Arrays

Super simple, if you have simple arrays types. Do you have a string array?
Simply add square brackets after the type declaration.

We can have arrays of objet types.

## Tuples

If you have strict types for the positions on your array, you need a tuple.

Let's make a car array, with year make and model in very specific positions.

Unfortunately, type inference is not getting this correct. It's only able to
assume, based on the data types of what's in the array already, that the type
of each entry is going to either be a number of a string. That's not very
useful.

This is dangerous. We could add another element to the array. We could put
values in places they shouldn't be.

We can fix this by annotating with square brackets, specifying which entry
must be which type.

One more caveat. There is a large limitation for your tuple. There is no safety
built around pushing items to your tuple and popping them off. However, there
is safety on literal assignment by index. Why is this?

I think it's because when a push and pop happens, TS has no way of knowing if
the array way altered somewhere else, and if the length of the array has changed.
However, literal assignment to an index, TS knows that index is supposed to be
a certain type.

# Structural vs. Nominal Types

Now that we've looked at a lot of writing the language, I want to close out by
talking about the theory of the actual typing system TS uses.

As I've been talking about TS, I've tried to say that TS checks the shape of the
type, instead of the name of the type. This is for a good reason - TS, unlike a
lot of other languages, checks the shape of the type's data instead of the type's
given name.

Below we have two examples of how a language can type check, one is Java, which
uses a nominal type system, compared to TS, which uses a structural type system.

## Nominal Type

Nominal type systems are all about names. What name did you give the type.

In the code above, when considering the question of type equivalence on the last
line, all that matters is whether myCar is an instance of the class named Car

## Structural Type

Structural types are all about the shape of the data. If you take a look at the
TS example:

The function printCar doesn’t care about which constructor its argument came from,
it only cares about whether it has:

A make property that’s of type string
A model property that’s of type string
A year property that’s of type number
If the argument passed to it meets these requirements, printCar is happy.

I personally prefer strucural typing, because it doesn't allow you to get lazy
with the data, which is the important thing we're trying to worry about here.

At the end of the day, even if the compiler yells at you, your JS code is going
to run. So you may as well enforce the strictest standards you can before
releasing your code out into the wild.
