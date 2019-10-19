window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

var gallery = $('.works-gallery');

gallery.isotope({
    itemSelector: '.gallery-item',
    layoutMode: 'fitRows'
  });
 
var buttons = $( ".works-butt button" );

buttons.on( "click", function() {
    var button = $(this);
    buttons.removeClass('active');
    button.addClass('active');
    
    var filter = button.data('filter');
    gallery.isotope({ filter: filter });
  });
