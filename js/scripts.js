//Back End//

// GAME BOARD
function Board() {
  this.tilesArr = [];
  this.playerTurn = -1;
}

var createBoard = function() {
  var newBoard = new Board();
    for (i = 0 ; i < 9 ; i++) {
      let tmpTile = new Tile();
      newBoard.tilesArr.push(tmpTile);
    }
  console.log(newBoard);
  return newBoard;
}

// Board.prototype.updateBoard = function() {
//
// }

function Tile() {
  this.piece = "";
}

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
   var myBoard = createBoard();

  // tile select indicator
  $("div .tile").click(function() {

    myBoard.playerTurn *= -1;
    $(this).find("span").text(placePiece(myBoard.playerTurn));

    $(".tileCol .tile").removeClass("green-back");
    $(".tileCol .tile").removeClass("white-back");
    $(this).addClass("green-back");
  });

});
