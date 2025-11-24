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

const cartBtn = document
  .querySelector("a")
  .addEventListener("click", (event) => {
    event.preventDefault();
    if (cart.length === 0) alert("장바구니가 비었습니다.");
    else window.location.href = event.currentTarget.href;
  });

const modal = document.createElement("div");
const modalInner = document.createElement("div");
const modalText = document.createElement("span");
const modalBtn = document.createElement("button");
modalBtn.innerText = "오늘 그만보기";
modalText.innerText = "방문해 주셔서 감사합니다! \n 즐거운 쇼핑 되세요!";
modalBtn.addEventListener("click", () => {
  sessionStorage.setItem("closeModal", true);
  document.body.removeChild(modal);
});

modal.className = "modal";
modalInner.className = "modalInner";

document.body.appendChild(modal);
modalInner.appendChild(modalText);
modalInner.appendChild(modalBtn);
modal.appendChild(modalInner);
if (sessionStorage.getItem("closeModal")) {
  document.body.removeChild(modal);
}
