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



  // $poputClose.on('click',function (e) {
  //   e.preventDefault();
  //   $('.overlay').hide();
  //   $('.popup').hide();
  // });
  //
  // $overlayClose.on('click',function (e) {
  //   e.preventDefault();
  //   $('.overlay').hide();
  //   $('.popup').hide();
  // });
  //
  // $galleryZoom .on('click',function (e) {
  //   e.preventDefault();
  //   $('.overlay').show();
  //   $('.popup').show();
  // });
});
