// rings, array?
// let numberOfRings = document.querySelector('#discQty')
// let setDifficulty = document.querySelector('.setDifficulty')
// let discs = document.querySelector('.discs')

let towerOne = []
let towerTwo = []
let towerThree = []

const button = document.querySelectorAll('button')

function onGameStart() {
	let discOne = document.createElement('div')
	let discTwo = document.createElement('div')
	let discThree = document.createElement('div')
	let discFour = document.createElement('div')
	let discFive = document.createElement('div')
	discOne.className = 'discs'
	discTwo.className = 'discs'
	discThree.className = 'discs'
	discFour.className = 'discs'
	discFive.className = 'discs'
	discOne.id = 'discOne'
	discTwo.id = 'discTwo'
	discThree.id = 'discThree'
	discFour.id = 'discFour'
	discFive.id = 'discFive'
	document.querySelector('#towerOne').appendChild(discOne)
	document.querySelector('#towerOne').appendChild(discTwo)
	document.querySelector('#towerOne').appendChild(discThree)
	document.querySelector('#towerOne').appendChild(discFour)
	document.querySelector('#towerOne').appendChild(discFive)
	towerOne.push([discOne, discTwo, discThree, discFour, discFive])
	console.log(towerOne)
}

 onGameStart()
 
 const startPoint = function() {
	let executed = false
	return function() {
		if (!executed) {
			executed = true
		}
	}
}

// function setDifficulty() {

// }


// removeChild ---> Google it
//once game starts set towerOne array to [discOne etc]




//why is onGameStart still running

// for (let i = 0; i < button.length; i++) {
// 	button[i].addEventListener('click', function(evt) {
// 		evt.preventDefault
// 		console.log('Clicked!')
// 		towerOne.shift[0]
// 	})
// }


 



// numberOfRings.addEventListener('click', function() {
// 	let newDiscs = input.value
// 	discs = newDiscs
// })

// for (let i = 0; i < 8; i++) {
// 	let discsInPlay = document.createElement('div')
// 	discsInPlay.className = '.discs'
// 	document.getElementsByClassName('.towerOne')[0].appendChild(discsInPlay).innerHTML
// }

// function setDiscs() {

// }


// Game moves = push piece from one array to the next


//logic to compare size of the ring being moved vs the ring it's being placed on

// if (ring1 < ring2) {

// }


// logic to evaluate win status (all rings on towerThree)

// function gameOver() {
//     if (towerThree = rings) {
//     console.log('Winner!')
//     }
// }



// Bonus: move counter:

// Bonus: stopwatch

// Bonus: Add rings




