(function(w){
	var vp = document.createElement("meta");
	vp.setAttribute("name", "viewport");
	vp.setAttribute("content", "width=" + (/ip(?=od|ad|hone)/i.test(navigator.userAgent) ? w : w+",target-densitydpi=" + (640 / (navigator.appVersion.indexOf("GT-I9100G") > -1 ? 480 : screen.width) * devicePixelRatio * 160)) + ",user-scalable=no");
	document.getElementsByTagName("head")[0].appendChild(vp);
})(640);
/*(function(){
	var ua = window.navigator.userAgent;
	if(!/Android|iPhone|SymbianOS|Windows\sPhone|iPad|iPod/i.test(ua)) {
		window.location.href="../index.html";
	}
})();*/
