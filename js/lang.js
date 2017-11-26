var langs = ['en', 'de'];
var langCode = '';
var langJS = null;

console.log("lang 1");

var translate = function (jsdata) {
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
}


langCode = navigator.language.substr (0, 2);

if (langCode in langs) {
	$.getJSON('js/lang/'+langCode+'.json', translate);
}
else {
	$.getJSON('js/lang/en.json', translate);
  console.log("lang 2");
}



