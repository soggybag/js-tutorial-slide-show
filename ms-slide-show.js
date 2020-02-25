
(function() {
<<<<<<< HEAD
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
=======
    function makeSlideshow(slides) {
        // const slides = document.getElementById(slidesId)
        const slidesInner = slides.querySelector('.slides-inner')
        const images = slidesInner.querySelectorAll('img')

        // ---------------------------------
        // Setup buttons 
>>>>>>> 3c43ef8d1ba22bdbb25253b92212d71a3f8dbf2d

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

<<<<<<< HEAD
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
=======
        const delay = parseInt(slides.dataset.delay)
        const transition = parseInt(slides.dataset.transition)
        slidesInner.style.transition = `${transition}ms`

        const slidesWidth = slides.clientWidth
        
        let index = 0

        let interval = setInterval(nextSlide, delay)
        // clearInterval(interval)

        // ------------------------

        function nextSlide() {
            index += 1
            if (index === images.length) {
                index = 0
            }
            showSlide()
        }

        function prevSlide() {
            index -= 1
            if (index < 0) {
                index = images.length - 1
            }
            showSlide()
        }

        function showSlide() {
            // CSS - transform : translate3d(0, 0, 0);
            slidesInner.style.transform = `translate3d(${index * -slidesWidth}px, 0, 0)`
            // console.log(index * -slidesWidth)
            indicators.forEach(function(el, i) {
                if (i === index) {
                    el.style.backgroundColor = 'rgba(255,255,255,1.0)'
                } else {
                    el.style.backgroundColor = 'rgba(255,255,255,0.5)'
                }
            })
        }

    } // end makeSlideshow

    const slideshows = document.querySelectorAll('.ms-slide-show')
    for (let i = 0; i < slideshows.length; i += 1) {
        makeSlideshow(slideshows[i])
>>>>>>> 3c43ef8d1ba22bdbb25253b92212d71a3f8dbf2d
    }
})() // IIFE



<<<<<<< HEAD
  init()
})();


// const t = 55

// function test() {
//   const u = []

//   for (let i = 0; i < 5; i += 1) {
//     const y = i * t
//     u.push(y)
//   }
// }

// function makeDie(n) {
//   const x = n
//   let f = 13
//   return function() {
//     return Math.floor(Math.random() * x) + 1
//   }
// }


// console.log('**************************************');
// const d6 = makeDie(6);
// const d10 = makeDie(10);
// const coin = makeDie(2)
// console.log(d6())  // 1-6
// console.log(d10())  // 1-10
// console.log(coin()) // 1-2
// console.log('**************************************')
// console.log(d6)
// console.log(d10)
// console.log(coin)
// console.log((makeDie(999999)()))
// console.log(typeof d6)
// d6.name = "I am a 6 side die"
// console.log(d6.name)
// console.log('**************************************')

=======
>>>>>>> 3c43ef8d1ba22bdbb25253b92212d71a3f8dbf2d
