	//your JS code here. If required.
	// const divElement=document.createElement("div");
	// divElement.id="sizeInfo";
	const sizeElement=document.getElementsByTagName("h1")[0];
	// console.log(sizeElement.innerText);
		// sizeElement.innerText=`Width:${window.innerWidth} and Height:${window.innerHeight}`;
	// divElement.append(sizeElement);
	// 	document.body.append(divElement);
	window.onresize=function(){
		sizeElement.innerText=`Width:${window.innerWidth} and Height:${window.innerHeight}`;
	};