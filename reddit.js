// ####getElementById


document.getElementById('header-bottom-left').style.backgroundColor="red";

document.getElementById(`header-bottom-right`).innerhtml= "<span>Boet</span>"
"<span>Boet</span>"

// ####getElementsByClassName


var thumbnail = document.getElementsByClassName('tumbnail');
undefined
var i;
undefined
for (i = 0; i < thumbnail.length; i++){if(thumbnail[i].children[0]){thumbnail[i].children[0].style.height="20px";thumbnail[i].children[0].style.width="20px";}}
20px

// ####getElementsByTagName


var links = docuem.getElementByTagName('a');
undefined
var i;
undefined
for (var i; i < links.length; i++){links[i].style.backgroundColor="red";}
red

// ####querySelector


document.querySelector("div.content div.id-t3_4u21").
div#thing_id-t3_4u30x1.thing.id-t3_4u30x1.odd.link
I am not even sure how to select the correct element.
// ####querySelectorAll

var rank = document.querySelectorAll("span.rank")
undefined
Not sure how to chenge the text.

// ####addEventListener
document.getElementById("body").addEventListener("click", function(){document.body.style.backgroundColor="blue"; });
undefined