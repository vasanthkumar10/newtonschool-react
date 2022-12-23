// console.log("event logged");
const para = document.getElementById("para");
const btn = document.getElementById("btn");
//
para.addEventListener("click", function () {
  console.log(this);
});

para.addEventListener("click", (e) => {
  e.target.style.color = "red";
  e.target.classList.add("mystyle");
});

btn.addEventListener("click", (e) => {
  console.log("clicked");
});

console.log(btn);
