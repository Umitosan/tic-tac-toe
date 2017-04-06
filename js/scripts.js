//Back End

// TILE OBJECT
function Tile() {
  this.piece = "";
}

// GAME BOARD OBJECT
function Board() {
  this.tilesArr = [];
  this.playerTurn = -1;
}

Board.prototype.winnerChickenDinner = function(tmpBoard) {
  this.checkHoriz(tmpBoard);
  this.checkVert(tmpBoard);
  this.checkDiagonAlley(tmpBoard);
}

// check rows for win, works for X and O
Board.prototype.checkHoriz = function(tmpIndex) {
  var tmpPiece = this.tilesArr[tmpIndex].piece;
  if ((this.tilesArr[0].piece === tmpPiece) && (this.tilesArr[1].piece === tmpPiece) && (this.tilesArr[2].piece === tmpPiece)) {
    console.log("winner");
  } else if ((this.tilesArr[3].piece === tmpPiece) && (this.tilesArr[4].piece === tmpPiece) && (this.tilesArr[5].piece === tmpPiece)) {
    console.log("winner");
  } else if ((this.tilesArr[6].piece === tmpPiece) && (this.tilesArr[7].piece === tmpPiece) && (this.tilesArr[8].piece === tmpPiece)) {
    console.log("winner");
  } else {
    console.log("soy un perdedor");
  }
}

Board.prototype.checkVert = function (tmpIndex) {
  var tmpPiece = this.tilesArr[tmpIndex].piece;
  if ((this.tilesArr[0].piece === tmpPiece) && (this.tilesArr[3].piece === tmpPiece) && (this.tilesArr[6].piece === tmpPiece)) {
    console.log("winner");
  } else if ((this.tilesArr[1].piece === tmpPiece) && (this.tilesArr[4].piece === tmpPiece) && (this.tilesArr[7].piece === tmpPiece)) {
    console.log("winner");
  } else if ((this.tilesArr[2].piece === tmpPiece) && (this.tilesArr[5].piece === tmpPiece) && (this.tilesArr[8].piece === tmpPiece)) {
    console.log("winner");
  } else {
    console.log("soy un perdedor");
  }
}

Board.prototype.checkDiagonAlley = function (tmpIndex) {
  var tmpPiece = this.tilesArr[tmpIndex].piece;
  if ((this.tilesArr[0].piece === tmpPiece) && (this.tilesArr[4].piece === tmpPiece) && (this.tilesArr[4].piece === tmpPiece)) {
    console.log("winner");
  } else if ((this.tilesArr[6].piece === tmpPiece) && (this.tilesArr[4].piece === tmpPiece) && (this.tilesArr[2].piece === tmpPiece)) {
    console.log("winner");
  } else {
    console.log("soy un perdedor");
  }
}

// create board object and fill it with tile objects
var createBoard = function() {
  var newBoard = new Board();
    for (i = 0 ; i < 9 ; i++) {
      let tmpTile = new Tile();
      newBoard.tilesArr.push(tmpTile);
    }
  console.log(newBoard);
  return newBoard;
}


// isMoveLegal? place piece on board, and store piece in tile object
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
} // END placePiece function

// check if a move is legal
var isMoveLegal = function(tmpTile) {
  var tmpBool;
  if (tmpTile.piece === "") {
    tmpBool = true;
  } else {
    tmpBool =  false;
  }
  console.log("islegalmove? tmpBool: " , tmpBool);
  return tmpBool;
}  // END isMoveLegal function


//Front End//
$(document).ready(function() {
  // Create first board
  var myBoard = createBoard();
  // tile select indicator
  $("div .tile").click(function() {
    let thisTileIndex = $(this).attr("value");
    $(this).find("span").text(placePiece(myBoard , thisTileIndex));
    // check for a winner
    myBoard.winnerChickenDinner(thisTileIndex);
    // indicate selected tile
    $(".tileCol .tile").removeClass("green-back");
    $(".tileCol .tile").removeClass("white-back");
    $(this).addClass("green-back");
  });
});
