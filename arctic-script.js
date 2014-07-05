console.log("arctic-script.js loaded...")

function handler()
{
	console.log(imageReq.response);
}

var imageReq = new XMLHttpRequest();
var url = "http://www.flickr.com";
imageReq.onreadystatechange = handler;
imageReq.open("GET", url);
imageReq.send();

