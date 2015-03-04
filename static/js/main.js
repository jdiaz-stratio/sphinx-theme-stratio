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

/*** FIXING SCROLL ***/
$( document ).ready(function() {
  var main = main = $('#main-menu');

  $('.toctree-l2 .reference.internal').click(function(event) {
    event.preventDefault();

    var full_url = this.href,
      parts = full_url.split('#'),
      trgt = parts[1],
      target_offset = $('#'+trgt).offset(),
      target_top = target_offset.top;

    $('html, body').animate({scrollTop:target_top}, 300);

    /* Remove active class on any li when an anchor is clicked */

    $('#main-menu .active').removeClass('active')

    /* Add active class to clicked anchor's parent li */

    $(this).parent().addClass('active');

  });

});





