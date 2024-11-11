$(document).ready(function() {
    // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    // Waypoints
    $('.work').waypoint(function() {
        $('.work').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.download').waypoint(function() {
        $('.download .btn').addClass('animated tada');
    }, {
        offset: '75%'
    });

    // Fancybox
    $('.work-box').fancybox();

    // Flexslider
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false,
    });

    // Page Scroll
    var sections = $('section');
    var nav = $('nav[role="navigation"]');

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - 76;
            var bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                var sectionId = $(this).attr('id');
                nav.find('a[href="#' + sectionId + '"]').addClass('active');

                // Update URL without # using History API
				history.pushState(null, '', '#' + sectionId);
            }
        });
    });

    nav.find('a').on('click', function() {
        var $el = $(this);
        var id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 75
        }, 500);

        // Update URL without # using History API
        history.pushState(null, '', '/' + id.replace('#', ''));
        return false;
    });

    // Handle browser back/forward navigation
    window.addEventListener('popstate', function() {
        var path = window.location.pathname;
        var sectionId = path.substring(1); // Get section id from URL
        if (sectionId) {
            var target = $('#' + sectionId);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 75
                }, 500);
            }
        }
    });

    // Mobile Navigation
    $('.nav-toggle').on('click', function() {
        $(this).toggleClass('close-nav');
        nav.toggleClass('open');
        return false;
    });
    nav.find('a').on('click', function() {
        $('.nav-toggle').toggleClass('close-nav');
        nav.toggleClass('open');
    });
});
