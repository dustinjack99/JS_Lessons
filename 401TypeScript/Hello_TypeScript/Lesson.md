https://www.typescriptlang.org/docs/handbook/intro.html
https://www.typescript-training.com/course/fundamentals-v3/01-intro/

`npm i -g typescript`

Welcome to your first TypeScript lesson! In these first steps, we will cover some basic
TS tools, such as the language server and the compiler, then take our first steps into
writing the language itself, and which will demonstrate the usefulness of a type safe
language and why they're so indespensible in large code bases.

# What is TypeScript?

A superset of JS. It's a language that adds a type system on top of the JavaScript that you
already know. On top of that, there's two other major features of the TypeScript suite aside
from the typed language itself.

There is also the `language server` and the `compiler`.

The `language server` will also help enchance any auto-complete capabilities of your
code editor.

The `compiler` does most of the heavy lifting when it comes to TS. First, it performs analysis
on your code, and works kind of as a pre-runtime linter, which will help catch errors before you
even compile. On top of that, it will actually transform your TypeScript code into browser-readable
JS that can be consumed by apps or through libraries you write.

# Why Types?

1. Leave more of your intent on the page

- It's a lot easier to reason about your code, and those who you collab with

2. Catches a lot of bugs at compile time vs. runtime

- Will catch incorrect types for your function arguemnts
- Warn if you have undefined or null values
- Point to incomplete refactors

# Lesson:

1. First, we are going to compile a TypeScript project
   - use the tsc compiler cli
   - look at how the target code changes, and how to adjust it
   - examine the output

## Bare Minimum for Hello TypeScript

- package.json `package / dependency list`
- tsconfig.json `compiler settings`
- src/index.js `TS code we want to compile to JS`

### tsconfig.json

- include: what files and folders to compile
- compilerOptions:
  outDir: this will tell TS where to compile files to. If the folder doesn't exist, TS will
  make one for us. By default, TS will make files one-for-one in JS of the TS files we made.
  target: what version of JS we are going to compile to. Almost everything can handle ES2015
  features, but to be super safe, and for those 2% of users who still use IE6, we can even
  compile to ES3.

### index.ts

There's immediately some useful info TS is trying to tell us, based on the target JS we are
trying to compile to.

- Promises were introduced in ES2015
- async/await was ES2017

## Let's compile!

Now that we have everything here, let's run our `tsc` command

AAAH! Look at all this mess. I'm so glad I never had to touch JS this old.

Let's change target from es3 to es2015
Now let's do es2017. We now have all of out TS code, with only the type info stripped away.

Now let's configure our compiler to output a d.ts file. What's a d.ts file? A d.ts file is
an output of all your compiled types. It's a file with just type information. This is very
relevent to Urgently, because when we start sharing common npmlibraries, if we need to compile
the library to JS (which we will most likely have to), these d.ts files let anyone who
consumes our libraries to still take advantage of the type information, even if the files
that are being consumed are JS.

## Types of modules

Node wants common JS modules! Another property to be very aware of is "module", and we're
going to add the value "CommonJS" to ensure anything we run can be used in Node.js

# First Steps

## Variables

### let

The good news is that TypeScript out of the box has type inference. When you declare a
variable, you do not have to type it yourself. TS will set and track the type of whatever
data type the variable is born as. However, because now we are in the realm of type safety, if
we try to reassign a string to it, TS is there to help us.

### cosnt

now let's make a strict age. Because we create a constant value, which if you recall, the
value cannot be reassigned. So now, typescript assigns an immutable value type. Think of
this as not type number, think of this as type 6. If you try mutating this number, TS is
going to throw a warning. This concept is called a literal type. It is a type of literally 6.

### ANY type

We have a variable, that needs to be created before it has a value. If you do not assign a
value, TS will automatically infer that this can be type any. ANY is the most lenient type.
This is the only time TS will allow you to pass different types to a variable. This is a
situation where you'd be able to assign a string, then null, then a number, but you really
want to use type any only when you have to.

Something bad is happening here. We are assigning a number, THEN a date value. This is where
can annotate endtime with the Date type, and TS will be there to tell us hey, on this line
you are assigning a number, maybe you don't need to do that.

Because most of the time type annotations can be inferred for variable, most of the time
you won't need them. However, where you will always use type annotations, is the last thing
we'll cover with our first lesson.

## functions!

Type annotation are the way where you solidify the contract of what your functions are
going to do.

In this add function, TS, and ourselves, have no way of knowing what is going to come
out of it. If we pass it a string and a numbner, we'll get a string. If we pass two
numbers, we'll get a number. If we pass it a Date object and a basket of cats, we'll
get who knows what. So TS has to assign the resulting value of ANY, which really
doesn't tell us much.

So the warning that I should now give, is what's the danger. It's only as dangerous
as an untyped JS variable. Which, if you've worked with typed languages before, should
terrify you.

Let's prove that by making bad code even worse, let's make a Promised value from our
any result. This is valid, because TS has to assume that in this any type, there could
be the ability to resolve a promise.

So let's add some type safety to our function, throw in the annotations, and see what happens.

When we add the number annotations to our arguments, a few things happen. TS is able to
not only warn us about broken code down the line, but it's also able to infer the return
type of our add function. Super nifty, and that allows us the know the type of the result,
and thereby know where we can and cannot use it.

Now we know where, down the line of our codebase, where the bugs are happening.

# Wrap Up:

That is our first steps into the glorious world of TypeScript. We covered the tools that
make TS work. We touched on the language server, which is a very useful
