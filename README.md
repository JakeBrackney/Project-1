Tower of Hanoi

Tower of Hanoi is an ancient math game. It is solved with a sequence of moves, relocating all the discs from the left-most "tower" to the right-most "tower". The rules are you can only move one disc at a time, and no disc may be placed on top of a smaller disc. The more discs there are, the more moves that are required to solve it. The formula for minimum moves is 2^(number of discs) - 1. Three discs require a minumum of 7 moves, four discs require 15, and so on. The difficulty skyrockets quickly, with a 12 disc tower requiring over 4000 moves, and a 15 disc tower requiring over 32000.


This was my first project as a coding student. The objective was to create a functioning game using Parcel, HTML, CSS, and JavaScript. 

Technology:

Technology used includes parcel, pug, sass, and plain JavaScript.

Approach: 

My approach to this project was initially a series of `if/else` statements with each disc located in an array. I found this to be unneccesary. After a lot of research I learned I could use the DOM to access the index of child elements, and use the `insertBefore()` method to move the children from parent to parent. This was made possible with two elements set to `false` and `undefined` respectively which would then be set to `true` and `value of child` in my movement functions, and then back to `false` and `undefined` upon completion of the function. I attempted to write my main game play function as one function with several `if/else` statements for disc movement and, using `clientWidth` to check the size of the disc being moved compared to the child elements currently with each parent. I had trouble moving each child more than once with this approach. I broke that main function down into three separate functions, one for each tower/parent element. This enabled fluid movement between each tower, and allowed my code to properly evaluate the size of the child being moved. Once a disc is selected, it's background color changes, and once it is fully moved to a new parent element, the background changes back to it's original gradient.

Getting Started:

 If you would like to install this project, fork and clone my repository. Then install parcel in the root directory using `npm instal parcel`, followed by `parcel src/pug/index/pug`. Follow the `localhost` address provided.


If you would like to contribute:

My repository can be found here: https://github.com/JakeBrackney/Project-1 
Issues can be submitted here: https://github.com/JakeBrackney/Project-1/issues

If you'd like to play, please visit: https://jakebrackney.github.io/Project-1


