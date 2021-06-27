//DOM LECTURE
console.log("hello");
//NODES, CHILDREN, PARENTS
/*
DOM - Document Object Model.


             [body] <-- Nodes
        /               \
       /                 \
      /                   \ 
     [ul]<- Sibling Nodes ->[ol]
    /    \     \
   [li]  [li]   [li] 

   *Nodes can have children, NESTED inside of them.
 */

//APPENDING NODES

/*   [body]
        \
        []
*/
const body = document.getElementById("body");
// console.log(body);

// Create an HTML Node from scratch, in JS!
const pTag = document.createElement("p");
const pTaggle = document.createElement("p");
// console.log(pTag);

//DOM NODE PROPERTIES
//Changing textContent and CSS properties
pTag.textContent = "Eggplant Parmesan... and manicotti";
pTaggle.textContent = "calzone and cannoli";

//setting CSS with style property
pTag.style = "color: blue;";
pTaggle.style = "color: darkred;";

//setting CSS with setAttribute()
pTag.setAttribute("style", "color: green;");

// Appending an HTML Node to its parent Node.

//Append one node
body.appendChild(pTag);
body.appendChild(pTaggle);

//Append multiple nodes... but not
// const nodeArray = [];
// nodeArray.push(pTag);
// nodeArray.push(pTaggle);
// body.append(nodeArray);

console.log(pTag.previousSibling);
console.log(body);

//setInterval() demo

const pTimer = document.createElement("p");
pTimer.textContent = 100;
body.appendChild(pTimer);

// store interval in a variable, then you can clear it :)
const timer = setInterval(() => {
  pTimer.textContent--;
}, 1000);
