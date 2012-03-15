kippt = {};
window.addEventListener('DOMContentLoaded', function() {
	kippt.title = document.documentElement.getElementsByTagName("title")[0].innerHTML;
	kippt.url = window.location.toString();	
}, false);

opera.extension.onmessage = function(event) {
	var titles = document.documentElement.getElementsByTagName("title");
	kippt.title = "";	
	if(titles.length > 0) {
		kippt.title = titles[0].innerHTML;
	}
	kippt.url = window.location.toString();	
	if(event.data === "getinfo" && kippt.url.indexOf("widget") === -1) {	
		event.source.postMessage(kippt);
	}
	if(event.data === "popit") {
		(function(){var w=window.open('https://kippt.com/extensions/new/?url='+encodeURIComponent(document.location.href)+'&title='+encodeURIComponent(document.title)+'&source=bp1&notes='+encodeURIComponent(''+(window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection.createRange().text)),'kippt','width=400,height=245,location=0,links=0,scrollbars=0,toolbar=0'); if(w)setTimeout(function(){w.focus()},100);else{alert('It seems that you have a popup blocker. Please, hold the CTRL-key and try again.')}})();	
	}	
};

var parent = {
	window: window
}