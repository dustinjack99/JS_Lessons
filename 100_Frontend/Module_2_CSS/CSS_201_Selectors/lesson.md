Invite to Write Code with Me!
(Also start your timer, Dustin)

### Tech Check:

- Have VS Code installed
- Live Server Extension

### Overview

- Welcome to Urgently Tech Learning Series!
  - Starting with basic front end tech
  - Thread the needle between beginner knowledge and new innovations for experts
- Intro to HTML & Building on knowdledge we'll need for React.
- Stick around for CSS and JS!
- Q / A Afterwards

### HTML

What is it? Hypertext Markup Language
(Pillar 1 of 3 of the frontend)

- HTML does not run, it's a descriptive static language that the web browser understands.

- The browser loads the document and behaves based on what tags you use.

- We are on HTML5.1, which has been the case for the last 10 years. HTML itself is 30 years old.

- According to MDN there are 142 live HTML tags in use today, we are going to cover maybe 4 of them.

**_ LETS CODE! _**

1. Basic block - Tag or Element

- We are going to assume you know how to write tags, you know that tags are nested templates.

2. Symantic Example

   - Use H tags to change font size.
   - We can use CSS to change our font size, why bother using the symantic values of the H tags? Three big reasons:
     - These values are used by accessibility tools like screen readers. We want our apps to be for everyone. These symantic tag names help make our apps avaiable to everyone.
     - Your app is competing with others for dominance in the search engine, web crawlers like Bing and Google use these tags to prioritize and bump your app to the top.
     - It leaves the developers intent on the page, which makes it easier to collaborate and fix your own code later.

3. HTML Tag Types

   - P tags
   - Anchor tags
     - Used to navgate to other sites with href.
     - taget="\_blank"
     - mailto:dustin.guy.jackson@gmail.com
     - relative file path: ./lesson.md
     - name attribute, which can be navigated to by other A tags: name="#my-name"
   - Divs (division / divider)
     - has no symantic meaning, its a no-name container that you put other stuff in, this will make a lot more sense when we get to CSS
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
