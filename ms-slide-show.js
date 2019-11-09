

(function() {
  function init() {
    const slides = document.querySelectorAll('.ms-slide-show')
    for (let i = 0; i < slides.length; i += 1) {
      makeSlides(slides[i])
    }
  }

  function makeSlides(slides) {
    const images = Array.from(slides.querySelectorAll('.slide-show-inner > img'))
    const slidesInner = slides.querySelector('.slide-show-inner')

    let index = 0
    const w = slides.clientWidth
    console.log(w)

    setInterval(() => {
      index += 1
      if (index === images.length) {
        index = 0
      }
      // Use translate3d() for better performance!
      slidesInner.style.transform = `translate3d(-${index * w}px, 0, 0)`
    }, 3000)
  }

  init()
})()
  