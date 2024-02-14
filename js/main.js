(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    //gallery changes

    $(function () {

        // Vars
        var modBtn = $('#modBtn'),
            modal = $('#modal'),
            close = modal.find('.close-btn img'),
            modContent = modal.find('.modal-content');

        // open modal when click on open modal button 
        modBtn.on('click', function () {
            modal.css('display', 'block');
            modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
        });

        // close modal when click on close button or somewhere out the modal content 
        $(document).on('click', function (e) {
            console.log("hello button clicked")
            var target = $(e.target);
            if (target.is(modal) || target.is(close)) {
                modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function (next) {
                    modal.css('display', 'none');
                    next();
                });
            }
        });

    });

    // on click event on all anchors with a class of scrollTo
    $('a.scrollTo').on('click', function () {

        // data-scrollTo = section scrolling to name
        var scrollTo = $(this).attr('data-scrollTo');


        // toggle active class on and off. added 1/24/17
        $("a.scrollTo").each(function () {
            if (scrollTo == $(this).attr('data-scrollTo')) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });


        // animate and scroll to the sectin 
        $('body, html').animate({

            // the magic - scroll to section
            "scrollTop": $('#' + scrollTo).offset().top
        }, 1000);
        return false;

    })


    $(".menu-icon").click(function () {
        $(this).toggleClass("active");
        $(".overlay-menu").toggleClass("open");
    });

})(jQuery);

