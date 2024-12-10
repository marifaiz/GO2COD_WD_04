const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const close = document.querySelector('.close');

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.src; 
    lightbox.classList.remove('hidden'); 
  });
});

close.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});
