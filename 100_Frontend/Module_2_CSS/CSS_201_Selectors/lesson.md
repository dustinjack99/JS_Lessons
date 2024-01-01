### Tech Check:

### CSS Selectors

- CSS Selectors are the way we target HTML elements to style them.
- There are many different types of CSS Selectors, but we're going to focus on the most common ones.
- We are already familiar with the element selector, which is just the name of the HTML element.
- We can also target elements by their class or id, which is an attribute we can set.

**_ LETS CODE! _**

1. Selection by ID

   - First what we need to do is add an id to one of our elements.
   - Add the following code to your `index.html` file:

   ```html
   <li id="first-element">First Element</li>
   ```

   - We can select an element by its id by using the `#` symbol.
   - Add the following code to your `style.css` file:

   ```css
   #first-element {
     background-color: blue;
   }
   ```

2. Selection by Class

   - We need to do is add a class to one of our elements.
   - Add the following code to your `index.html` file:

   ```html
   <li class="list-element">First Element</li>
   <li class="list-element">Second Element</li>
   <li class="list-element">Third Element</li>
   ```

   - We can select an element by its class by using the `.` symbol.
   - Add the following code to your `style.css` file:

   ```css
   .list-element {
     background-color: green;
   }
   ```

3. What are the differences between ID and Class selectors?

   - ID's are unique, there should only be one element with a given ID.
   - Classes are not unique, there can be multiple elements with the same class.

   - ID's are used to target a specific element.
   - Classes are used to target multiple elements.

4. What is "specificity" and why is it important?

   - Specificity is the way the browser decides which CSS rule to apply to an element.
   - The more specific a selector is, the higher the specificity.
   - The higher the specificity, the more likely it is that the browser will apply that rule to the element.
   - The browser will always apply the most specific rule to an element.
   - ID's have more specifity than classes, so the browser will always apply the ID rule over the class rule.
   - Classes have more specificity than elements, so the browser will always apply the class rule over the element rule.
   - So the order of specificity is ID > Class > Element.
