const eventBtns = document.querySelectorAll('.event-btn');
const closeBtns = document.querySelectorAll('.close-btn');

eventBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.nextElementSibling;
    details.style.display = 'block';
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.parentNode;
    details.style.display = 'none';
  });
});
