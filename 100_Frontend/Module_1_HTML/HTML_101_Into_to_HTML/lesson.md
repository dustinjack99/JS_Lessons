### Tech Check:

- Live Server Extension
- Prettier Extension
- Auto-format turned on

### HTML

What is it? Hypertext Markup Language
(Pillar 1 of 3 of the frontend)

- HTML does not run, it's a descriptive static language that the web browser understands.

- The browser loads the document and behaves based on what tags you use.

- We are on HTML5.1, which has been the case for the last 10 years. HTML itself is 30 years old.

- According to MDN there are 142 live HTML tags in use today, we are going to cover maybe 4 of them.

**_ LETS CODE! _**

1. Basic block - Tag or Element

- Tags are the building blocks of HTML.
- Tags are the things that go inside the angle brackets.
- Tags are also called elements.
- Tags have a start and an end.
- Tags can have attributes.
- Tags can be nested inside of each other.
- Tags can be self closing.

  ```html
  <h1>My First Heading</h1>
  ```

- The above is a tag, it has a start and an end.
- The above is also an element.
- The above is also a block element, it takes up the whole width of the page.
- The above is also a symantic element, it has meaning to the browser.

2. Symantic Example

- Use H tags to change font size.
- We can use CSS to change our font size, why bother using the symantic values of the H tags? Three big reasons:
  - These values are used by accessibility tools like screen readers. We want our apps to be for everyone. These symantic tag names help make our apps avaiable to everyone.
  - Your app is competing with others for dominance in the search engine, web crawlers like Bing and Google use these tags to prioritize and bump your app to the top.
  - It leaves the developers intent on the page, which makes it easier to collaborate and fix your own code later.

3. HTML Tag Types

- H tags
- P tags
- ol / li
- imgs
  - https://www.petcarestores.com/wp-content/uploads/2021/06/Ragamuffin-Kitten.jpg
- Alt attribute is used for screen readers, also is a fallback if your image fails!
- uses src attribute to find image

4. Self closing tags / React Catchas.

- You can make self closing tags without the trailing slash.
- input tag as example
- However! When we go into React land, React JSX requires that slash, so even though we can do this, get out of the habit :)

5. Homework and Resources!
