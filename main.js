(function($) {

    $(document).on("click", "ul li", function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // //Toggle Menu---------
    $('.menu-button').on('click', function() {
        $('.navbar').toggleClass('show');
        $('.hero-shadow').toggleClass('shadow');

    });
    $('.close-button, .hero-shadow').on('click', function() {
        $('.navbar').removeClass('show');
        $('.hero-shadow').removeClass('shadow');
    });



})(jQuery);