"use strict";
const hamBtn = document.querySelector(".menu-btn");
hamBtn.addEventListener("click", function (e) {
  e.preventDefault;
  this.classList.toggle("menu-btn_active");
});
