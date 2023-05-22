//your JS code here. If required.
const divElement=document.createElement("div");
const sizeElement=document.createElement("h1");
sizeElement.ineertext=`Width:${window.innerWidth} and Height:${window.innerHeight}`;
divElement.append(sizeElement);
	document.body.append(divElement);
window.onresize=function(){
	sizeElement.ineerText=`Width:${window.innerWidth} and Height:${window.innerHeight}`;
};