function initCarousel() {
  let rightBut = document.querySelector('.carousel__arrow_right');
  let leftBut = document.querySelector('.carousel__arrow_left');
  let carousel = document.querySelector('.carousel__inner');
  let carouselElemWidth = document.querySelector('.carousel__slide').offsetWidth;
  let i = 0;
  slide(0);
  function slide(direction) {
    i = i + direction;
    carousel.style.transform = `translateX(${-i * carouselElemWidth}px)`
    
    rightBut.style.display = (i === 3) ? 'none' : '';
    leftBut.style.display = (i === 0) ? 'none' : '';
  }

  rightBut.addEventListener('click', function(){
    slide(1);
  });
  
  leftBut.addEventListener('click', function() {
    slide(-1);
  });
}