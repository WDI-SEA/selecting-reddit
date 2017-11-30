# Selecting from Reddit's DOM

We're going to practice some JavaScript based DOM manipulation and traversal in the browser.

Go to [reddit](http://reddit.com) and open the JavaScript console (cmd + option + j). Then try to complete the following tasks.

#### getElementById

Use `getElementById` to do the following:

* find the page header and change it's background color.
* find the element with the id `header-bottom-right` and change it's html to say "Hello **NAME**" (replace "NAME" with your name and make it bold)


#### getElementsByClassName

Use `getElementsByClassName` to find every thumbnail and resize them to 20x20 pixels. (hint: you'll need to use a loop)


#### getElementsByTagName

Use `getElementsByTagName` to add a red background to all links on the page.


#### querySelector

Use `querySelector` to:

* change the score of the 3rd post on the page.
* change the text in the search box
  * use `.value`


#### querySelectorAll

Use `querySelectorAll` to change (re-number) the ranks of the posts so they start from zero instead of 1. (hint: you'll need to use a loop)

### addEventListener

Use `addEventListener` to add a 'click' event to the 'body' tag that changes the background color of the body. (hint: utilize the style property')

#### Extra

* Try the `getElementById`, `getElementByClassName`, and `getElementsByTagName` items with query selector.
* Try the `querySelector` items using `getElement...`.
* For additional practice try changing other elements of the page using javascript.

