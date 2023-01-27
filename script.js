// function checkerBoard() {
for (let i = 0; i < 81; i++) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16) // variable to compute hexadecimal color code
    let tile = document.createElement('div')
    tile.classList.add("tile")
    tile.style.width = "11.1%"
    tile.style.paddingBottom = "11.1%"
    tile.style.float = "left"
    tile.style.backgroundColor = '#'+randomColor;
    
    // if (i%2 === 0) {                         // coding for black and red squares
    //     tile.style.backgroundColor = 'black'
    // } else {
    //     tile.style.backgroundColor = 'red'
    // }
    console.log(tile)  //<---for testing purposes
    document.body.appendChild(tile)
}




// }

// checkerBoard()

// 