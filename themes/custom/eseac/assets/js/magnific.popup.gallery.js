(function ($, Drupal) {
    'use strict';

//    $('.albums--item---figure').click(function () {
//        //$(this).next('a').trigger('click');
//    });
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function (openerElement) {

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });
})(jQuery, Drupal);