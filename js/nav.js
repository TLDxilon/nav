$(document).ready(function(){

    var height_topbar = $('.topbar').outerHeight(true);
    var height_logo = $('.navbar-logo--top .navbar-item-logo').outerHeight(true);
    var height_nav = $('.navbar-content').outerHeight(true);
    var lastScrollPosition = 0;

    var $searchBar = $('.search-bar');
    var $navBar = $('.navbar');
    var $backdrop = $('.backdrop');
    var $menumobile = $('.menu-mobile');
    var $design = $('.design');


    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > height_logo + height_topbar ){
            $navBar.addClass('navbar-fixed bg-white');
        } else {
            $navBar.removeClass('navbar-fixed bg-white');
        }
    });


    $('.content, .hero-content').css('padding-top', (height_topbar + height_logo + height_nav) + 'px');






    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 600) {
            $navBar.addClass('is-hide');
        } else  {

        }
    });


    window.onscroll = function() {
        var newScrollPosition = window.scrollY;

        if (newScrollPosition < lastScrollPosition){
            $navBar.removeClass('is-hide');
        }else{

        }
        lastScrollPosition = newScrollPosition;
    }



    var toogleMenu = function(){

        $design.toggleClass('page-is-moving');
        if ($design.hasClass('page-is-moving')) {
            $design.removeClass('page-is-static');
            $menumobile.addClass('display-block');
            $navBar.removeClass('search-is-open');

        } else{
            $$design.removeClass('page-is-moving');
            $design.addClass('page-is-static');
            $menumobile.css('display','none');



        }

    };

    var toogleSearch = function(){

        $navBar.toggleClass('search-is-open');

        if ($navBar.hasClass('search-is-open')) {
            $navBar.find('input').focus();
            $backdrop.css('display', 'block');
            $backdrop.addClass('opacity-transition1');
            $searchBar.css('opacity', '1');

        } else{
            $backdrop.css('display', 'none');
            $backdrop.removeClass('opacity-transition0');
            $searchBar.css('opacity', '0');

        }


    };



    $('.js-search-toogle').on('click', function(){
        toogleSearch();
    });

    $('.js-menu-toogle').on('click', function(){
        toogleMenu();
    });


    $backdrop.click(function(){
        $(this).css('opacity', '0');
        $navBar.removeClass('search-is-open');
        $('.open-search').css('opacity', '1');
        $('.close-search').css('opacity', '0');

    });

})
