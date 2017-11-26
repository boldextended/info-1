$( document ).ready(function() {

  /* Raise Brackets in H1 */
  $( "h1" ).each(function() {
    var myText = $( this ).html();
    myText = myText
    .replace(/(\()/g, "<span class='baselineshift2px'>$1</span>")
    .replace(/(\))/g, "<span class='baselineshift2px'>$1</span>")
    $( this ).html(myText);
  });

  /* Change quotation marks */
  $( "p, li" ).each(function() {
    var myText = $( this ).html();
    myText = myText
    .replace(/(\„)/g, "&lsaquo;")
    .replace(/(\“)/g, "&rsaquo;")
    $( this ).html(myText);
  });

});