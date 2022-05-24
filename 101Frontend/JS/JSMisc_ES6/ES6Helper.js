export default function makeListItem(fullName, website, email) {
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
