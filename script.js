// function checkerBoard() {
let boxObj = document.createElement('div');  // this coding before the for loop creates a box and sets its
boxObj.classList.add('box');                 // z-index higher than the checkerboard patter underneath
boxObj.style.zIndex = "1";                   // it also has a linear-gradient added to change the opacity
boxObj.style.position = "absolute";
boxObj.style.width = "100%";
boxObj.style.paddingBottom = "100%";
boxObj.style.float = "left";
boxObj.style.backgroundColor = "orange";
boxObj.style.background = 'linear-gradient(to top, transparent, orange)';
document.body.appendChild(boxObj);
for (let i = 0; i < 81; i++) {
    //let randomColor = Math.floor(Math.random()*16777215).toString(16) // variable to compute hexadecimal color code
    let tile = document.createElement('div');
    tile.classList.add("tile");
    tile.style.zIndex = "0";
    tile.style.position = "relative";
    tile.style.width = "11.1%";
    tile.style.paddingBottom = "11.1%";
    tile.style.float = "left";
    if (i%2 === 0) {       
            tile.style.backgroundColor = 'orange';
        } else {
            tile.style.backgroundColor = 'blue';
        }
    


    // tile.style.backgroundColor = '#'+randomColor;            // coding for random colors
   
    
    // if (i%2 === 0) {                         // coding for black and red squares
    //     tile.style.backgroundColor = 'black'
    // } else {
    //     tile.style.backgroundColor = 'red'
    // }
    console.log(tile);  //<---for testing purposes
    document.body.appendChild(tile);
}




// }

// checkerBoard()

// 