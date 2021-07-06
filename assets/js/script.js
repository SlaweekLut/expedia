const slide = document.querySelectorAll('.feature-item')
const slideContainer = document.querySelector('.feature__container')
const slideWrapper = document.querySelector('.feature__content')

window.addEventListener('resize', slider)
window.onload = slider()

function slider() {
    if(screen.width < 769.8 && slideContainer.dataset.mobile == 'false') {
        slideContainer.classList.add('swiper-container')
        slideWrapper.classList.add('swiper-wrapper')
        for(let i = 0; i < slide.length; i++) {
            slide[i].classList.add('swiper-slide')
        } 
        swiper = new Swiper(".swiper-container", {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
        });
        slideContainer.dataset.mobile = 'true'
    }
    if (screen.width > 770) {
        slideContainer.dataset.mobile = 'false'
        if(slideContainer.classList.contains('swiper-container-initialized')) {
            for(let i = 0; i < slide.length; i++) {
                slide[i].classList.remove('swiper-slide')
            }
            slidePagination.innerHTML = ''
            swiper.destroy()
        }
    }
}

const slideContainerBenefits = document.querySelector('.benefits-container');

window.addEventListener('resize', slider)
window.onload = sliderBenefit()

function sliderBenefit() {
    if(screen.width < 769.8 && slideContainerBenefits.dataset.mobile == 'false') {
        swiperBenefit = new Swiper(".benefits-container", {
            slideClass: "benefits-item",
            wrapperClass: "benefits__content",
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
        });
        console.log("create");
        slideContainerBenefits.dataset.mobile = 'true'
    }
    if (screen.width > 770) {
        slideContainerBenefits.dataset.mobile = 'false'
        if(slideContainerBenefits.classList.contains('swiper-container-initialized')) {
            swiper.destroy()
        }
    }
}