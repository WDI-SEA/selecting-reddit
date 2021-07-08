
// # 1

var header = document.getElementById('header-bottom-left');

header.style.backgroundColor = "red";

header.innerHTML = "Hello <b>Jimmy</b>";

// # 2

var thumbNail = document.getElementsByClassName('thumbnail may-black outbound ');

for(var i = 0; i < thumbNail.length; i++){
	thumbNail[i].style.height = "100px";
}

for(var i = 0; i < thumbNail.length; i++){
	thumbNail[i].style.width = "100px";
}

// # 3

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
	links[i].style.backgroundColor = "red";
}

// # 4

var rank = document.querySelector("div.thing.id-t3_4tzzhi.odd.link .score.unvoted");

for(var i = 0; i < rankOrder.length; i++){
	rankOrder.innerHTML = i;
}

// # 5

var rankOrder = document.getElementsByClassName('rank');

// # 6

var body =document.querySelector("body");

body.addEventListener("click", function(){
    body.style.backgroundColor = "blue";
});