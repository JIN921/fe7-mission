const ul = document.querySelector("ul");

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  return await response.json();
}
const data = await fetchData();

data.slice(0, 50).forEach((element) => {
  const li = document.createElement("li");
  li.innerHTML = `<h3>${element.email}</h3><p class='name'>${element.name}</p><p>${element.body}</p>`;

  ul.appendChild(li);
});
