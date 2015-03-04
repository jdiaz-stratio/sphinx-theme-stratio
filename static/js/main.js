$( document ).ready(function() {
	var closed = true;
	var numLis =  $('#versions li').length;
	var maxHeight = ($('#versions li').height() * numLis) + 15;
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

	function animateArrow(){
		
	}
});

$(document).ready(function(){
  $('#responsive-button').click(function(){
    $('#sidebar').toggleClass('shown');
  });
});



/*** SCROLL BAR ***/
$(document).ready(function(){
 $('#main-menu').mCustomScrollbar({theme:'dark-2'});
});


