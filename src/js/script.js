const towerOne = document.querySelector('#towerOne')
const towerTwo = document.querySelector('#towerTwo')
const towerThree = document.querySelector('#towerThree')

const discOne = document.createElement('div')
const discTwo = document.createElement('div')
const discThree = document.createElement('div')
const discFour = document.createElement('div')
const discFive = document.createElement('div')
const discSix = document.createElement('div')
const discSeven = document.createElement('div')
const discEight = document.createElement('div')
const discNine = document.createElement('div')
discOne.className = 'discs'
discTwo.className = 'discs'
discThree.className = 'discs'
discFour.className = 'discs'
discFive.className = 'discs'
discSix.className = 'discs'
discSeven.className = 'discs'
discEight.className = 'discs'
discNine.className = 'discs'
discOne.id = 'discOne'
discTwo.id = 'discTwo' 
discThree.id = 'discThree'
discFour.id = 'discFour'
discFive.id = 'discFive'
discSix.id = 'discSix'
discSeven.id = 'discSeven'
discEight.id = 'discEight'
discNine.id = 'discNine'

let readyToMove = false; // given to me by Jimmy, to operate as a switch
let currentDisc = ""
let moveCount = 0

function onGameStart() {
	towerOne.appendChild(discOne)
	towerOne.appendChild(discTwo)
	towerOne.appendChild(discThree)
	towerOne.appendChild(discFour)
	towerOne.appendChild(discFive)
	towerOne.appendChild(discSix)
	// towerOne.appendChild(discSeven)
	// towerOne.appendChild(discEight)
	// towerOne.appendChild(discNine)
}

onGameStart()

const reset = document.querySelector('.reset')
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
	moveCount++
}

// see if all discs are on Tower Three
function checkForWin() {
	if (towerThree.childElementCount === document.querySelectorAll('.discs').length) {
		alert('Solved in ' + moveCount + ' moves')
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
	} else if ((readyToMove === true) && (currentDisc.clientWidth > towerOne.children[0].clientWidth)) {
		unpickDisc()
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
	} else if ((readyToMove === true) && (currentDisc.clientWidth > towerTwo.children[0].clientWidth)) {
		unpickDisc()
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
	} else if ((readyToMove === true) && (currentDisc.clientWidth > towerThree.children[0].clientWidth)) {
		unpickDisc()
	}
	checkForWin()
})