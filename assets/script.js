$(document).ready(function(){
	
//Menu Toggle
$("#logo").hover(function() {
  if ($("#menu").hasClass("hide-menu")) {
    $('#logo').css('color', "white");
    setTimeout(function() {
      $("#menu").removeClass("hide-menu");
    }, 300);
  } else {
  	return false;
  }
});

$("#main-container") .hover(function() {
  $("#menu").addClass("hide-menu");
  $('#logo').css('color', "#FEAE1B");
});

$("#main-container") .click(function() {
  $("#menu").addClass("hide-menu");
  $('#logo').css('color', "#FEAE1B");
});

//Login Toggle
$("#login") .click(function() {
  $("#modal-container") .show();
});

$("#cancel") .click(function() {
  $("#modal-container") .hide();
});
  
$("#modal-overlay") .click(function() {
  $("#modal-container") .hide();
});

});