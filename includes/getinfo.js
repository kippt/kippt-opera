opera.extension.onmessage = function(event) {
	var kippt = {},
		titles = document.documentElement.getElementsByTagName("title");
	kippt.title = "";	
	if(titles.length > 0) {
		kippt.title = titles[0].innerHTML;
	}
	kippt.url = window.location.toString();	
	kippt.notes = window.getSelection().toString();
	if(event.data === "getinfo" && kippt.url.indexOf("widget") === -1) {	
		event.source.postMessage(kippt);
	}
};
