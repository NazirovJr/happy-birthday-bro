(function($) {
    new gnMenu(document.getElementById('gn-menu'));
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.gn-menu li a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        $('a.scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    //nivo lightbox
    $('.gallery-item a').nivoLightbox({
        effect: 'fadeScale',
        theme: 'default',
        keyboardNav: true,
        clickOverlayToClose: true,
        onInit: function() {},
        beforeShowLightbox: function() {},
        afterShowLightbox: function(lightbox) {},
        beforeHideLightbox: function() {},
        afterHideLightbox: function() {},
        onPrev: function(element) {},
        onNext: function(element) {},
        errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
    });
})(jQuery);

//# sourceMappingURL=index.23184a91.js.map
