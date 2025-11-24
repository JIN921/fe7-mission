const fetchData = async () => {
  const res = await fetch("./mock.json");
  const data = await res.json();
  return data;
};

const data = await fetchData();
console.log(data);

const ul = document.querySelector("ul");

data.forEach((ele) => {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const button = document.createElement("button");
  button.innerText = "add cart";
  button.addEventListener("click", (event) => {
    localStorage.setItem(`item${ele.id}`, JSON.stringify(ele));
    console.log(typeof ele);
  });

  h3.innerText = ele.productName;
  img.src = `./asset/${ele.productImgFileName}`;
  img.alt = ele.productName;

  li.appendChild(h3);
  li.appendChild(img);
  li.appendChild(button);

  ul.appendChild(li);
});
