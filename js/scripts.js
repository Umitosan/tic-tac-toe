//Back End//

// GAME BOARD
function Board() {
  this.tilesArr = [];
  this.playerTurn = -1;
}

// Board.prototype.createBoard = function() {
//
// }
// Board.prototype.updateBoard = function() {
//
// }

// function Tile() {
//   this.color = color;
// }
// Tile.prototype.changeColor = function() {
//
// }


var placePiece = function(myToggle) {
  let playerPiece = "";
  if (myToggle === 1) {
    playerPiece = "X";
  } else if (myToggle === -1) {
    playerPiece = "O";
  } else {
    console.log("somehting wrong")
  }
  return playerPiece;
}


//Front End//
$(document).ready(function() {

   // Create first board
   var newBoard = new Board();


  // tile select indicator
  $("div .tile").click(function() {

    newBoard.playerTurn *= -1;
    $(this).find("span").text(placePiece(newBoard.playerTurn));

    $(".tileCol .tile").removeClass("green-back");
    $(".tileCol .tile").removeClass("white-back");
    $(this).addClass("green-back");
  });

});
