	//your JS code here. If required.
	const sizeElement=document.getElementsByTagName("h1")[0];
	window.onresize=function(){
		sizeElement.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
	};