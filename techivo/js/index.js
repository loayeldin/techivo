
 var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 1,
  arrows: boolean = false,
  focus: 'left',
  autoScroll: {
      speed: 1,
    },
});


splide.mount();


// function myFunction(x) {
//     if (x.matches ) { // If media query matches
//         document.addEventListener('DOMContentLoaded', function() {
           
//         });
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 991px)")

//   myFunction(x) // Call listener function at run time

  function loading()
  {
    document.getElementById('left-paper').style.left="100%"
    document.getElementById('right-paper').style.right="100%"
  
    setTimeout( ()=>
    {
      document.getElementById('left-paper').style.display="none"
      document.getElementById('right-paper').style.display= "none"
    },
    600)
    
  }