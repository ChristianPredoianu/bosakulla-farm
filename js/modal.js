const modal = document.getElementById('modal'),
  closeModalBtn = document.getElementById('close-modal');

export function openModal(e) {
  e.stopPropagation();
  modal.classList.add('modal-open');
}

export function closeModal(e) {
  e.stopPropagation();
  modal.classList.remove('modal-open');
}

closeModalBtn.addEventListener('click', closeModal);
