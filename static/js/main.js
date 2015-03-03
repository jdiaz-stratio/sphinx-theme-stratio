$( document ).ready(function() {
	var closed = true;
	var numLis =  $('#versions li').length;
	var maxHeight = ($('#versions li').height() * numLis) + 28;
	var minHeight = $('#versions').height();
   	$('#versions').click(eventHandler);

	function eventHandler(event){
		var newHeight = closed ? maxHeight : minHeight;
		$( '#versions ul' ).animate({
			height: newHeight
		}, 100, function() {
			closed = !closed;
		});		
	}
});


/*** SCROLL BAR ***/
$(document).ready(function(){
  $('aside').mCustomScrollbar();
});

/*** Header scroll ***/

$( window ).scroll(function(){
  console.log($(window).scrollTop());
  if ($(window).scrollTop() >= 70) {
    $('#main-nav').addClass('fixed');
    $('#sidebar').addClass('fixed');
  }
  else {
    $('#main-nav').removeClass('fixed');
    $('#sidebar').removeClass('fixed');
  }
});