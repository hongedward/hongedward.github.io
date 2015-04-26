$(document).ready(function(){
	
//Nav Menu Toggle
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

//Profile Menu Toggle
$("#profile").hover(function() {
  if ($("#profile-menu").hasClass("hide-menu")) {
    $('#profile').css('color', "white");
    $('#profile').css('border', "solid 2px white");
    setTimeout(function() {
      $("#profile-menu").removeClass("hide-menu");
    }, 300);
  } else {
    return false;
  }
});

$("#main-container") .hover(function() {
  $("#profile-menu").addClass("hide-menu");
  $('#profile').css('color', "#FEAE1B");
  $('#profile').css('border', "solid 2px #FEAE1B");
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