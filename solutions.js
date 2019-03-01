#1

document.getElementById("header-bottom-left").style.backgroundColor = "red";
"red"

#2

document.getElementById("header-bottom-right").innerHTML = ("Hello <span style = 'font-weight: bold'>Miguel</style>");

#3

var thumbs = document.getElementsByClassName("thumbnail may-blank outbound");
for (var i = 0; i < thumbs.length; i++) {
  var image = thumbs[i].getElementsByTagName('img')[0];
  if(image) {
    image.height = 20;
    image.width = 20;
  }
}

#4

var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
 links[i].style.backgroundColor = "red";
}

#5

var counter = document.querySelector("#siteTable > #thing_t3_4tz7so > div > div.score.unvoted");
counter.innerHTML = "2001";

var search = document.querySelector("div.side > div.spacer > form#search > input");
search.placeholder = "query";

#6

