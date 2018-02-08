
//var altura = $('.navbar').offset().top;
/*
$(window).on('scroll', function(){
    if ( $(window).scrollTop() > 0 ){
        $('.navbar-logo--left').addClass('navbar-fixed');
    } else {
        $('.navbar-logo--left').removeClass('navbar-fixed');
    }
});*/


$(window).on('scroll', function() {
    if ($(window).scrollTop() > 10) {
        $('.navbar-logo--left, .search-bar').addClass('bg-white-nav');

    } else  {
        $('.navbar-logo--left, .search-bar').removeClass('bg-white-nav');
    }


});

$(window).on('scroll', function() {
    if ($(window).scrollTop() > 600) {
        $('.navbar-logo--left').addClass('is-hide');
    } else  {

    }


});
var lastScrollPosition = 0;
window.onscroll = function() {
    var newScrollPosition = window.scrollY;

    if (newScrollPosition < lastScrollPosition){
        $('.navbar-logo--left').removeClass('is-hide');
    }else{

    }
    lastScrollPosition = newScrollPosition;
}

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
    $('.btn-search').click(function(){
        $('.btn-close-search').removeClass( "opacity0" );
    $( ".search-bar" ).slideToggle(
        function() {
            $('.btn-open-search').addClass( "opacity1" );

        }, function() {
            $('.btn-close-search').removeClass( "opacity0" );
        }
    );
    });
})