"use strict";
const hamBtn = document.querySelector(".menu-btn");
const elNavList = document.getElementById("jsNavList");
hamBtn.addEventListener("click", function (e) {
  e.preventDefault;
  this.classList.toggle("menu-btn_active");
  elNavList.classList.toggle("active");
});
