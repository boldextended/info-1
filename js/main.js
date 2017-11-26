$( document ).ready(function() {

  /* Toggle Header */
  var myHeader = $('header');

  $(window).scroll(function() {
    //console.log( $(window).scrollTop() );
    var myScroll = $(window).scrollTop();
    if( myScroll > 100 ) {
      myHeader.removeClass( 'off' );
    } else {
      myHeader.addClass( 'off' );
    }
  });

});
