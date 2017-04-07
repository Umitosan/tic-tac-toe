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

// Master WINNER checking function
Board.prototype.winnerChickenDinner = function(tileIndex) {
  var winningPlayer = "";
  winningPlayer = this.checkHoriz(tileIndex, winningPlayer);
  winningPlayer = this.checkVert(tileIndex, winningPlayer);
  winningPlayer = this.checkDiagonAlley(tileIndex, winningPlayer);
  return winningPlayer;
}

// check HORIZONTALLY for winner
Board.prototype.checkHoriz = function(tmpIndex, winningPlayerH) {
  var tmpPiece = this.tilesArr[tmpIndex].piece;
  if ((this.tilesArr[0].piece === tmpPiece) && (this.tilesArr[1].piece === tmpPiece) && (this.tilesArr[2].piece === tmpPiece)) {
    winningPlayerH = this.tilesArr[tmpIndex].piece;
  } else if ((this.tilesArr[3].piece === tmpPiece) && (this.tilesArr[4].piece === tmpPiece) && (this.tilesArr[5].piece === tmpPiece)) {
    winningPlayerH = this.tilesArr[tmpIndex].piece;
  } else if ((this.tilesArr[6].piece === tmpPiece) && (this.tilesArr[7].piece === tmpPiece) && (this.tilesArr[8].piece === tmpPiece)) {
    winningPlayerH = this.tilesArr[tmpIndex].piece;
  } else {
    console.log("soy un perdedor");
  }
  return winningPlayerH;
}

// check VERTICALLY for winner
Board.prototype.checkVert = function (tmpIndex, winningPlayerV) {
  var tmpPiece = this.tilesArr[tmpIndex].piece;
  if ((this.tilesArr[0].piece === tmpPiece) && (this.tilesArr[3].piece === tmpPiece) && (this.tilesArr[6].piece === tmpPiece)) {
    winningPlayerV = this.tilesArr[tmpIndex].piece;
  } else if ((this.tilesArr[1].piece === tmpPiece) && (this.tilesArr[4].piece === tmpPiece) && (this.tilesArr[7].piece === tmpPiece)) {
    winningPlayerV = this.tilesArr[tmpIndex].piece;
  } else if ((this.tilesArr[2].piece === tmpPiece) && (this.tilesArr[5].piece === tmpPiece) && (this.tilesArr[8].piece === tmpPiece)) {
    winningPlayerV = this.tilesArr[tmpIndex].piece;
  } else {
    console.log("soy un perdedor");
  }
  return winningPlayerV;
}

// check DIAGON_ALLEY for winner
Board.prototype.checkDiagonAlley = function (tmpIndex, winningPlayerD) {
  var tmpPiece = this.tilesArr[tmpIndex].piece;
  if ((this.tilesArr[0].piece === tmpPiece) && (this.tilesArr[4].piece === tmpPiece) && (this.tilesArr[8].piece === tmpPiece)) {
    winningPlayerD = this.tilesArr[tmpIndex].piece;
  } else if ((this.tilesArr[6].piece === tmpPiece) && (this.tilesArr[4].piece === tmpPiece) && (this.tilesArr[2].piece === tmpPiece)) {
    winningPlayerD = this.tilesArr[tmpIndex].piece;
  } else {
    console.log("soy un perdedor");
  }
  return winningPlayerD;
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
      console.log("W T H?!");
    }
  } else {
    playerPiece = tmpBoard.tilesArr[clickedIndex].piece;
  }
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
  return tmpBool;
}  // END isMoveLegal function

// tie checker
var isTie = function(tmpBoard1) {
  var isNine = false;
  var tmpCount = 0;
  tmpBoard1.tilesArr.forEach(function(tmpTile) {
    // console.log("tmpTile: " , tmpTile);
    if (tmpTile.piece === "") {
      tmpCount += 1;
    };
  });
  if (tmpCount === 0) {
    isNine = true;
  } else {
    isNine = false;
  }
  return isNine;
}  // end tie checker


//Front End//
$(document).ready(function() {

  // global
  var myBoard = createBoard();
  var firstPlayer;
  var secondPlayer;
  var counterMain;

  // CLICK LETS PLAY
  $("#btnPlay").click(function(){
    firstPlayer = $("#player-one-name").val();
    secondPlayer = $("#player-two-name").val();
    $("#player-x").text(firstPlayer.toUpperCase());
    $("#player-o").text(secondPlayer.toUpperCase());
    $(".user-input").hide();
    $(".players-labels").fadeIn(2000);
    $(".center-board").fadeIn(1000);
    $(".players-labels img").addClass("imgFlip");
  });

  // CLICK TILE
  $("div .tile").click(function() {
    let thisTileIndex = $(this).attr("value");
    $(this).find("span").text(placePiece(myBoard , thisTileIndex));

    // check for winner char
    let finalWinner = myBoard.winnerChickenDinner(thisTileIndex);

    // check for winner or tie
    if (isTie(myBoard) === true) {
      console.log("the game is a tie");
      $(".players-labels").hide();
      $(".center-board").hide();
      $(".winner-area").show();
      $(".winner-area h3").hide();
      $("#player-winner").text("Game is a tie");
    } else if ((finalWinner !== "") && (counterMain !== 9)) {
      if (finalWinner === "X") {
        finalWinner = firstPlayer;
      } else if (finalWinner === "O") {
        finalWinner = secondPlayer;
      } else {
        console.log("W T H?!");
      }
      $("#player-winner").text(finalWinner.toUpperCase());
      $(".players-labels").hide();
      $(".center-board").hide();
      $(".winner-area").show();
    }

    // Update flipper
    if (myBoard.playerTurn === -1) {
      $(".players-labels img").addClass("imgFlip");
    } else if (myBoard.playerTurn === 1) {
      $(".players-labels img").removeClass("imgFlip");
    } else {
      console.log("W T H?!");
    }

    // Hilight selected tile
    $(".tileCol .tile").removeClass("green-back");
    $(".tileCol .tile").removeClass("white-back");
    $(this).addClass("green-back");
  });

  $("#btnReset").click(function() {
    location.reload();
  });

});
