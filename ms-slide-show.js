
(function() {
  // ------------------------------------------
  // Initalize all slide shows found
  function init() {
    const slides = document.querySelectorAll('.ms-slide-show')
    for (let i = 0; i < slides.length; i += 1) {
      makeSlides(slides[i])
    }
  }

  // -------------------------------------------
  // Make a slides show
  function makeSlides(slides) {

    const images = Array.from(slides.querySelectorAll('.slide-show-inner > img'))
    const slidesInner = slides.querySelector('.slide-show-inner')

        const nextButton = slides.querySelector('.ms-next-button')
        const prevButton = slides.querySelector('.ms-prev-button')

        if (nextButton !== null) {
            nextButton.addEventListener('click', function(e) {
                e.preventDefault()
                // clear the interval
                // add a new interval
                nextSlide()
            })
        }

        if (prevButton !== null) {
            prevButton.addEventListener('click', function(e) {
                e.preventDefault()

                prevSlide()
            })
        }

        // ---------------------
        // Setup indicators 

        const indicatorContainer = slides.querySelector('.ms-slide-indicators')
        const indicators = []
        if (indicatorContainer !== null) {
            for (let i = 0; i < images.length; i += 1) {
                const li = document.createElement('li') // <li>
                indicatorContainer.appendChild(li)
                indicators.push(li)
            }
            indicators[0].style.backgroundColor = 'rgba(255,255,255,1.0)'
        }

        // ---------------------
        // Setup timer 

    let index = 0
    const w = slides.clientWidth
    console.log(w)

    setInterval(() => {
      nextSlide()
    }, 3000)

    const nextButton = slides.querySelector('.next-button')
    const prevButton = slides.querySelector('.prev-button')
    if (nextButton !== null) {
      nextButton.addEventListener('click', function(e) {
        nextSlide()
      })
    }

    if (prevButton !== null) {
      prevButton.addEventListener('click', function(e) {
        prevSlide()
      })
    }

    function prevSlide() {
      index -= 1
      if (index < 0) {
        index = images.length - 1
      }
      showSlide()
      showIndicator()
    }

    function nextSlide() {
      index += 1
      if (index === images.length) {
        index = 0
      }
      
      showSlide()
      showIndicator()
    }

    function showSlide() {
      // Use translate3d() for better performance!
      slidesInner.style.transform = `translate3d(-${index * w}px, 0, 0)`
    }

    function showIndicator() {
      if (indicators !== null) {
        for (let i = 0; i < indicators.length; i += 1) {
          if (i === index) {
            indicators[i].style.backgroundColor = 'rgba(255,255,255,1.0)'
          } else {
            indicators[i].style.backgroundColor = 'rgba(255,255,255,0.5)'
          }
        }
      }
    }

  }
  // --------------------------------------------
  function prevSlide() {

  }
  // ---------------------------------------------------

  function makeIndicators(slides, n) {
    const el = document.createElement('div')
    el.style.display = 'flex'
    el.style.flexDirection = 'row'
    el.style.justifyContent = 'center'
    el.style.position = 'absolute'
    el.style.left = '50%'
    el.style.bottom = '0'
    el.style.transform = 'translate(-50%, 0)'
    el.style.zIndex = '999'

    const indicators = []

    for (let i = 0; i < n; i += 1) {
      const dot = document.createElement('div')
      dot.style.width = '10px'
      dot.style.height = '10px'
      dot.style.margin = '5px'
      dot.style.borderRadius = '50%'
      dot.style.backgroundColor = 'rgba(255,255,255, 0.5)'

      el.appendChild(dot)
      indicators.push(dot)
    }
})() // IIFE

  init()
})();
