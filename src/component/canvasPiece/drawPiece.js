import {useRef} from "react" ;
import { PieceArrayRed } from "../Pieces/piecesArray";

export function useOnDrawPiece(cellSize,idk){

   const canvasRef = useRef(null);
   
   let pieceArray;
   

   function setCanvasRef(ref){
      if(!ref ) return;
      canvasRef.current = ref;
      if(idk){
      PieceArrayRed.map((p)=>{if(p.id === idk){pieceArray = p.piece}})
      drawBoard(pieceArray);
      console.log(pieceArray)}
   }
   


   function drawBoard(field){
      const ctx = canvasRef.current.getContext('2d');// draw the board evry time the piece is down

      field.forEach((row) => {
         row.forEach((cell) => {
            let color ;
      
            switch(cell) {
               case "r":
                  color = "red";
                 break;
               case "yr":
                  color = "rgb(241, 143, 143)";
                 break;
               default:
                  color = "gainsboro"
            }

            ctx.fillStyle = color
            ctx.strokeStyle = '#555'
            ctx.lineWidth =1

            const args = [0, 0,cellSize,cellSize]
        
            ctx.fillRect(...args)
            ctx.strokeRect(...args)
        })
      })
  }


   return setCanvasRef;
}