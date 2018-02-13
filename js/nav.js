$(document).ready(function(){

    var altura_del_topbar = $('.topbar').outerHeight(true);
    var altura_del_logo = $('.navbar-logo--center .navbar-item-logo').outerHeight(true);
    var altura_del_nav = $('.navbar-content').outerHeight(true);

    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura_del_logo + altura_del_topbar ){
            $('.navbar').addClass('navbar-fixed bg-white');
        } else {
            $('.navbar').removeClass('navbar-fixed bg-white');
        }
    });


    $('.content').css('padding-top', (altura_del_topbar + altura_del_logo + altura_del_nav) + 'px');






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


    var _body = $('body');
    var toogleMenu = function(){

        $('.header, .content, .footer').toggleClass('page-is-moving');
        if ($('.header, .content, .footer').hasClass('page-is-moving')) {
            $('.menu-movil').addClass('display-block');
            $('.backdrop-top').css('display', 'block');
            $('.backdrop-top').addClass('opacity-transition1');

        } else{
            $('.menu-movil').removeClass('display-block');
            $('.backdrop-top').css('display', 'none');
            $('.backdrop-top').removeClass('opacity-transition0');

        }

    };

    var _searchBar = $('.search-bar');
    var _navBar = $('.navbar');



    var toogleSearch = function(){

        _navBar.toggleClass('search-is-open');

        if (_navBar.hasClass('search-is-open')) {
            _navBar.find('input').focus();
            $('.backdrop').css('display', 'block');
            $('.backdrop').addClass('opacity-transition1');
            $('.search-bar').css('opacity', '1');
          //  $('.btn-open-search').css('opacity', '0');
          //  $('.btn-close-search').css('opacity', '1');
        } else{
            $('.backdrop').css('display', 'none');
            $('.backdrop').removeClass('opacity-transition0');
            $('.search-bar').css('opacity', '0');
          //  $('.btn-open-search').css('opacity', '1');
          //  $('.btn-close-search').css('opacity', '0');
        }


    };



    $('.btn-search').on('click', function(){
        toogleSearch();
    });

    $('.btn-ham').on('click', function(){
        toogleMenu();
    });


    $('.backdrop').click(function(){
        $(this).css('opacity', '0');
        $('.navbar').removeClass('search-is-open');
        $('.btn-open-search').css('opacity', '1');
        $('.btn-close-search').css('opacity', '0');

    });
    $('.backdrop-top').click(function(){
        $(this).css('display', 'none');
        ($('.header, .content, .footer').removeClass('page-is-moving'));
        $('.menu-movil').removeClass('display-block');

    });
})
