$(function() {

  // Инициализация слайдера
  $('.jcarousel').jcarousel({
    // Базовые настройки скрипта пишутся здесь
  });

  // Инициализация прокрутки слайдера
  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });

  // Инициализация пагинации слайдера
  $('.jcarousel-pagination').jcarouselPagination({
    item: function(page) {
      return '<a href="#' + page + '">' + page + '</a>';
    }
  });

  // Автопрокрутка слайдера
  $('.jcarousel').jcarouselAutoscroll({
    interval: 3000,
    target: '+=1',
    autostart: true
  });

  $("select").selectOrDie();

  $("select").selectOrDie({
    placeholder: "Choose a number"
  });

  $('input:checkbox').screwDefaultButtons({
    checked: "url(img/checkbox_Checked.jpg)",
    unchecked: "url(img/checkbox_Unchecked.jpg)",
    width: 85,
    height: 85
  });

  $('.menu li' ).hover(function () {
    $(this).children('ul').stop(false, true).fadeIn(1000);
    $(this).children('ul').addClass('css-box-animated');
  },
  function () {
    $(this).children('ul').stop(false, true).fadeOut(300);
  }

);



  // var $links = $('.menu a');
  // $links.on('mousemove', function (e) {
  //   e.preventDefault();
  //   var $submenu = $(this).siblings('ul');
  //   $submenu.show();
  //
  // });

});
