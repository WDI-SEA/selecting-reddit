// getElementById
var header = document.getElementById('header-bottom-left');
header.style.backgroundColor = 'limegreen';
header.innerHTML = "hello <span style='font-weight:bold'>ZOE</style>";

// getElementsByClassName
var thumbnails = document.getElementsByClassName('thumbnail may-blank outbound');
for (var i = 0; i < thumbnails.length; i++) {
	thumbnails[i].querySelector("img").setAttribute("height", 20);
	thumbnails[i].querySelector("img").setAttribute("width", 20);
}

// getElementsByTagName
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
	links[i].style.backgroundColor = "red";
}

// querySelector
var third = document.querySelector('#siteTable div[data-rank="3"] .score.unvoted');
third.innerHTML = ">9000";

var searchBox = document.querySelector("div.side > div.spacer > form#search input");
searchBox.value = "stuff!";

// querySelectorAll
var rankArray = document.querySelectorAll("#siteTable > div > span.rank");
for (var i = 0; i < rankArray.length; i++) {
	rankArray[i].innerHTML = i;
}

