
// Sticky header
$(function() {
    
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    
    function updateHeaderClass() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    $(window).scroll(function () {
        updateHeaderClass();
    });

});

// Header Links
$(function() {
    const $header = $('#myHeader');
    const $sections = $('section.main-section');
    const $menuButtons = $('#menu .nav-menu');

    $menuButtons.on('click', function(event) {
        const $button = $(this);
        const anchor = $button.attr('href');
        
        const $scrollToElement = $(anchor);

        if (!$scrollToElement.length) {
            return;
        }
        
        event.preventDefault();

        if ($button.hasClass('active')) {
            return;
        }

        $('html, body').animate({scrollTop: $scrollToElement.offset().top}, 500);
    });

    $(window).scroll(function () {
        const scrollDistance = $(window).scrollTop();
        const headerHeight = $header.height();

        $sections.each(function (i) {
            const $section = $(this);
            const elementTop = $section.offset().top;
            const elementBottom = elementTop + $section.height();
            
            if (scrollDistance > (elementTop - headerHeight) && scrollDistance < (elementBottom - headerHeight)) {
                $menuButtons.removeClass('active');
                const sectionId = $section.prop('id');
                $menuButtons.siblings('[href="#'+sectionId+'"]').addClass('active');
                return false; // break the loop
            }
        });
    });
});










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
