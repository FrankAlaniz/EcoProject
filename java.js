var opacity =0;
var intervalID=0;
function fadein (){
intervalID=setInterval(show, 20);
}
function show(){
var a = document. getElementById("button");
opacity = Number (window.getComputedStyle (a). getPropertyValue
("opacity"));
if (opacity>0) {
opacity=opacity-0.1;
a.opacity=opacity;
}
else{
clearInterval (intervalID);
}
}