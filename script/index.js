const primaryButton = document.getElementById('primary-button');

primaryButton.addEventListener('click', () => {
     location.href = 'catalog.html';
} )

const viewport = document.getElementById('slider-viewport');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
let position = 0;
const control_1 = document.getElementById('control-1');
const control_2 = document.getElementById('control-2');
const control_3 = document.getElementById('control-3');

function scrollCarousel(direction) {
  const slideWidth = viewport.clientWidth; 
  
  if (direction === 'next') {
     position += 1;
     if (position > 2) position = 0;
     viewport.scrollLeft = slideWidth * position;
  }
  if (direction === 'prev') {
     position -= 1;
     if (position < 0) position = 2;
     viewport.scrollLeft = slideWidth * position;
  }

  switch (position) {
     case 0: {
          control_1.classList.add('control-active');
          control_2.classList.remove('control-active');             
          control_3.classList.remove('control-active');    
          break;         
     }
     case 1: {
          control_2.classList.add('control-active');
          control_1.classList.remove('control-active');             
          control_3.classList.remove('control-active'); 
          break;
     }
     case 2: {
          control_3.classList.add('control-active');
          control_1.classList.remove('control-active');             
          control_2.classList.remove('control-active');      
          break;
     }
  }

}

btnNext.addEventListener('click', () => scrollCarousel('next'));
btnPrev.addEventListener('click', () => scrollCarousel('prev'));
