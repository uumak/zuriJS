const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.slides').children;
const allImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == allImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = allImages - 1;
    } else {
      index--;
    }
  }
  
  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}