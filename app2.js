// document.addEventListener('DOMContentLoaded', () => {
//     const pointsDisplay = document.getElementById('points')
//     const width = 28
//     let points = 0
//     const grid = document.querySelector('.grid')

//     //Layout key:
//         // 0 - dots
//         // 1 - wall
//         // 2 - wraith-house
//         // 3 - POWERPILL
//         // 4 - empty

//     const layout = [
//         1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
//         1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
//         1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
//         1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
//         1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
//         1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//         1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
//         1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
//         1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
//         1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
//         1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,
//         1,1,1,1,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,1,1,1,1,
//         1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1,
//         0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,
//         1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1,
//         1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,
//         1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,
//         1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//         1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
//         1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
//         1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
//         1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
//         1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
//         1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
//         1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
//         1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
//         1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
//         1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
//       ]


// const squares = []

// function createMap() {
//     //loop over the entire length of the layout array
//     for (let i = 0; i < layout.length; i++) {
//     //create a div for each element
//         const square = document.createElement('div')
//     //add the divs - (squares) to the grid
//         grid.appendChild(square)
//     //add the dives to a new array
//         squares.push(square)
//     //Use the layout to populate the board with the css styling
//         //Layout key:
//         // 0 - .dots
//         // 1 - .wall
//         // 2 - .wraith-house
//         // 3 - .powerpill
//         // 4 - .empty
//         if (layout[i] === 0) {
//             squares[i].classList.add('dots');
//         } else if (layout[i] === 1) {
//             squares[i].classList.add('wall');
//         } else if (layout[i] === 2) {
//             squares[i].classList.add('wraith-house');
//             // squares[i].classList.add('wraith')
//         } else if (layout[i] === 3) {
//             squares[i].classList.add('power-pill');
//         }
//     }
// }

// createMap()

//     //get coordinates of Wraiths
//     function grabCoordinates(index) {
//         return [index % width, Math.floor(index / width)]
//     }


// //Setup pill consumers starting position in the array
// let pillConsumerCurrentIndex = 489
// //Add the css styling to the array position index
// squares[pillConsumerCurrentIndex].classList.add('pill-consumer');

// //Movement
// function movePillConsumer(e) {
//     //remove PCCI from the current grid section
//     squares[pillConsumerCurrentIndex].classList.remove('pill-consumer')
//     //use a switch to decide which new index to move to
//     let currentKey = e.keyCode
    
//     switch(currentKey) {
//         //left - keyCode 37
//         case 37:
//             //check if the current index location of pillCons is divisible to 0 by the (width = 28 divs)
//             //AND doesn't have a class of 'wall' AND 'wraith-house'
//             if (pillConsumerCurrentIndex % width !== 0 && !squares[pillConsumerCurrentIndex -1].classList.contains('wall') 
//             && !squares[pillConsumerCurrentIndex -1].classList.contains('wraith-house'))
//             pillConsumerCurrentIndex -= 1
            

//         //check if pillConsumer is at the Left Exit
//             if ((pillConsumerCurrentIndex -1) === 363) {
//                 pillConsumerCurrentIndex = 391
//             }
//             break;

//         //up - keyCode 38
//         case 38:
//             //check if the current index location of pillCons minus width is less than or equal to 0
//             //AND doesn't have a class of 'wall' or 'wraith-house'
//             if (pillConsumerCurrentIndex - width >= 0 && !squares[pillConsumerCurrentIndex - width].classList.contains('wall')
//             && !squares[pillConsumerCurrentIndex - width].classList.contains('wraith-house'))
//             pillConsumerCurrentIndex -= width
//             break;

//         //right - keyCode 39
//         case 39:
//             //check if the current index location of pillCons is divisible by or less than the width minus one
//             //AND doesn't have a class of 'wall' or 'wraith-house'
//             if (pillConsumerCurrentIndex % width < width -1 && !squares[pillConsumerCurrentIndex +1].classList.contains('wall')
//             && !squares[pillConsumerCurrentIndex + 1].classList.contains('wraith-house'))
//             pillConsumerCurrentIndex += 1

//             if ((pillConsumerCurrentIndex +1) === 392) {
//                 pillConsumerCurrentIndex = 364
//             }
//             break;

//         //down - keyCode 40
//         case 40:
//             //check if the current index location of pillCons plus width is less than or equal to width X width
//             //AND doesn't have a class of 'wall' or 'wraith-house'
//             if (pillConsumerCurrentIndex + width < width * width && !squares[pillConsumerCurrentIndex + width].classList.contains('wall')
//             && !squares[pillConsumerCurrentIndex + width].classList.contains('wraith-house'))
//             pillConsumerCurrentIndex += width
//             break;
//     }
//     squares[pillConsumerCurrentIndex].classList.add('pill-consumer');

//     consumeDots();
//     powerPillConsume();
//     checkEndGame();
//     checkWinGame();

//     }

//     document.addEventListener('keyup', movePillConsumer);

// //Dot consume:
// //make dots dissappear
// //add 1 to points for each dot that is "consumed"

//     function consumeDots() {
//         if (squares[pillConsumerCurrentIndex].classList.contains('dots')) {
//             points ++
//             pointsDisplay.innerHTML = points
//             squares[pillConsumerCurrentIndex].classList.remove('dots');
//             squares[pillConsumerCurrentIndex].classList.add('empty')
//         }
//     }

// //Power Pill consume:
// //make dots dissappear
// //add 3 to points for each dot that is "consumed"
// //Remove scaries for power pill influenced pill consumer overlap ;
//     function powerPillConsume() {
//         //if the current space has a power pill
//         if (squares[pillConsumerCurrentIndex].classList.contains('power-pill')) {
//             //remove the powerpill
//             squares[pillConsumerCurrentIndex].classList.remove('power-pill');
//             //Add extra points
//             points += 3
//             //set the freaked out status of the wraiths to true
//             wraiths.forEach(wraith => wraith.isFreaked = true)
//             //set the timer for freaked out, then switch freaked status
//             setTimeout(unFreakWraiths, 10000)
//             //Update the points
//             pointsDisplay.innerHTML = points            
//         }
//     }

//     //
//     function unFreakWraiths() {
//         wraiths.forEach(wraith => wraith.isFreaked = false)
//     }


// //WRAITHS!!!
// //Wraith Class
//     class Wraith {
//         constructor(className, startIndex, speed) {
//             this.className = className
//             this.startIndex = startIndex
//             this.currentIndex = startIndex
//             this.speed = speed
//             this.timerId = NaN
//             this.isFreaked = false
//         }
//     }
//     let wraithCurrentIndex = 347
//     squares[wraithCurrentIndex].classList.add('wraith')
// // //Individual Wraith properties
// //     wraiths = [
// //         new Wraith('pete', 347, 250),
// //         new Wraith('josh', 403, 250),
// //         new Wraith('kenny', 352, 500),
// //         new Wraith('johnny', 408, 400)
// //     ]
   
// // //Add Wraiths to the grid via iteration
// //     wraiths.forEach(wraith => {
// //         squares[wraith.currentIndex].classList.add(wraith.className)
// //         squares[wraith.currentIndex].classList.add('wraith');
// //     });

//     // //get coordinates of Wraiths
//     function grabCoordinates(index) {
//         return [index % width, Math.floor(index / width)]
//     }

//   //move 
//   function moveWraith() {

//     const directions =  [-1, +1, +width, -width]
//     let wraithTimerId  = NaN
//     let direction = directions[Math.floor(Math.random() * directions.length)]

//     wraithTimerId = setInterval(function() {
//       if  (!squares[wraithCurrentIndex + direction].classList.contains('wall')) {
//           //remove the ghosts classes
//           squares[wraithCurrentIndex].classList.remove('pete')
//           //move into that space

//           const [peteX, peteY] = grabCoordinates(wraithCurrentIndex)
//           const [pillConsumerX, pillConsumerY] = grabCoordinates(pillConsumerCurrentIndex)
//           const [peteNextX, peteNextY] = grabCoordinates(wraithCurrentIndex + direction)

//           function isXCoordCloser() {
//             if ((peteNextX - pillConsumerX) > (peteX - pillConsumerX)){
//               return true
//             } else return false
//          }

//           function isYCoordCloser() {
//             if ((peteNextY - pillConsumerY) > (peteY - pillConsumerY)) {
//               return true
//             } else return false
//           }
//           if (isXCoordCloser() || isYCoordCloser()) {
//             wraithCurrentIndex += direction
//             squares[wraithCurrentIndex].classList.add('pete')

//           } else {
//             squares[wraithCurrentIndex].classList.add('pete')
//             direction = directions[Math.floor(Math.random() * directions.length)]
//         }
//         squares[wraithCurrentIndex].classList.add('pete')
//         } else direction = directions[Math.floor(Math.random() * directions.length)]

//       if(squares[wraithCurrentIndex].classList.contains('pac-man')) clearInterval(wraithTimerId)

//     }, 300)
//   }


//   moveWraith()


//     //end game conditions check
//     function checkEndGame() {
//         //if there's a wraith in the pill consumers space 
//         if (squares[pillConsumerCurrentIndex].classList.contains('wraith')
//         //and the wraith is not freaked
//         && !squares[pillConsumerCurrentIndex].classList.contains('freaked-wraith')) {
//             //Stop wraith movement
//             wraiths.forEach(wraith => clearInterval(wraith.timerId))
//             //Disable pill consumer movement function
//             document.removeEventListener('keyup', movePillConsumer)
//             //Pause a moment and alert the game over
//             setTimeout(function(){alert('Everything Dies')
//             }, 666);
//         }
//     }

//     function checkWinGame() {
//         if (points === 274) {
//             wraiths.forEach(wraith => clearInterval(wraith.timerId))
//             document.removeEventListener('keyup', movePillConsumer) 
//             setTimeout(function(){alert('You live')
//             }, 666);
//         }
//     }

// })



