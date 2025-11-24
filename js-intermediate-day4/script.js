const fetchData = async () => {
  const res = await fetch("./mock.json");
  const data = await res.json();
  return data;
};

const data = await fetchData();

const ul = document.querySelector("ul");

const cart = [];

data.forEach((item) => {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const button = document.createElement("button");
  button.innerText = "add cart";
  button.addEventListener("click", () => {
    if ("count" in item) {
      cart[item.id] = { ...cart[item.id], count: cart[item.id].count + 1 };
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      item.count = 1;
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });

  h3.innerText = item.productName;
  img.src = `./asset/${item.productImgFileName}`;
  img.alt = item.productName;

  li.appendChild(h3);
  li.appendChild(img);
  li.appendChild(button);

  ul.appendChild(li);
});

const clearBtn = document
  .querySelector(".clearCart")
  .addEventListener("click", () => localStorage.clear());
