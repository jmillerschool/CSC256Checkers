// set up a 2d ray that mirrors the game board and defines where the pieces go
let arrPieces = [
    [null, "d", null, "d",null, "d", null, "d", null, "d"],
    ["d", null, "d",null, "d", null, "d", null, "d" , null],
    [null, "d", null, "d",null, "d", null, "d", null, "d"],
    ["d", null, "d",null, "d", null, "d", null, "d" , null],
    [null, null, null, null ,null, null, null, null, null, null], // empty row
    [null, null, null, null ,null, null, null, null, null, null], // empty row
    [null, "l", null, "l",null, "l", null, "l", null, "l"],
    ["l", null, "l",null, "l", null, "l", null, "l" , null],
    [null, "l", null, "l",null, "l", null, "l", null, "l"],
    ["l", null, "l",null, "l", null, "l", null, "l" , null],
]

// set up the shortcut for the checkerboard div
const divCheckerboard = document.getElementById("divCheckerboard");

// set up a nested loop to create the checkerboard
// outer loop for the rows
for (let i = 0; i < 10; i++) 
{
    // inner loop for the columns
    for (let j = 0; j < 10; j++) 
    {
        // create a new div for each square
        let checkerSquare = document.createElement("div");

        //set the class name to configure the square div
        checkerSquare.classList.add("checkerSquare");

        // add an id attribute for the square
        checkerSquare.setAttribute("id", "div" + i + j);

        // alternate the color of the squares based on the row and column index
        if ((i + j) % 2 == 0)
        {
            checkerSquare.classList.add("checkerSquareBackColor")            
        } 
        else
        {
            // add event listener to square to call movePiece when it is clicked
            checkerSquare.addEventListener('click', movePiece)
        }       
        
        // add the square to the chessboard div
        divCheckerboard.appendChild(checkerSquare);

        // check to see if we need to add a piece
        if (arrPieces[i][j])
        {
            createPiece("piece" + i + j, "checkerPiece-" + arrPieces[i][j], checkerSquare);
        }
    }
}         

// function that wll create piece
function createPiece(pieceId, pieceClass, targetSquare)
{
    // create a div for the piece
    let divPiece = document.createElement("div")

    // set the id attribute
    divPiece.setAttribute("id", pieceId);

    // add the css class 
    divPiece.classList.add("checkerPiece");
    divPiece.classList.add(pieceClass);

    // event listener
    divPiece.addEventListener("click", storePieceId);

    // add the piece to the squares
    targetSquare.appendChild(divPiece);
}

// function to move the piece
function movePiece(event)
{
    // set up a var to track the target square
    let newSquareId = event.target.id;

    // just want the number of the square or piece
    newSquareId = newSquareId.replace("div", "").replace("piece", "");

    //short cut to span
    let spnSecret =document.getElementById("spnSecret");

    // get the value from the span 
    let selPieceId = spnSecret.dataset.value;

    if (selPieceId != newSquareId && selPieceId != "undefined" && selPieceId != null)
    {
        // set up shortcut to the original div
        let sourceDiv = document.getElementById("div" + selPieceId);

        // shortcut to the selected piece
        let selPieceDiv = document.getElementById("piece" + selPieceId);

        // get the css class of the seclected piece
        let selPieceCSS = selPieceDiv.classList[1];

        //remove the old piece from the square
        sourceDiv.removeChild(selPieceDiv);

        // create shortcut to target square 
        let targetDiv = document.getElementById("div" + newSquareId);

        // call the create piece function to add a create new piece
        createPiece("piece" + newSquareId, selPieceCSS, targetDiv);

        //reset the value of the secret span
        spnSecret.dataset.value = "";
    }
}

// fucntion to store select id
function storePieceId(event)
{
    //short cut to span
    let spnSecret =document.getElementById("spnSecret");

    // set up a var to track the target square
    let newSquareId = event.target.id;

    // get rid of piece or div
    newSquareId = newSquareId.replace("piece", "").replace("div" , "");

    // save the # in the span
    spnSecret.dataset.value = newSquareId;
}