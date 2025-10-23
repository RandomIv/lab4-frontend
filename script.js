// -------------------------
// Завдання 1
// -------------------------

const n = 49;
const index1 = (n % 10) + 1;
const index2 = index1 + 1;

const elements = document.querySelectorAll("body *");

elements[index1 - 1].id = "target1";
elements[index2 - 1].id = "target2";

document.getElementById("target1").addEventListener("click", function () {
    this.classList.toggle("active-blue");
});

document.querySelector("#target2").addEventListener("click", function () {
    this.classList.toggle("active-lime");
});

// -------------------------
// Завдання 2
// -------------------------

const img = document.getElementById("myImage");

document.getElementById("addBtn").addEventListener("click", () => {
    img.style.display = "block";
});

document.getElementById("increaseBtn").addEventListener("click", () => {
    img.style.width = (img.width + 20) + "px";
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
    img.style.width = (img.width - 20) + "px";
});

document.getElementById("removeBtn").addEventListener("click", () => {
    img.style.display = "none";
});