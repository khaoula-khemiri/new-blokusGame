import { PieceArrayRed,PieceArrayGreen } from "../Pieces/piecesArray";
import { useOnDrawPiece } from "./drawPiece";

const CanvasPiece = ({width,height,idk}) => {
    const cellSize = 15
    const setCanvasRefPiece = useOnDrawPiece(cellSize ,idk);
  
    return (
     <canvas id = "canvas"
        width ={width} 
        height = {height}
        ref = {setCanvasRefPiece}/>
      );
  }
  export default CanvasPiece;
  
