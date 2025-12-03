import { sayHi, sayBye } from "./sayModule.js";

const hiBtn = document.getElementById("sayHi");
const byeBtn = document.getElementById("sayBye");

hiBtn.addEventListener("click", () => sayHi("지니"));
byeBtn.addEventListener("click", () => sayBye("지니"));
