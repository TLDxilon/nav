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

        //Hago que suba al llegar a 600
        if ($(window).scrollTop() > 600) {
            $navBar.addClass('is-hide');
        } else  {
        }

        //Hago que baje al darle al scroll hacia arriba
        var newScrollPosition = window.scrollY;

        if (newScrollPosition < lastScrollPosition){
            $navBar.removeClass('is-hide');
        }else{

        }
        lastScrollPosition = newScrollPosition;
    });


    $('.content, .hero-content').css('padding-top', (height_topbar + height_logo + height_nav) + 'px');



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
            $searchBar.css('opacity', '1');

        } else{
            $backdrop.css('display', 'none');
            $searchBar.css('opacity', '0');

        }

    };

    $backdrop.on('click', function(){
        $(this).css('opacity', '0');
        $navBar.removeClass('search-is-open');

    });


    $('.js-search-toogle').on('click', function(){
        toogleSearch();
    });

    $('.js-menu-toogle').on('click', function(){
        toogleMenu();
    });




})
