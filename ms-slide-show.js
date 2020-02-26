
(function() {
    function makeSlideshow(slides) {
        // const slides = document.getElementById(slidesId)
        const slidesInner = slides.querySelector('.slides-inner')
        const images = slidesInner.querySelectorAll('img')

        // ---------------------------------
        // Setup buttons 

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
    }
})() // IIFE



