//Back End//

// GAME BOARD OBJECT
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

// TILE OBJECT
function Tile() {
  this.piece = "";
}

var placePiece = function(tmpBoard , clickedIndex) {
  let playerPiece = "";
  if (isMoveLegal(tmpBoard.tilesArr[clickedIndex]) === true) {
    tmpBoard.playerTurn *= -1;
    if (tmpBoard.playerTurn === 1) {
      playerPiece = "X"
      tmpBoard.tilesArr[clickedIndex].piece = "X";
    } else if (tmpBoard.playerTurn === -1) {
      playerPiece = "O";
      tmpBoard.tilesArr[clickedIndex].piece = "O";
    } else {
      console.log("somehting wrong")
    }
  } else {
    playerPiece = tmpBoard.tilesArr[clickedIndex].piece;
    console.log("returned same piece, wiggle later");
  }
  console.log("turn: " , tmpBoard.playerTurn);
  return playerPiece;
} // placePiece function end


var isMoveLegal = function(tmpTile) {
  var tmpBool;
  if (tmpTile.piece === "") {
    tmpBool = true;
  } else {
    tmpBool =  false;
  }
  console.log("tmpBool: " , tmpBool);
  return tmpBool;
}


//Front End//
$(document).ready(function() {

   // Create first board
   var myBoard = createBoard();

  // tile select indicator
  $("div .tile").click(function() {

    let thisTileIndex = $(this).attr("value");

    $(this).find("span").text(placePiece(myBoard , thisTileIndex));

    // indicate selected tile
    $(".tileCol .tile").removeClass("green-back");
    $(".tileCol .tile").removeClass("white-back");
    $(this).addClass("green-back");
  });

});
