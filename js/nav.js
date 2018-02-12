

$(window).on('scroll', function() {
    if ($(window).scrollTop() > 2) {
        $('.navbar, .search-bar').addClass('bg-white');

    } else  {
        $('.navbar, .search-bar').removeClass('bg-white');
    }


});





$(window).on('scroll', function() {
    if ($(window).scrollTop() > 600) {
        $('.navbar').addClass('is-hide');
    } else  {

    }
});


var lastScrollPosition = 0;
window.onscroll = function() {
    var newScrollPosition = window.scrollY;

    if (newScrollPosition < lastScrollPosition){
        $('.navbar').removeClass('is-hide');
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

    var _searchBar = $('.search-bar');
    var _navBar = $('.navbar');
    var _body = $('body');


    var toogleSearch = function(){

        _navBar.toggleClass('search-is-open');

        if (_navBar.hasClass('search-is-open')) {
            _navBar.find('input').focus();
            $('.backdrop').addClass('display-block');
            $('.btn-open-search').css('opacity', '0');
            $('.btn-close-search').css('opacity', '1');
        } else{
            $('.backdrop').removeClass('display-block');
            $('.btn-open-search').css('opacity', '1');
            $('.btn-close-search').css('opacity', '0');
        }


    };



    $('.btn-search').on('click', function(){


        toogleSearch();

    });
    $('.backdrop').click(function(){
        $(this).removeClass('display-block');
        $('.navbar').removeClass('search-is-open');
        $('.btn-open-search').css('opacity', '1');
        $('.btn-close-search').css('opacity', '0');
    });

})
