const container = document.querySelector('.container');
// Yang: could use this for later when seats are booked. change class to .occupied
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
  }
});