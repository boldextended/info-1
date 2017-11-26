$( document ).ready(function() {
    console.log( "ready!" );
    var myNav = $('nav');
    var i = 0;
    $('h2').each(function(){
      i++;
      var myID = "topic-" + i
      var myTitle = $( this ).attr( "id", myID );
      var myText = "<span class=\'numbering\'>" + i + " </span>" + myTitle.text();
      myTitle.html( myText );

      console.log( myText );
      //myNav.append( $( "<a>"myTitle"</a>" ) );

      var myLink = $('<a href="#' + myID +'">' + myText + '</a>').appendTo( myNav );
      myLink.addClass('nav-item');
    })
});