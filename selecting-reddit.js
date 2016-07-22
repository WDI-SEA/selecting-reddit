/*-------------------First exercise -----------------------*/
var header = document.getElementById('header-bottom-left');
header.style.backgroundColor = 'red';


var header2 = document.getElementById('header-bottom-right');
header2.innerHTML = "HELLOJACKSON!!!!!!";


/*-------------------Second Exercise=----------------------*/
var thumbNail = document.getElementsByClassName('thumbnail');
for(var i = 0; i<thumbNail.length; i++){thumbNail[i].style.width = '20px'}
"20px"
for(var i = 0; i<thumbNail.length; i++){thumbNail[i].style.height = '20px'}
"20px"


/*-----------------Third Exercise---------------------------*/
var links = document.getElementsByTagName('a');

for(var i = 0; i<links.length; i++){links[i].style.backgroundColor = 'red';}


/*---------------------Fourth Exercise------------------------*/
var score = document.querySelector('div#siteTable > div.id-t3_4tyaxs > div > div.score.unvoted');
score.innerHTML = "666";


var searchWord = document.querySelector('div.spacer > form#search > input');
searchWord.placeholder ="don't be a fart";

/*---------------------Fifth Exercise-----------------------------*/
var rank = document.querySelectorAll('div#siteTable > div >span.rank');
for(var i = 0; i<rank.length; i++){rank[i].innerHTML = i;}

/*-------------------------Sixth exercise-------------------------*/
var hotBody = document.getElementsByTagName('body');
hotBody[0].addEventListener("click" , function(){hotBody[0].style.backgroundColor = 'red'});