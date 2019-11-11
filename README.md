# JavaScript Tutorial: Slideshow

This repository contains all of the sample files to get started and the completed project and source code for reference.

The goal of this tutorial is to create a JavaScript slideshow. The slideshow will be similar to what you see on web banners with images that cycle sliding right to left. You'll build the whole things from scratch. 

The code used will also be portable, it will be able to be used in any web site without modification.   
This tutorial focusses on vanilla JS and does not use any libraries. You'll write all of the code yourself! 

## What will you learn in this tutorial? 

- Variables 
  - Constants, and variable variables
- Scope
  - Clossure
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

You can view the completed tutorial here: https://soggybag.github.io/js-tutorial-slide-show/.

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

- TODO: Add link to videos 
- TODO: Post original source code from video tutorial
- ~~TODO: Add a second slides show~~ 
- TODO: Add buttons to advances slides
- ~~TODO: Add marker dots to show current slide~~
- TODO: Add new transitions
  - Vertical slides
  - Cross fade
  - Always right to left
  - Slices 
  - Squares
  - Canvas based transitions 
