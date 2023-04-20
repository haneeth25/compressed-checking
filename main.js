// Set the current slide index to 0
var currentSlideIndex = 0;

// Select all the images in the slider
var sliderImages = document.querySelectorAll('.slider img');

// Set an interval to change the slide every 3 seconds
setInterval(function() {
  // Increment the current slide index
  currentSlideIndex++;

  // If the index exceeds the number of slides, reset it to 0
  if (currentSlideIndex >= sliderImages.length) {
    currentSlideIndex = 0;
  }

  // Hide all the images except the current slide
  sliderImages.forEach(function(image, index) {
    if (index === currentSlideIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}, 3000);

var display = true
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  display = false
}


// Testimonal event listeners 
if (display){
window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.fade-right');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 120;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('leftToRight')
  }
  else{
    main.classList.remove('leftToRight')
  }
})
}

if (display){
window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.fade-right-1');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 120;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('leftToRight-1')
  }
  else{
    main.classList.remove('leftToRight-1')
  }
})
}


if (display){
window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.fade-right-2');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 120;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('leftToRight-2')
  }
  else{
    main.classList.remove('leftToRight-2')
  }
})
}

if (display){
window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.fade-right-3');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 120;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('leftToRight-3')
  }
  else{
    main.classList.remove('leftToRight-3')
  }
})
}

// end of testimonal event listeners


// Procducts Starting
if (display){
window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.zoom-in');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 120;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('popdown')
  }
  else{
    main.classList.remove('popdown')
  }
})
}

if (display){
window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.zoom-in-1');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 120;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('popdown')
  }
  else{
    main.classList.remove('popdown')
  }
})
}

if (display){
window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.zoom-in-2');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 120;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('popdown')
  }
  else{
    main.classList.remove('popdown')
  }
})
}

if (display){
window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.zoom-in-3');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 120;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('popdown')
  }
  else{
    main.classList.remove('popdown')
  }
})
}

if (display){
window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.zoom-in-4');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 120;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('popdown')
  }
  else{
    main.classList.remove('popdown')
  }
})
}

if (display){
window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.zoom-in-5');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 120;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('popdown')
  }
  else{
    main.classList.remove('popdown')
  }
})
}

// End of product animations 

window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.slide-up');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 90;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('slideup')
  }
  else{
    main.classList.remove('slideup')
  }
})


window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.slide-up-1');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 90;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('slideup')
  }
  else{
    main.classList.remove('slideup')
  }
})



window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.slide-up-2');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 90;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('slideup')
  }
  else{
    main.classList.remove('slideup')
  }
})



window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.slide-up-3');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint =90;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('slideup')
  }
  else{
    main.classList.remove('slideup')
  }
})


window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.slide-up-4');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 90;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('slideup')
  }
  else{
    main.classList.remove('slideup')
  }
})


window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.slide-up-5');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 90;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('slideup')
  }
  else{
    main.classList.remove('slideup')
  }
})



window.addEventListener('scroll',leftToRight = () =>{
  var main = document.querySelector('.slide-up-6');
  var windowHeight = window.innerHeight;
  var revealTop = main.getBoundingClientRect().top;
  var revealPoint = 90;

  if (revealTop < windowHeight - revealPoint){
    main.classList.add('slideup')
  }
  else{
    main.classList.remove('slideup')
  }
})






// Procducts Starting
if (!display){
  window.addEventListener('load',leftToRight = () =>{
    var main = document.querySelector('.zoom-in');
    main.classList.add('popdown');
  })
  }
  
  if (!display){
  window.addEventListener('load',leftToRight = () =>{
    var main = document.querySelector('.zoom-in-1');
    main.classList.add('popdown');
  })
  }
  
  if (!display){
  window.addEventListener('load',leftToRight = () =>{
    var main = document.querySelector('.zoom-in-2');
    main.classList.add('popdown');
  })
  }
  
  if (!display){
  window.addEventListener('load',leftToRight = () =>{
    var main = document.querySelector('.zoom-in-3');
    main.classList.add('popdown');
  })
  }
  
  if (!display){
  window.addEventListener('load',leftToRight = () =>{
    var main = document.querySelector('.zoom-in-4');
    main.classList.add('popdown');
  })
  }
  
  if (!display){
  window.addEventListener('load',leftToRight = () =>{
    var main = document.querySelector('.zoom-in-5');
    main.classList.add('popdown');
  })
  }