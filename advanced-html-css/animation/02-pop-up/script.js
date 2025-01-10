const openButton = document.getElementById("trigger-modal");
const closeButton = document.getElementById("close-modal");
const modalDiv = document.querySelector(".popup-modal");
const backdrop = document.querySelector(".backdrop");

function toggleModal() {
  modalDiv.classList.toggle("show");
  backdrop.classList.toggle("show");
}

openButton.addEventListener("click", () => {
  toggleModal();
  modalDiv.classList.remove("slide-out");
  void modalDiv.offsetWidth;
  modalDiv.classList.add("slide-in");
});
closeButton.addEventListener("click", () => {
  toggleModal();
  modalDiv.classList.remove("slide-in");
  void modalDiv.offsetWidth;
  modalDiv.classList.add("slide-out");
});
