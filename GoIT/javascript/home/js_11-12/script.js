$(function () {

  $('.carousel-list').slider();

  var html = $('#test').html();
  var info = [
    {
    name:'Репецкий Александр Александрович',
    },
    {
    position:'Маркетолог в финансовой организации',
    },
    {
    title:'Хочу учить фронт-енд потому что:',
    content: 'Хочу работать программистом и жить на берегу океана',
    content: 'Много платят',
    content: 'Хочу изменений в работе'
    },
    {
    title:'Мой контактный телефон ',
    content: '+380637377728'
    },
    {
    title:'Мой фидбек:',
    content: 'Если нужно, могу построить вам забор'
    }
];
  var content = tmpl(html, {
    data:info
  });
  $('body').append(content);

});
