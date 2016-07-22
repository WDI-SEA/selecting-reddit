//QUESTION 1//
document.getElementById('header-bottom-left')style.backgroundColor = 'red';


document.getElementById('header-bottom-right').innerHTML = "Hello <span class style ="font-weight: bold;">Kendra</style>";

//QUESTION 2//
var thumbnail = document.getElementsByClassName('thumbnail may-blank outbound');
for(var i = 0; i < thumbnail.length; i++){
thumbnail[i].querySelector('img').setAttribute("height", 20);
thumbnail[i].querySelector('img').setAttribute("width", 20);
    }


//QUESTION 3//
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
links[i].setAttribute("style","background-color: red;");

}


//QUESTION 4- querySelector//change the score of the 3rd post on the page.

var thirdPostScore = document.getElementsByClassName('score unvoted'[3]);
for(var i = 0; i < thirdPost.length; i++){
thirdPost[i].querySelector()
}

// var score = document.querySelector("div#siteTable > div#thing id-t3_4tzg41 > div.midcol.unvoted > div.score.unvoted").innerHTML = "111";

var search = document.querySelector("div.side > div.spacer > form#search > input").placeholder = "hello"

//QUESTION 5 - querySelectorAll//


var reRank = document.querySelectorAll('#siteTable > div > span.rank');
for(var i = 0; i < reRank.length; i++){
reRank[i].innerHTML -= 1;

    }

//QUESTION 6- eventListener/
// var body = document.body;

document.body.addEventListener("click", function() {
   document.body.style.backgroundColor = 'red';
})



