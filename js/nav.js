$(document).ready(function(){

    var height_topbar = $('.topbar').outerHeight(true);
 //   var height_logo = $('.navbar-logo--top .navbar-item--logo, .navigation-bottom .navbar-item--logo').outerHeight(true);
    var height_nav = $('.js-navigation-1').outerHeight(true);
    var height_nav_2 = $('.js-navigation-2').outerHeight(true);
    var height_over_menu = $('.navbar-content').offset().top;
    var height_header = $('.header').outerHeight(true);
    var lastScrollPosition = 0;

    var $searchBar = $('.search-bar');
    var $navBar = $('.height-nav');
    var $navBarFixedPre = $('.navbar-fixed');
    var $navBarFixed = $('.navbar-fixed .navbar-content');
    var $navBarContent = $('.navbar-content');
    var $backdrop = $('.backdrop');
    var $menumobile = $('.menu-mobile');
    var $design = $('.design');
    var $fixHeaderPaddingNavTop = $('.navigation-top .fix-header-padding');
    var $fixHeaderPaddingNavBottom = $('.navigation-bottom .fix-header-padding');
    var $fixHeaderPaddingNavMed = $('.navigation-med .fix-header-padding');



    $(window).on('scroll', function(){
        // Hago que baje al darle al scroll hacia arriba
        var newScrollPosition = window.scrollY;

        // Muestro la navegación al subir
        if (newScrollPosition < lastScrollPosition){

            // Oculta la navegación cuando está a la altura de la cabecera
            if (newScrollPosition < height_header){
                $navBarFixed.addClass('is-hide');
                $navBarFixedPre.addClass('is-hide');
            } else {
                $navBarFixed.removeClass('is-hide');
                $navBarFixedPre.removeClass('is-hide');
            }

        }

        // Oculto la navegación al bajar
        if (newScrollPosition > lastScrollPosition){
            $navBarFixed.addClass('is-hide');
        }

        lastScrollPosition = newScrollPosition;
    });

    $fixHeaderPaddingNavTop.css('padding-top', (height_topbar + height_nav) + 'px');
    $fixHeaderPaddingNavBottom.css('padding-top', (height_topbar + height_nav + height_nav_2) + 'px');
    $fixHeaderPaddingNavMed.css('padding-top', (height_topbar + height_nav + height_nav_2) + 'px');



    var toogleMenu = function(){

        $design.toggleClass('page-is-moving');
        if ($design.hasClass('page-is-moving')) {
            $design.removeClass('page-is-static');
            $menumobile.addClass('display-block');
            $navBar.removeClass('search-is-open');

        } else{
            $design.removeClass('page-is-moving');
            $design.addClass('page-is-static');
            $menumobile.css('z-index','-6');


        }
    };

    var toogleSearch = function(){

        $navBarContent.toggleClass('search-is-open');

        if ($navBarContent.hasClass('search-is-open')) {
            $navBarContent.find('input').focus();
            $backdrop.css('display', 'block');
            $searchBar.css('opacity', '1');

        } else{
            $backdrop.css('display', 'none');
            $searchBar.css('opacity', '0');

        }

    };


    $('.js-search-toogle').on('click', function(){
        toogleSearch();
    });

    $('.js-menu-toogle').on('click', function(){
        toogleMenu();
    });


    $backdrop.on('click', function(){
        $(this).css('opacity', '0');
        $navBar.removeClass('search-is-open');

    });


    //opciones

    var $changeOption = $('.js-option');
    var $openOptions = $('.open-options');
    var $closeOptions = $('.close-options');

    $changeOption.each(function(index) {
        $(this).on('click', function(){

            var dataValue         = $(this).data('value');
            var dataOption        = $(this).data('option');
            var dataElement       = $(this).data('element');
            var $element          = $(dataElement);


            $element.attr('class', function(i, c){
                var pattern = '(^|\\s)' + dataOption + '\\S+';
                var myReg  = new RegExp(pattern, "g");
                return c.replace(myReg, '');
            });
            console.log(dataElement);
            $element.addClass(dataOption + dataValue);
             var new_height_topbar = $('.topbar').outerHeight(true);
             var new_height_nav = $('.height-nav .js-navigation-1').outerHeight(true);
             var new_height_nav_2 = $('.height-nav .js-navigation-2').outerHeight(true);

            $fixHeaderPaddingNavTop.css('padding-top', (new_height_topbar + new_height_nav) + 'px');
            $fixHeaderPaddingNavBottom.css('padding-top', (new_height_topbar + new_height_nav + new_height_nav_2) + 'px');
            $fixHeaderPaddingNavMed.css('padding-top', (new_height_topbar +  new_height_nav + new_height_nav_2) + 'px');


        });
    });

    $openOptions.on('click', function(){
        $('.options').css('left', '0');
    });
    $closeOptions.on('click', function(){
        $('.options').css('left', '-120px');
    });


});
