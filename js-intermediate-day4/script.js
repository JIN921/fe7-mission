const fetchData = async () => {
  const res = await fetch("./mock.json");
  const data = await res.json();
  return data;
};

const data = await fetchData();

const ul = document.querySelector("ul");

const cart = [];

data.forEach((item) => {
  // 아이템 목록 추가
  createList(item);
});

createModal();

// item 목록 생성
function createList(item) {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const button = document.createElement("button");
  button.innerText = "add cart";

  // 아이템 추가 버튼
  button.addEventListener("click", () => {
    addToCart(item);
  });

  h3.innerText = item.productName;
  img.src = `./asset/${item.productImgFileName}`;
  img.alt = item.productName;

  li.appendChild(h3);
  li.appendChild(img);
  li.appendChild(button);

  ul.appendChild(li);
}

// 카트에 아이템 추가 함수
function addToCart(item) {
  // 현재 카트에 클릭한 item이 존재하는지 확인
  const existing = cart.find((c) => c.id === item.id);

  // 존재한다면
  if (existing) {
    // 카운팅 +1
    existing.count += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  // 존재하지 않으면
  else {
    // 기존 아이템 객체 복사후
    const new_item = { ...item };

    // 카운트 추가해서
    new_item.count = 1;

    // cart 배열에 해당 객체 추가
    cart.push(new_item);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

// 카트 비우는 버튼
const clearBtn = document
  .querySelector(".clearCart")
  .addEventListener("click", () => localStorage.clear());

// 카트 이동 버튼
const cartBtn = document
  .querySelector("a")
  .addEventListener("click", (event) => {
    console.log(cart.length);
    // 클릭시 이동 방지
    event.preventDefault();
    if (cart.length === 0) alert("장바구니가 비었습니다.");
    else window.location.href = event.currentTarget.href;
  });

// 모달
function createModal() {
  if (sessionStorage.getItem("closeModal")) return;

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
}
