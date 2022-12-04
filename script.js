"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const openTheModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const clostTheModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openTheModal);
  btnCloseModal.addEventListener("click", clostTheModal);
  overlay.addEventListener("click", clostTheModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden"))
      clostTheModal();
  });
}
