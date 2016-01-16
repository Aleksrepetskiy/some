// $(function () {
//   $('.tabs li').on('click', function () {
//     $(this).addClass('active');
//     $(this).siblings().removeClass('active');
//     $('.wrapper .article')
//       .removeClass('active')
//       .eq($(this).index()).addClass('active');
//   });
// });

$(function () {
  $('.tabs li').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.wrapper .article')
      .removeClass('active')
      .eq($(this).index()).addClass('active');
  });
});
