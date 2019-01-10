let towerOne = document.querySelector('#towerOne')
let towerTwo = document.querySelector('#towerTwo')
let towerThree = document.querySelector('#towerThree')

let t1 = []
let t2 = []
let t3 = []

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

let readyToMove = false;

function onGameStart() {
	towerOne.appendChild(discOne)
	towerOne.appendChild(discTwo)
	towerOne.appendChild(discThree)
	towerOne.appendChild(discFour)
	// t1.push([discOne, discTwo, discThree, discFour])
	// console.log(towerOne)
}

onGameStart()
// console.log(document.querySelector('#towerOne').childNodes[0])

//game reset button - refreshes page -- https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
let reset = document.querySelector('.reset')
reset.addEventListener('click', function() {
	location.reload(true)
})


for (let i = 0; i < 3; i++) {
	let moveDisc = document.querySelectorAll('.towerContainer')[i] //event.currentTarget or event.target
	let discs = document.querySelectorAll('.discs')[i]
	moveDisc.addEventListener('click', function(evt) {
		console.log(evt.currentTarget)
		// console.log(`${this.id}`)
	if (readyToMove === false) {
		readyToMove = true
		moveDisc.removeChild(discs)[0] //need to grab by first child
	} else if (readyToMove === true) {
		discs.insertBefore(discs, evt.currentTarget)//tower one, tower two)
		
	} else {
		readyToMove === false
	}

	})
}		

//get discOne to move including separating towers by ID
// function to identify which disc is on top
// if/else to verify size of disc 
		

		// else
		// make false


// 		towerOne.shift() 
// 		`${this.id}`.addEventListener('click', function() {
// 			towerTwo.unshift()
// 		})

		//event listener for second click?








// removeChild ---> Google it


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




