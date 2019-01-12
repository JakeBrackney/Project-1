let towerOne = document.querySelector('#towerOne')
let towerTwo = document.querySelector('#towerTwo')
let towerThree = document.querySelector('#towerThree')

let discOne = document.createElement('div')
let discTwo = document.createElement('div')
let discThree = document.createElement('div')
let discFour = document.createElement('div')
discOne.className = 'discs'
discTwo.className = 'discs'
discThree.className = 'discs'
discFour.className = 'discs'
discOne.id = 'discOne'
discTwo.id = 'discTwo' 
discThree.id = 'discThree'
discFour.id = 'discFour'

let readyToMove = false; // given to me by Jimmy, to operate as a switch
let currentDisc = ""

function onGameStart() {
	towerOne.appendChild(discOne)
	towerOne.appendChild(discTwo)
	towerOne.appendChild(discThree)
	towerOne.appendChild(discFour)
}

onGameStart()

let reset = document.querySelector('.reset')
reset.addEventListener('click', onGameStart())

// Selects the top disc on whichever tower
function pickDisc(disc) {
	currentDisc = disc.querySelectorAll('.discs')[0] // [0] selects the index of the child element within the parent
	currentDisc.style.background = 'linear-gradient(to right, rgb(104, 68, 68), rgb(133, 133, 133), rgb(225, 225, 225), rgb(74, 26, 26), rgb(111, 43, 43), rgb(137, 84, 84), rgb(255, 255, 255), rgb(98, 68, 68))'
	readyToMove = true
}

// deselects a disc if you choose not to move it
function unpickDisc() {
	currentDisc.style.background = 'linear-gradient(to right, rgb(83, 91, 92), rgb(133, 133, 133), rgb(225, 225, 225), rgb(72, 77, 91), rgb(100, 101, 110), rgb(138, 132, 132), rgb(255, 255, 255), rgb(169, 169, 169))'
	currentDisc = ""
	readyToMove = false
}

//moves disc to target tower
function moveDisc(disc) {
	disc.insertBefore(currentDisc, disc.children[0])
	currentDisc.style.background = 'linear-gradient(to right, rgb(83, 91, 92), rgb(133, 133, 133), rgb(225, 225, 225), rgb(72, 77, 91), rgb(100, 101, 110), rgb(138, 132, 132), rgb(255, 255, 255), rgb(169, 169, 169))'
	currentDisc = ""
	readyToMove = false
}

// see if all discs are on Tower Three
function checkForWin() {
	if (towerThree.childElementCount === document.querySelectorAll('.discs').length) {
		alert('You got it! ( ͡° ͜ʖ ͡° )')
	}
}

// function for evaluating movement and legal moves for towerOne
towerOne.addEventListener('click', function() {
	if (towerOne.querySelectorAll('.discs').length > 0 && readyToMove === false) {
		pickDisc(towerOne)
	} else if (readyToMove === true && currentDisc.parentElement.id === 'towerOne') {
		unpickDisc()
	} else if (readyToMove === true && towerOne.childElementCount === 0) { // allows a disc to be placed on an empty tower
		moveDisc(towerOne)
	} else if ((readyToMove === true) && (currentDisc.clientWidth < towerOne.children[0].clientWidth)) { // clientWidth accesses the width set in css for each child
		moveDisc(towerOne)
	}
})

// function for evaluating movement and legal moves for towerTwo
towerTwo.addEventListener('click', function() {
	if (towerTwo.querySelectorAll('.discs').length > 0 && readyToMove === false) {
		pickDisc(towerTwo)
	} else if (readyToMove === true && currentDisc.parentElement.id === 'towerTwo') {
		unpickDisc()
	} else if (readyToMove === true && towerTwo.childElementCount === 0) {
		moveDisc(towerTwo)
	} else if ((readyToMove === true) && (currentDisc.clientWidth < towerTwo.children[0].clientWidth)) { 
		moveDisc(towerTwo)
	} 
})

// function for evaluating movement and legal moves for towerThree
towerThree.addEventListener('click', function() {
	if (towerThree.querySelectorAll('.discs').length > 0 && readyToMove === false) {
		pickDisc(towerThree)
	} else if (readyToMove === true && currentDisc.parentElement.id === 'towerThree') {
		unpickDisc()
	} else if (readyToMove === true && towerThree.childElementCount === 0) {
		moveDisc(towerThree)
	} else if ((readyToMove === true) && (currentDisc.clientWidth < towerThree.children[0].clientWidth)) {
		moveDisc(towerThree)
	}
	checkForWin()
})




