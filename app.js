document.addEventListener('DOMContentLoaded', () => {
    const points = document.getElementById('points');
    const grid = document.querySelector('.grid');
    const width = 28;

    //Layout key:
        // 0 - dots
        // 1 - wall
        // 2 - ghost-house
        // 3 - POWERPILL
        // 4 - empty

    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
      ]


const squares = [];

function createMap() {
    //loop over the entire length of the layout
    for (let i = 0; i < layout.length; i++) {
    //create a div for each element
        const square = document.createElement('div');
    //add the divs - (squares) to the grid
        grid.appendChild(square);
    //add the dives to a new array
        squares.push(square);
    //Use the layout to populate the board with the css styling
        //Layout key:
        // 0 - .dots
        // 1 - .wall
        // 2 - .ghost-house
        // 3 - .powerpill
        // 4 - .empty
        if (layout[i] === 0) {
            squares[i].classList.add('dots');
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall');
        } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-house');
        } else if (layout[i] === 3) {
            squares[i].classList.add('powerpill');
        }
    }
}


createMap()

//Setup pill consumers starting position in the array
let pillConsumerCurrentIndex = 489;
//Add the css styling to the array position index
squares[pillConsumerCurrentIndex].classList.add('pill-consumer');

//Movement
function movePillConsumer(e) {
    //remove PCCI from the current grid section
    squares[pillConsumerCurrentIndex].classList.remove('pill-consumer');
    //use a switch to decide which new index to move to
    console.log(e.keyCode);
    switch(e.keyCode) {
        
        //left - keyCode 37
        case 37:
            //check if the current index location of pillCons is divisible to 0 by the width 28
            //AND doesn't have a class of 'wall' or 'ghost-house'
            if (pillConsumerCurrentIndex % width !== 0 && !squares[pillConsumerCurrentIndex -1].classList.contains('wall') 
            && !squares[pillConsumerCurrentIndex -1].classList.contains('ghost-house'))
            pillConsumerCurrentIndex -= 1;
            break;
        //up - keyCode 38
        case 38:
            //check if the current index location of pillCons minus width is less than or equal to 0
            //AND doesn't have a class of 'wall' or 'ghost-house'
            if (pillConsumerCurrentIndex - width >= 0 && !squares[pillConsumerCurrentIndex - width].classList.contains('wall')
            && !squares[pillConsumerCurrentIndex - width].classList.contains('ghost-house'))
            pillConsumerCurrentIndex -= width;
            break;
        //right - keyCode 39
        case 39:
            //check if the current index location of pillCons is divisible by or less than the width minus one
            //AND doesn't have a class of 'wall' or 'ghost-house'
            if (pillConsumerCurrentIndex % width < width -1 && !squares[pillConsumerCurrentIndex +1].classList.contains('wall')
            && !squares[pillConsumerCurrentIndex + 1].classList.contains('ghost-house'))
            pillConsumerCurrentIndex += 1;
            break;
        //down - keyCode 40
        case 40:
            //check if the current index location of pillCons plus width is less than or equal to width X width
            //AND doesn't have a class of 'wall' or 'ghost-house'
            if (pillConsumerCurrentIndex + width < width * width && !squares[pillConsumerCurrentIndex + width].classList.contains('wall')
            && !squares[pillConsumerCurrentIndex + width].classList.contains('ghost-house'))
            pillConsumerCurrentIndex += width;
            break;
    }
    squares[pillConsumerCurrentIndex].classList.add('pill-consumer');

    //pillKill()
    //pillConsume()
    //checkGameOver()
    //checkGameWin()
    }
    
    document.addEventListener('keyup', movePillConsumer)
});

