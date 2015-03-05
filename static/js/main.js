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

/*** Show and hide the sidebar in responsive mode ***/
$(document).ready(function(){
  $('#responsive-button').click(function(){
    $('#sidebar').toggleClass('shown');
  });
});

/*** SCROLL BAR ***/
$(document).ready(function(){
  var currentDraggerTop = 0;
  $('#main-menu').mCustomScrollbar({
    theme:'dark-2',
    callbacks: {
      whileScrolling:function(){
        currentDraggerTop = this.mcs.draggerTop;
      }
    }
  });



  var main = main = $('#main-menu');

  $('#main-menu .toctree-l2 .reference.internal').click(function(event) {
    event.preventDefault();
    //We have to unbind the scroll behaviour
    $(window).unbind('scroll', scrollEventHandler);
    var full_url = this.href,
      parts = full_url.split('#'),
      trgt = parts[1],
      target_offset = $('#'+trgt).offset(),
      target_top = target_offset.top;

    $('html, body').animate({scrollTop:target_top}, 300, function(){
      //When the animation is complete, we have to rebind the scroll behaviour.
      $(window).scroll(scrollEventHandler);
    });
    /* Remove active class on any li when an anchor is clicked */
    $('#main-menu .active').removeClass('active')
    /* Add active class to clicked anchor's parent li */
    $(this).parent().addClass('active');


  });

  /*** HIGHLIGHTING MENU WHEN SCROLLING ***/
  /**
   * We have an array of json. Each Json have two properties:
   *  {
   *    linkElement: the link (jQueryElement : the anchor link),
   *    topTitle: Integer that represents the top of the section title.
   *  }
   */
  var main = main = $('#main-menu');
  var linksTops = [];

  $('.toctree-l2 .reference.internal').each(function(index) {

    var full_url = this.href,
      parts = full_url.split('#'),
      trgt = parts[1],
      target_offset = $('#'+trgt).offset(),
      target_top = target_offset.top;

    linksTops.push({
      linkElement: this,
      topTitle: target_top
    });
  });

  $(window).scroll(scrollEventHandler);

  function scrollEventHandler(){
    var element = getElementActive($(window).scrollTop());
    $('#main-menu .active').removeClass('active');
    if(!$(element).parent().hasClass('current')){
      $(element).parent().addClass('active');
    }
    var scrollNeeded = getScrollNeeded($(element).parent());
    if(scrollNeeded < 0){
      $('#main-menu').mCustomScrollbar('scrollTo', '+=' + (scrollNeeded * -1));
    }else if(scrollNeeded > 0){
        $('#main-menu').mCustomScrollbar('scrollTo', '-=' + scrollNeeded);
    }
  };

  /**
   * Return the link element (jQuery Element) actives depending on the scroll of the windows.
   * @param integer windowScrollTop
   * @returns {jQuery element}
   */
  function getElementActive(windowScrollTop){

    for(var i = linksTops.length - 1; i >= 0; i--){
      if(linksTops[i].topTitle <= windowScrollTop + 5){
       return linksTops[i].linkElement;
      }
    }
    return $('.toctree-l1.current > .reference');
  }

  function getScrollNeeded(liElementActive){
    if(!liElementActive){
      return 0;
    }
    var offSetLi = liElementActive.offset().top;
    var offSetScrollContainer = $('#mCSB_1').offset().top;
    var HeightScrollContainer = $('#mCSB_1').height();
    var scrollTop = $(window).scrollTop();
    var topScrollContainer = offSetScrollContainer - scrollTop;
    var topLi = offSetLi - scrollTop;
    var topLiRespectScrollContainer = topLi - topScrollContainer;
    if(topLiRespectScrollContainer > HeightScrollContainer || topLiRespectScrollContainer < 0 ){
      return topLiRespectScrollContainer;
    }else{
      return 0;
    }

  }
});






