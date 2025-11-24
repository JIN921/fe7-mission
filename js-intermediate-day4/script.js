const fetchData = async () => {
  const res = await fetch("./mock.json");
  const data = await res.json();
  return data;
};

const data = await fetchData();
console.log(data);

const ul = document.querySelector("ul");

const span = document.createElement("span");
span.innerText = "add cart";

data.forEach((ele) => {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const span = document.createElement("span");
  span.innerText = "add cart";

  h3.innerText = ele.productName;
  img.src = `./asset/${ele.productImgFileName}`;
  img.alt = ele.productName;

  li.appendChild(h3);
  li.appendChild(img);
  li.appendChild(span);

  ul.appendChild(li);
});
