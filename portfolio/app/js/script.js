const waterJs = require('./common/water.js');
const $ = require('jquery');

// const hamburgerContainer = document.getElementById('hamburger');
// hamburgerContainer.click(function () {
//     console.log('click');
// });

$(document).ready(function(){

  $("#hamburger").click(function(){
    $(this).toggleClass("active");
    $('#menu').toggleClass("active");
  });

  $("#autorization").click(function(){
    $(this).hide();
    $('.flipper').addClass("active");
  });

  $("#index").click(function(e){
      e.preventDefault();
    $('.flipper').removeClass("active");
    $("#autorization").show();
  });
});
