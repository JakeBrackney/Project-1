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

let readyToMove = false; // given to me by Jimmy
let currentDisc = undefined


function onGameStart() {
	towerOne.appendChild(discOne)
	towerOne.appendChild(discTwo)
	towerOne.appendChild(discThree)
	towerOne.appendChild(discFour)

}

onGameStart()


//game reset button - refreshes page -- https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
let reset = document.querySelector('.reset')
reset.addEventListener('click', function() {
	location.reload(true)
})

// Selects the top disc on whichever tower
let pickDisc = function(disc) {
	currentDisc = disc.querySelectorAll('.discs')[0]
	currentDisc.style.background = 'rgb(75, 96, 102)'
	readyToMove = true
}

// deselects a disc if you choose not to move it
let unpickDisc = function() {
	currentDisc.style.background = 'linear-gradient(to right, rgb(83, 91, 92), rgb(133, 133, 133), rgb(225, 225, 225), rgb(72, 77, 91), rgb(100, 101, 110), rgb(138, 132, 132), rgb(255, 255, 255), rgb(169, 169, 169))'
	currentDisc = undefined
	readyToMove = false
}

//moves disc to target tower
let moveDisc = function(disc) {
	disc.insertBefore(currentDisc, tower.children[0])
	currentDisc.style.background = 'linear-gradient(to right, rgb(83, 91, 92), rgb(133, 133, 133), rgb(225, 225, 225), rgb(72, 77, 91), rgb(100, 101, 110), rgb(138, 132, 132), rgb(255, 255, 255), rgb(169, 169, 169))'
	currentDisc = undefined
	readyToMove = false
}

// see if all discs are on Tower Three
let checkForWin = function() {
	if (towerThree.childElementCount === document.querySelectorAll('.discs').length) {
		alert('You got it!')
	}
}

// function for evaluating movement and legal moves for towerOne
towerOne.addEventListener('click', function() {
	if (towerOne.querySelectorAll('.discs').length > 0 && readyToMove === false) {
		pickDisc(towerOne)
	} else if (readyToMove === true && currentDisc.parentElement.id === 'towerOne') {
		unpickDisc()
	} else if (readyToMove === true && towerOne.childElementCount == 0) {
		moveDisc(towerOne)
	} else if ((readyToMove === true) && (currentDisc.clientWidth < towerOne.children[0].clientWidth)) {
		moveDisc(towerOne)
		checkForWin()
	} else {
		alert('Try again.')
	}
})

// function for evaluating movement and legal moves for towerTwo
towerTwo.addEventListener('click', function() {
	if (towerTwo.querySelectorAll('.discs').length > 0 && readyToMove === false) {
		pickDisc(towerTwo)
	} else if (readyToMove === true && currentDisc.parentElement.id === 'towerTwo') {
		unpickDisc()
	} else if (readyToMove === true && towerTwo.childElementCount == 0) {
		moveDisc(towerTwo)
	} else if ((readyToMove === true) && (currentDisc.clientWidth < towerTwo.children[0].clientWidth)) {
		moveDisc(towerTwo)
		checkForWin()
	} else {
		alert('Try again.')
	}
})

// function for evaluating movement and legal moves for towerThree
towerThree.addEventListener('click', function() {
	if (towerThree.querySelectorAll('.discs').length > 0 && readyToMove === false) {
		pickDisc(towerThree)
	} else if (readyToMove === true && currentDisc.parentElement.id === 'towerThree') {
		unpickDisc()
	} else if (readyToMove === true && towerThree.childElementCount == 0) {
		moveDisc(towerThree)
	} else if ((readyToMove === true) && (currentDisc.clientWidth < towerThree.children[0].clientWidth)) {
		moveDisc(towerThree)
		checkForWin()
	} else {
		alert('Try again.')
	}
})




