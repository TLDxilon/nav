

$(window).on('scroll', function() {
    if ($(window).scrollTop() > 100) {
        $('.navbar-logo--left, .navbar-logo--right').addClass('bg-white-nav');
    } else  {
        $('.navbar-logo--left, .navbar-logo--right').removeClass('bg-white-nav');
    }


});
//subo el menú cuando llego a 600 de scroll
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 600) {
        $('.navbar-logo--left, .navbar-logo--right').addClass('is-hide');
    } else  {

    }
});

//bajo el menú cuando subo el scroll
var lastScrollPosition = 0;
$(window).on('scroll', function() {
    var newScrollPosition = window.scrollY;

    if (newScrollPosition < lastScrollPosition){
        $('.navbar-logo--left, .navbar-logo--right').removeClass('is-hide');
    }else{

    }
    lastScrollPosition = newScrollPosition;
});





$(document).ready(function(){
    $('.page-is-static .btn-ham').click(function(){
        $('.header, .content, .footer').addClass('page-is-moving');
        $('.header, .content, .footer').removeClass('page-is-static');
        $('.menu-movil').addClass('display-block');
        $('body').addClass('overflow-hidden');

    });
    $('.page-is-moving .btn-close').click(function(){
        $('.header, .content, .footer').removeClass('page-is-moving');
        $('.header, .content, .footer').addClass('page-is-static');
        $('.menu-movil').removeClass('display-block');
        $('body').removeClass('overflow-hidden');
    });
})
