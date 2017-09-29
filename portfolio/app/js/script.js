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
});
