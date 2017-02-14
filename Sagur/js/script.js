$( function () {
  var $poputClose = $('.popup__close');
  var $galleryZoom = $('.gallery__zoom');
  var $overlayClose = $('.overlay');

  function popupClose (e) {
    e.preventDefault();
    $('.overlay').hide();
    $('.popup').hide();
  }
  function popupOpen (e) {
    e.preventDefault();
    $('.overlay').show();
    $('.popup').show();
  }
  $poputClose.on('click',popupClose);
  $overlayClose.on('click',popupClose);
  $galleryZoom.on('click',popupOpen);

});

$(function(){
  SyntaxHighlighter.all();
});
$(window).load(function(){
  $('.flexslider').flexslider({
    animation: "fade",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
});
