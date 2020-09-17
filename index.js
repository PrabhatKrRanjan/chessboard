var menu = document.getElementById("menu");
menu.style.display = "none";
var selectedCell;

function showContextMenu(e) {
  event.preventDefault();
  selectedCell = e;
  menu.style.display = "block";
  menu.style.top = event.pageY + "px";
  menu.style.left = event.pageX + "px";
}

function insertPieces(e) {
  let existingPiece = checkPiecePresent(selectedCell);
  selectedCell.innerHTML = null;
  var mohara = e.innerHTML;
  var ele = document.createElement("div");
  ele.setAttribute("class", "chessPiecesSize");
  ele.setAttribute("piecesname", e.id);
  ele.innerHTML = mohara;
  selectedCell.appendChild(ele);
  piceCount(e.id);
  modifyPiece(existingPiece);
}

window.addEventListener("click", () => {
  menu.style.display = "none";
});

var piecesLeft = {
  whiteKing: 1,
  whiteQueen: 1,
  whiteRook: 2,
  whiteKnight: 2,
  whiteBishop: 2,
  whitePawn: 8,
  blackKing: 1,
  blackQueen: 1,
  blackRook: 2,
  blackKnight: 2,
  blackBishop: 2,
  blackPawn: 8,
};

function piceCount(playerName) {
  switch (playerName) {
    case "whiteKing":
      piecesLeft.whiteKing--;
      if (piecesLeft.whiteKing == 0) {
        document.getElementById(playerName).style.visibility = "hidden";
      }
      checkBothKing();
      break;

    case "whiteQueen":
      piecesLeft.whiteQueen--;
      if (piecesLeft.whiteQueen == 0) {
        document.getElementById(playerName).style.visibility = "hidden";
      }
      checkBothQueen();
      break;

    case "whiteRook":
      piecesLeft.whiteRook--;
      if (piecesLeft.whiteRook == 0) {
        document.getElementById(playerName).style.visibility = "hidden";
      }
      checkBothRook();
      break;

    case "whiteKnight":
      piecesLeft.whiteKnight--;
      if (piecesLeft.whiteKnight == 0) {
        document.getElementById(playerName).style.visibility = "hidden";
      }
      checkBothKnight();
      break;

    case "whiteBishop":
      piecesLeft.whiteBishop--;
      if (piecesLeft.whiteBishop == 0) {
        document.getElementById(playerName).style.visibility = "hidden";
      }
      checkBothBishop();
      break;

    case "whitePawn":
      piecesLeft.whitePawn--;
      if (piecesLeft.whitePawn == 0) {
        document.getElementById(playerName).style.visibility = "hidden";
      }
      checkBothPawn();
      break;

    case "blackKing":
      piecesLeft.blackKing--;
      if (piecesLeft.blackKing == 0) {
        document.getElementById(playerName).style.visibility = "hidden";
      }
      checkBothKing();
      break;

    case "blackQueen":
      piecesLeft.blackQueen--;
      if (piecesLeft.blackQueen == 0) {
        document.getElementById(playerName).style.visibility = "hidden";
      }
      checkBothQueen();
      break;

    case "blackRook":
      piecesLeft.blackRook--;
      if (piecesLeft.blackRook == 0) {
        document.getElementById(playerName).style.visibility = "hidden";
      }
      checkBothRook();
      break;

    case "blackKnight":
      piecesLeft.blackKnight--;
      if (piecesLeft.blackKnight == 0) {
        document.getElementById(playerName).style.visibility = "hidden";
      }
      checkBothKnight();
      break;

    case "blackBishop":
      piecesLeft.blackBishop--;
      if (piecesLeft.blackBishop == 0) {
        document.getElementById(playerName).style.visibility = "hidden";
      }
      checkBothBishop();
      break;

    case "blackPawn":
      piecesLeft.blackPawn--;
      if (piecesLeft.blackPawn == 0) {
        document.getElementById(playerName).style.visibility = "hidden";
      }
      checkBothPawn();
      break;
    default:
      break;
  }
}

function checkBothKing() {
  if (piecesLeft.whiteKing == 0 && piecesLeft.blackKing == 0)
    document.getElementById("listKing").style.display = "none";
  else document.getElementById("listKing").style.display = "block";
}

function checkBothQueen() {
  if (piecesLeft.whiteQueen == 0 && piecesLeft.blackQueen == 0)
    document.getElementById("listQween").style.display = "none";
  else document.getElementById("listQween").style.display = "block";
}

function checkBothRook() {
  if (piecesLeft.whiteRook == 0 && piecesLeft.blackRook == 0)
    document.getElementById("listRook").style.display = "none";
  else document.getElementById("listRook").style.display = "block";
}

function checkBothKnight() {
  if (piecesLeft.whiteKnight == 0 && piecesLeft.blackKnight == 0)
    document.getElementById("listKnight").style.display = "none";
  else document.getElementById("listKnight").style.display = "block";
}

function checkBothBishop() {
  if (piecesLeft.whiteBishop == 0 && piecesLeft.blackBishop == 0)
    document.getElementById("listBishop").style.display = "none";
  else document.getElementById("listBishop").style.display = "block";
}

function checkBothPawn() {
  if (piecesLeft.whitePawn == 0 && piecesLeft.blackPawn == 0)
    document.getElementById("listPawn").style.display = "none";
  else document.getElementById("listPawn").style.display = "block";
}

function checkPiecePresent(e) {
  if (e.innerHTML != "") {
    let pieceToIncrease = e
      .getElementsByTagName("div")[0]
      .getAttribute("piecesname");
    return pieceToIncrease;
  }
}

function modifyPiece(pieceToIncrease) {
  switch (pieceToIncrease) {
    case "whiteKing":
      piecesLeft.whiteKing++;
      document.getElementById(pieceToIncrease).style.visibility = "visible";
      checkBothKing();
      break;

    case "whiteQueen":
      piecesLeft.whiteQueen++;
      document.getElementById(pieceToIncrease).style.visibility = "visible";
      checkBothQueen();
      break;

    case "whiteRook":
      piecesLeft.whiteRook++;
      document.getElementById(pieceToIncrease).style.visibility = "visible";
      checkBothRook();
      break;

    case "whiteKnight":
      piecesLeft.whiteKnight++;
      document.getElementById(pieceToIncrease).style.visibility = "visible";
      checkBothKnight();
      break;

    case "whiteBishop":
      piecesLeft.whiteBishop++;
      document.getElementById(pieceToIncrease).style.visibility = "visible";
      checkBothBishop();
      break;

    case "whitePawn":
      piecesLeft.whitePawn++;
      document.getElementById(pieceToIncrease).style.visibility = "visible";
      checkBothPawn();
      break;

    case "blackKing":
      piecesLeft.blackKing++;
      document.getElementById(pieceToIncrease).style.visibility = "visible";
      checkBothKing();
      break;

    case "blackQueen":
      piecesLeft.blackQueen++;
      document.getElementById(pieceToIncrease).style.visibility = "visible";
      checkBothQueen();
      break;

    case "blackRook":
      piecesLeft.blackRook++;
      document.getElementById(pieceToIncrease).style.visibility = "visible";
      checkBothRook();
      break;

    case "blackKnight":
      piecesLeft.blackKnight++;
      document.getElementById(pieceToIncrease).style.visibility = "visible";
      checkBothKnight();
      break;

    case "blackBishop":
      piecesLeft.blackBishop++;
      document.getElementById(pieceToIncrease).style.visibility = "visible";
      checkBothBishop();
      break;

    case "blackPawn":
      piecesLeft.blackPawn++;
      document.getElementById(pieceToIncrease).style.visibility = "visible";
      checkBothPawn();
      break;

    default:
      break;
  }
}

function checkPosition() {
  var piecesPosition = document.getElementById("container").children;

  let chessPosition = [
    [0, "blackRook"],
    [1, "blackKnight"],
    [2, "blackBishop"],
    [3, "blackKing"],
    [4, "blackQueen"],
    [5, "blackBishop"],
    [6, "blackKnight"],
    [7, "blackRook"],
    [8, "blackPawn"],
    [9, "blackPawn"],
    [10, "blackPawn"],
    [11, "blackPawn"],
    [12, "blackPawn"],
    [13, "blackPawn"],
    [14, "blackPawn"],
    [15, "blackPawn"],
    [48, "whitePawn"],
    [49, "whitePawn"],
    [50, "whitePawn"],
    [51, "whitePawn"],
    [52, "whitePawn"],
    [53, "whitePawn"],
    [54, "whitePawn"],
    [55, "whitePawn"],
    [56, "whiteRook"],
    [57, "whiteKnight"],
    [58, "whiteBishop"],
    [59, "whiteKing"],
    [60, "whiteQueen"],
    [61, "whiteBishop"],
    [62, "whiteKnight"],
    [63, "whiteRook"],
  ];
  let piecesCollected = [];

  for (let i = 0; i < piecesPosition.length; i++) {
    let p = piecesPosition[i].getElementsByTagName("div")[0];
    if (p != undefined) {
      let elementPresent = piecesPosition[i]
        .getElementsByTagName("div")[0]
        .getAttribute("piecesname");
      piecesCollected.push([i, elementPresent]);
    }
  }

  if (piecesCollected.length < 32) {
    alert("Please Put All The Pieces");
  } else {
    matchChessPices(chessPosition, piecesCollected);
  }
}

function matchChessPices(chessPosition, piecesCollected) {
  let t = [];
  let u = [];
  for (let i = 0; i < 32; i++) {
    if (
      chessPosition[i][0] != piecesCollected[i][0] ||
      chessPosition[i][1] != piecesCollected[i][1]
    ) {
      t.push(piecesCollected[i][0]);
      u.push(chessPosition[i][1].toLowerCase());
    }
  }
  showStats(t, u);
}

function showStats(notMatchedPositions, notMatchedPieces) {

  let result = document.getElementById("result");
  result.setAttribute("class", "result");
  if (notMatchedPieces.length == 0) {
    result.innerHTML = "Hurray!!! You Nailed it. !!!";
  } else {
    result.innerHTML =
      notMatchedPieces.length +
      " pieces are not Matched and Names are " +
      notMatchedPieces.join(" ");
  }

  let piecesPosition = document.getElementById("container").children;
  for (let i = 0; i < notMatchedPositions.length; i++) {
    piecesPosition[notMatchedPositions[i]].getElementsByTagName("div")[0].setAttribute("class", "danger");
  }
}


function removeAllPieces() {
    let ele = document.getElementById("result")
    ele.innerHTML = "";
    ele.removeAttribute("class",'result')
    let piecesPosition = document.getElementById("container").children;
    for (let i = 0; i < piecesPosition.length; i++) {
        let p = piecesPosition[i].getElementsByTagName("div")[0];
        if (p != undefined) {
            let ele = piecesPosition[i]
                .getElementsByTagName("div")[0]
                .getAttribute("piecesname");
                if(ele != undefined){
                    modifyPiece(ele)
                }
        }
        piecesPosition[i].innerHTML = "";
    }
}