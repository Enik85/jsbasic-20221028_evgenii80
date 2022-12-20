// import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this._carouselLeft = 0;
    this.slides = slides;
    
    this.render();

    this.rightButton = this.elem.querySelector('.carousel__arrow_right');
    this.leftButton = this.elem.querySelector('.carousel__arrow_left');



    this.currentSlideNumber = 0; // СЧИТАЕМ НОМЕР СЛАЙДА

    this.slide();

    this.rightButton.addEventListener('click', () => {
      this.currentSlideNumber++;
      this.slide()
    });
    this.leftButton.addEventListener('click', () => {
      this.currentSlideNumber--;
      this.slide()
    });

    this.leftButton.style.display = 'none';

    let buttons = this.elem.querySelectorAll('.carousel__button');
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => this.onClick(event));
    });

    this.elem.addEventListener('product-add', (event) => {
      console.log('product-add', event.detail);
    })
  }

  render() {
    const slidesDivs = this.slides.map((slide) => 
      `<div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`
    ).join('');

    this.elem = document.createElement('DIV');
    
    this.elem.classList.add("carousel");
    
    this.elem.innerHTML = 
      `<div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    
      <div class="carousel__inner">
        ${slidesDivs}
      </div>`;

    this.carouselInner = this.elem.querySelector('.carousel__inner');
    this.slideElem = this.elem.querySelector('.carousel__slide');
  }

  slide() {
    let offset = -this.elem.offsetWidth * this.currentSlideNumber;
    this.carouselInner.style.transform = `translateX(${offset}px)`;
    
    this.leftButton.style.display = this.currentSlideNumber === 0 ? 'none' : 'flex';
    this.rightButton.style.display = (this.currentSlideNumber + 1) === this.slides.length ? 'none' : 'flex';
  }

  onClick(event) {
    let id = event.target.closest('.carousel__slide').dataset.id;
    this.elem.dispatchEvent(
      new CustomEvent("product-add", {
          detail: id,
          bubbles: true,
      })
    );
  }
}