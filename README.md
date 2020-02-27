# JavaScript Tutorial: Slideshow

This is a simple JavaScript Slide show simialr to the Bootstrap Carousel. 

[View a demo](https://soggybag.github.io/js-tutorial-slide-show/). 

You can use the code in your projects by following the [documentation](#documentation). 

Or, build the slideshow yourself by following the [tutorial](#tutorial).

## Documentation 

To use this library and setup a slideshow/carousel follow the steps below. 

**Download the js and CSS files**

Download: `ms-slides.js` and `ms-slides.css`

Link the CSS file in the head of your document. 

```HTML
<link rel="stylesheet" href="ms-slides.css">
```

Link to the js file at the bottom of the body tag.

```html
<script src="ms-slides.js"></script>
```

**Create the Slides Container**

Create a slide show container. It must have the class name: 'ms-slides'

Include the attribute `data-delay` to set the time between slides in milliseconds. Set data-delay to 0 to create slides that don't change automatically. 

Include the `data-transition` to set the time to change from one slide to the next. 

```HTML
<div class="ms-slides" data-delay="8000" data-transition="400">
    
</div>
```

Add an inner element with the class name `class="ms-slides__inner"`. This element will hold the images or other elements used slides.

```HTML
<div class="ms-slides" data-delay="8000" data-transition="400">
  <div class="ms-slides__inner">
      
  </div>
</div>
```

Inside `ms-slides__inner` element add your images. 

```HTML
<div class="ms-slides" data-delay="4000" data-transition="2000">
  <div class="ms-slides__inner">
    <img src="images/p1-300-169.jpg" width="300" height="169" alt="hellbore">
    <img src="images/p2-300-169.jpg" width="300" height="169" alt="li pollen">
    <img src="images/p3-300-169.jpg" width="300" height="169" alt="pollen">
    <img src="images/p4-300-169.jpg" width="300" height="169" alt="spores">
  </div>
</div>
```

Pro tip: the children of `ms-slides__inner` be slides, and these can be any type. 

**Add buttons and indicators**

Add buttons to your slides by adding anchors with the class `ms-slides__next-button` and `ms-slides__prev-button`. These should be children of `ms-slides`

```HTML
<div class="ms-slides" data-delay="4000" data-transition="2000">
  <div class="ms-slides__inner">
    ...
  </div>

  <a href="#" class="ms-slides__next-button"></a>
  <a href="#" class="ms-slides__prev-button"></a>
</div>
```

Add indicators by including an `<ol>` with the class name `ms-slides__indicators`

```HTML
<div class="ms-slides" data-delay="4000" data-transition="2000">
  <div class="ms-slides__inner">
    ...
  </div>

  <ol class="ms-slides__indicators"></ol>

  <a href="#" class="ms-slides__next-button"></a>
  <a href="#" class="ms-slides__prev-button"></a>
</div>
```

See the demo code index.html in this repo for a working example. 

## Tutorial

You can build this Slide show from scratch for yourself. There is a ton ofJavaScript concepts to learn and it's great practice! 

## What will you learn in this tutorial? 

- Variables 
  - Constants, and variable variables
- Scope
  - Closure
- Functions
  - Callbacks
  - Generic functions that can be applied anywhere 
- JS and the DOM
  - Selecting elements
- JS and CSS together
- CSS
  - position absolute
  - transform translate3d

## Getting started

Download the images or use your own images. The images folder contains images used in the tutorial. You can clone or download this repo by clicking the big green button in the upper right. 

In the repo you'll find the images folder with images used in the tutorial. 

Follow the video tutorials here: 

https://www.youtube.com/watch?v=TV1WbQdusdU&list=PLoN_ejT35AEgjsI-YEuiif2BfpToamnGz&index=1

You can view the completed tutorial here: https://soggybag.github.io/js-tutorial-slide-show/

### Stretch Challenges 

If you made it through the tutorial here are some things you can try to extend the tutorial: 

- **Swap the images for your own** - Use your own images in the slideshow. Making a new slideshow with different images from your code will give you a feel for how other developers would use your code. 
- **Change the slide show direction** - Currently the slides move right to left. It would be fun if the slides moved vertically. Try to make them move down. 
  - Take this one step further by adding a data attribute like `data-direction`. Use this to configure the direction the slideshow animates. 
- **Make slides that can be any element** - Currently the slide show looks for `img` elements as children of `.slides-inner`. Slides could be built with any element allow for images and text in slides. 
  - To get the slide imgs the tutorial uses: `slides.querySelectorAll('.slide-show-inner > img')` but this could be changed to: `slides.querySelectorAll('.slide-show-inner > *')`. This would have the effect of selecting any element that was a child of `.slide-show-inner`.
- **Next and Previous buttons** - Add a next and previous button to the slides. Clicking the next button would advance to the next slide, clicking previous would return the lest slide. 
  - Rather than using images for buttons try and create buttons with raw CSS. You can make an array using a div with a border on two sides and rotating it 45 degrees. 
  - Take this a step further by using a data attribute, for example: `data-controls`, to activate the display the buttons. 
- **Add indicators** - Indicators can look like anything but they typically look like small circles or rectangles near the bottom center of the slideshow. There should be one indicator per slide image. As the slides change the indicator for the currently slide should indiate that slide. For example if there were 3 slides and the second slide was currently visible the second indicator might be white, while the first and third indicator would be white and 50% transparent. 
- **Cross Fade** - The slides look good moving right to left but, it might good to have the option to fade from one slide to the next. Make the current slide fade out to reveal the previous slide. 
  - To do this the slides need to be stacked up. Use absolute position to position them all in the same place each in front of the previous. 
  - Take this a step further by adding a data attribute like `data-style` to set the style of the transition. For example:
    - `data-style="horizontal"` - a right to left transition
    - `data-style="vertical"` - a vertical transition bottom to top
    - `data-style="fade"` - a cross fade transition

## TODOs

- ~~TODO: Add link to videos~~
- ~~TODO: Post original source code from video tutorial~~
- ~~TODO: Add a second slides show~~ 
- ~~TODO: Add buttons to advances slides~~
- ~~TODO: Add marker dots to show current slide~~
- TODO: Add new transitions
  - Vertical slides
  - Cross fade
  - Always right to left
  - Slices 
  - Squares
  - Canvas based transitions 
