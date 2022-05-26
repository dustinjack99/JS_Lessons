const api = "https://jsonplaceholder.typicode.com/users";

function makeListItem(fullName, website, email) {
  const list = document.getElementById("user-list");
  const li = document.createElement("li");
  const pName = document.createElement("p");
  const pWeb = document.createElement("p");
  const pEmail = document.createElement("p");

  pName.textContent = fullName;
  pWeb.textContent = website;
  pEmail.textContent = email;

  li.className = "user-list-item";
  li.appendChild(pName);
  li.appendChild(pWeb);
  li.appendChild(pEmail);
  list.appendChild(li);
}

// Old JS BOOOOO!!
function oldJsFetch(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (user) {
        var fullName = user.name;
        var website = user.website;
        var email = user.email;

        makeListItem(fullName, website, email);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

//ES6+ JS Fetch
// make ES6Fetch funcrtion
const ES6Fetch = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach((user) => {
      const { name, website, email } = user;
      makeListItem(name, website, email);
    });
  } catch (err) {
    return err;
  }
};

// run the functions
// oldJsFetch(api);
ES6Fetch(api);
