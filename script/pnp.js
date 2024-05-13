const slides = document.querySelectorAll('.slide');
const setSlideBackground = () => {
  slides.forEach((slide, index) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const imageAspectRatio = slide.style.backgroundImage.slice(4, -1).split(' ')[0].split('x')[0] / slide.style.backgroundImage.slice(4, -1).split(' ')[0].split('x')[1];

    if (screenWidth / screenHeight > imageAspectRatio) {
      slide.style.backgroundSize = `${screenHeight * imageAspectRatio}px auto`;
      slide.style.transform = `translateX(-50%) translateY(${(screenHeight - screenWidth / imageAspectRatio) / 2}px)`;
    } else {
      slide.style.backgroundSize = `auto ${screenWidth / imageAspectRatio}px`;
      slide.style.transform = `translateX(-50%) translateY(${(screenWidth / imageAspectRatio - screenHeight) / 2}px)`;
    }
  });
};

window.addEventListener('resize', setSlideBackground);
setSlideBackground();