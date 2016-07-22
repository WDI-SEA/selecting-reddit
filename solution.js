// getElementById

// Use getElementById to do the following:
// find the page header and change it's background color.
var headerTest = document.getElementById('header-bottom-left');
headerTest.style.backgroundColor = "red";

// find the element with the id header-bottom-right and change it's html to say "Hello NAME" (replace "NAME" with your name and make it bold)
headerTest2 = document.getElementById('header-bottom-right');
headerTest2.innerHTML = "<b>Hello ME</b>";

// getElementsByClassName

// Use getElementsByClassName to find every thumbnail and resize them to 20x20 pixels. (hint: you'll need to use a loop)

//I couldn't select thumbnails by getElementsByClassName("thumbnails")
var pictures = document.getElementsByClassName("thumbnail may-blank loggedin outbound");

for(var i = 0; i < pictures.length; i++){
	pictures[i].children[0].height = 20;
	pictures[i].children[0].width = 20;
};

// getElementsByTagName

// Use getElementsByTagName to add a red background to all links on the page.
var links = document.getElementsByTagName("a")

for(var i = 0; i < links.length; i++){
  lins[i].style.backgroundColor = "red";
};

// querySelector

// Use querySelector to:
// change the score of the 3rd post on the page.
document.querySelector("div.content div.id-t3_4tx1g3 div.midcol div.unvoted").innerHTML = 9999;

// change the text in the search box
// use .value
document.querySelector("div.side div.spacer input[name=q]").value = "Find Memes";

// querySelectorAll
// Use querySelectorAll to change (re-number) the ranks of the posts so they start from zero instead of 1. (hint: you'll need to use a loop)
scores = document.querySelectorAll("div.content div.spacer div.sitetable div.thing span.rank");

for (var i = 0; i < scores.length; i++){
	scores[i].innerHTML -= 1;
}
// addEventListener
// Use addEventListener to add a 'click' event to the 'body' tag that changes the background color of the body. (hint: utilize the style property')
document.addEventListener('click', function(){
  document.querySelector("div.content").style.backgroundColor = "black";
});