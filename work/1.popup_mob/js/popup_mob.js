$(document).ready(function() {

    setTimeout(function() {

        if ($.cookie('popup_mob')) return;

        document.getElementById('popup_mob').style.display = 'block';
        document.getElementById('overlay_mob').style.display = 'block';
        $(function() {
            var $popup = $('.popup__close');
            var $overley = $('.overlay_mob');
            var $popupLink = $('.popup__link');

            function popupClose(e) {
                e.preventDefault();
                $('.overlay_mob').hide();
                $('.popup_mob').hide();
            }

            function popupCloseLink() {
                $('.overlay_mob').hide();
                $('.popup_mob').hide();
            }

            $popup.on('click', popupClose);
            $overley.on('click', popupClose);
            $popupLink.on('click', popupCloseLink);

            $('.popup_mob').animate({
                left: "50%"
            }, 350);
        });

        $.cookie('popup_mob', true, {
            expires: 14,
            path: '/'
        });

    }, 5000);

});
