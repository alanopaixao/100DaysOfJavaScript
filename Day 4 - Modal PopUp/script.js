//Variables

const modal = document.querySelector(".modal"),
  btn = document.querySelector(".btn");

modal.addEventListener("click", closeModal);
btn.addEventListener("click", openModal);

// Open Modal
function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}
// Close Modal
function closeModal() {
  modal.style.display = "none";
}
