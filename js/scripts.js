//Back End//

// GAME BOARD
function Board() {
  this.tilesArr = [];
}
Board.prototype.createBoard = function() {

}
Board.prototype.updateBoard = function() {

}

function Tile() {
  this.color = color;
}
Tile.prototype.changeColor = function() {

}

// function
// board
//   tiles
//   tiles states
//   tile colors
//   function() create board
//   function() update tile placement
//   function() check for legal placement
//   function() check for win

// player
//   pieces X or O
//   wins
//
// game
//   score
//   player turn


//Front End//
$(document).ready(function() {

   // Create first board
   var newBoard = new Board();

  // $("#newGame").click(function() {
  //   var newBoard = new Board();
  //   $(".tileCol").show();
  // });

  $("boardArea").click(function() {
    // create board
  });

});
