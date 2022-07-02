import Swal from 'sweetalert2'

  const rules ="BLOKUS Game: Blokus is the strategy game for the whole family! Players take turns placing pieces of their chosen color on the board. Each new piece must touch at least one other piece of the same color-but only at the corners! When the board is full, each player counts up the squares in their remaining pieces and the player with the least number of squares wins!";
  
  
  function refreshPage() {
    window.location.reload(false);
  }

  function swalRefresh(){Swal.fire({
    title: 'Are you sure?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   confirmButtonText: 'Yes!'
  }).then((result) => {
  if (result.isConfirmed) { 
   refreshPage();       
}
})}

function swalRules(){Swal.fire({
  title: rules,
  width: 500,
  padding: '3em',
  color: '#716add',
  backdrop: `
  rgba(0,0,123,0.4)
  url("./assests/Ninja_Karate.gif")
  left top
  no-repeat
`})}


function skipTurn (className, setPlayer){
  let hi = document.getElementById(className);
        hi.style.backgroundColor  = 'transparent';
  let pieceArray= className === "redPieceImage" ? "bluePieceImage":
                    className === "bluePieceImage" ?  "yellowPieceImage":
                    className === "yellowPieceImage" ?  "greenPieceImage":
                    "redPieceImage" ;
  setPlayer(pieceArray)

}
  export {swalRefresh, swalRules, skipTurn};

  