const modal = document.getElementById('modal');

export function openModal() {
  modal.classList.add('modal-open');
}

export function closeModal() {
  modal.classList.remove('modal-open');
}
