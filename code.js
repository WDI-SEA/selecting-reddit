var div = document.querySelector('.className');
div.addEventListener('click', function(){
	document.querySelector.('body').style.backgroundColor = 'red';
})

//1
document.getElementById('header-bottom-left').style.backgroundColor = 'red';

document.getElementById('header-bottom-right').innerHTML = 'Hello <span style="font-weight:bold">Zach</span>';

//2

var thumbnail = document.getElementsByClassName('thumbnail may-blank loggedin outbound');

for (var i = 0; i < thumbnail.length; i++) {
	thumbnail[i].querySelector('img').setAttribute("height", 20);
	thumbnail[i].querySelector('img').setAttribute("width", 20);
}

//3

var linksOnPage = document.getElementsByTagName('a');

for (var i = 0; i < linksOnPage.length; i++){
	linksOnPage[i].setAttribute('style', 'background-color: red');
}

//4

var scoresOnPage = document.querySelector('#siteTable > #thing_t3_4tyul4 > div.midcol.unvoted > div.score.unvoted').innerHTML = "yoyo";

//5

var input = document.querySelector('div.side > div.spacer > form#search > input').placeholder = "yo yo";

//6
var rank = document.querySelectorAll('#siteTable > div > span.rank');

for (var i = 0; i < rank.length; i++){
	rank[i].innerHTML-= 1;
}

//7

var body = document.body;
body.addEventListener('click', function(){
	document.body.style.backgroundColor = 'red';
})