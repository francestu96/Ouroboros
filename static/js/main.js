
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {
        console.log("hash = " + this.hash)
        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 25
            }, 700);
        } 
    });
});

$('#owl-portfolio').owlCarousel({
    margin:30,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
});

$('#owl-testmonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: false
})