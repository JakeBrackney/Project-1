// rings, array?
let numberOfRings = document.querySelector('#discQty')
let setDifficulty = document.querySelector('.setDifficulty')
let discs = document.querySelector('.discs')



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

// let towerOne = []
// let towerTwo = []
// let towerThree = []

discs.addEventListener('click', function moveDisc() {
	let fragment = document.getElementsByClassName('.discs') 
	// fragment.appendChild(document.getElementById('#towerOne'))
	document.querySelectorAll('.tower').appendChild(fragment)
})

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




