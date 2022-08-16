const modelButton = document.querySelector('.modal-btn');
const modal = document.querySelector(".modal-overlay");
const cancel = document.querySelector(".close-btn");


modelButton.addEventListener("click", function () {
    modal.classList.add("open-modal");
  });
  cancel.addEventListener("click", function () {
    modal.classList.remove("open-modal");
  });
