// DOM LECTURE

// NODES, CHILDREN, PARENTS, SIBLINGS

// DOM - Document Object Model.

/*
DOM - Is basically a tree.


                          [body] <-- Nodes
                          /    \
                         /      \
                        /        \ 
    Sibling Nodes --> [ul]      [ol]  <-- Sibling Nodes // any node that shares the same parent, and on the same level
                      /  \      /  \
                    [li][li]  [li][li] <-- Child Nodes // any node nested inside of a parent element.

   *Nodes can have children, NESTED inside of them.
 */

var bodyNode = document.getElementById("body");
var h1Node = document.getElementById("title");
// console.log(bodyNode);

// Create an HTML Node from scratch, in JS!
var pNode = document.createElement("p");
var pNode2 = document.createElement("p");

// how to play with text
pNode.innerText = "This isa my catchphrase!";
pNode2.innerText = "blue badda dee badda bye";

// how to play with css
pNode2.style = "color: blue;";

bodyNode.appendChild(pNode);
bodyNode.appendChild(pNode2);

// Other fun DOM manipulation functions

// setAttribute() - allows you to add an attribute to a HTML node
// getAttribute() - return the value of the attrbute on your HTML node.

// appendChild() - inserting a child node into the target HTML node, after the last child node
// prepend() - inserting a child node into the target HTML node, before the first child node

// Useful DOM manipulation propteries, which can grab nodes in relationship to each other.
// nextSibling
// previousSibling
// childNodes
// firstChild
// lastChild
// parentNode

// Homework hints
var h3NodeTimer = document.createElement("h3");
h3NodeTimer.innerText = 100;
bodyNode.appendChild(h3NodeTimer);

var timer = setInterval(function () {
  h3NodeTimer.innerText--;

  // parseInt allows us to transform string into numbers if possible
  if (parseInt(h3NodeTimer.innerText) === 0) {
    // clear interval is how you kill your interval function <3
    clearInterval(timer);
    pNode.setAttribute("class", "added-class");
  }

  // string comparison solution
  if (h3NodeTimer.innerText === "0") {
    clearInterval(timer);
  }
}, 10);

// explain const, because I accidentally wrote it

// var - hoists variables to the top of the JS file.
// console.log("woo", oldJSVariable);
// var oldJSVariable = "oldie but a goldie";

// let - not hoisted, value can be changed
let newLetJSVariable = "this value can change!";
newLetJSVariable = "a new string - yay!";
console.log(newLetJSVariable);

// const - not hoisted, value cannot be changed
const newConstJSVariable = "this value CANNOT change!";
newConstJSVariable = "another new string - yay!";
console.log(newConstJSVariable);

const newH2Node = document.createElement("h2");
newH2Node.innerText = "I'm a happy H2 Node :)";
bodyNode.appendChild(newH2Node);
