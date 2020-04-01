$(document).ready(function() {

    $("#gallery-container").lightGallery({
        selector: '.gallery-box',
        controls: false,
        download: false,
        counter: false,
    }); 

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:false,
        navText: '',
        responsive:{
            0:{
                items:1,
                nav:true
            },
            900:{
                items:3,
                nav:false
            },
            1200:{
                items:2,
                nav:true,
                loop:false
            }
        }
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            $("nav").addClass("scrolling");
        } else {
            $("nav").removeClass("scrolling");
        }
    });

});