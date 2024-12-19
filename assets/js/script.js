$(function () {
    new WOW().init();
    ////////////////
    //header sticky
    $(window).on("scroll", function () {
        var scrollBarPosition = $(this).scrollTop();

        if (scrollBarPosition > 150) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
    ///////////////////
    //   var ct_item_slider = new Swiper('.trending-product-slider', {
    //     loop: true,
    //     slidesPerView: "1",
    //     autoplay: {
    //       delay: 4500,
    //       disableOnInteraction: false,
    //     },

    //     breakpoints: {
    //       0: {
    //         slidesPerView: 1,
    //       },
    //       480: {
    //         slidesPerView:2,
    //       },
    //       768: {
    //         slidesPerView: 3,
    //       },
    //       1200: {
    //         slidesPerView: 3.5,
    //       },
    //       1920: {
    //         slidesPerView:3.5,
    //       },
    //       2500: {
    //         slidesPerView:3.5,
    //       },
    //     },
    //   });

    ///////////////////////
    $(document).ready(function () {
        // Toggle the mobile menu on header-canvus-btn click
        $(".header-canvus-btn").on("click", function () {
            $(".mobile-menu").addClass("active"); // Add active class to mobile menu
            $(".mobile-menu-icon").addClass("active"); // Show close icon
        });

        // Remove the active class when clicking on the mobile-menu-icon
        $(".mobile-menu-icon").on("click", function () {
            $(".mobile-menu").removeClass("active"); // Remove active class from mobile menu
            $(".mobile-menu-icon").removeClass("active"); // Hide close icon
        });
    });

    ////////////////

});