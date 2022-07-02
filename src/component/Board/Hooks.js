import {useRef} from "react" ;
import { generateField } from "./DrawBoard";
import { PieceArrayRed } from "../Pieces/piecesArray";
import { insertIntoArray } from "./DrawBoard";

export function useOnDraw(board,cellSize,idk){

   const canvasRef = useRef(null);
   let pieceArray;
   let cellColor = "white";
   let isCorrect=false;
   console.log("first here");

   function setCanvasRef(ref){
    if(!ref) return;
    canvasRef.current = ref;
    drawBoard(board);
    initMouseMoveListener();
    initMouseDownListener();
   }
   
   function initMouseMoveListener(){
      window.addEventListener("mousemove", mouseMoveListener);
   }
   
   const mouseMoveListener = (e) =>{
    const point = computePointInCanvas(e.clientX, e.clientY);
    const h = structuredClone(board);
    let is = false;

    PieceArrayRed.map((p)=>{if(p.id === idk){pieceArray = p.piece}});

    if( point.x >= 0 && point.x < 20 && point.y >= 0 && point.y < 20 && idk && point.y+pieceArray.length-3 <= 19 && point.x+pieceArray[0].length-3 <= 19  ){
       cellColor = "gainsboro";
       is = insertIntoArray ( pieceArray, h,point.x,point.y,false);
       drawBoard(h);
       console.log(h);
      }else{ cellColor = "white"; drawBoard(h);}
    
    if(is){ isCorrect = true; }
      
   }



   function initMouseDownListener(){
      window.addEventListener("mousedown", mouseDownListener);
   }



   const mouseDownListener = (e) =>{
      const point = computePointInCanvas(e.clientX, e.clientY);

      if(point.x>=0 && point.x<20 && point.y >=0 && point.y<20 && idk && isCorrect){
       console.log(pieceArray)
       insertIntoArray ( pieceArray, board,point.x,point.y,true);
       drawBoard(board);
       isCorrect=false;
      }
   }



   function computePointInCanvas(clientX ,clientY){

      if(canvasRef.current){
       const boundingRect = canvasRef.current.getBoundingClientRect();
       let x = Math.floor((clientX - boundingRect.left)/cellSize);
       let y = Math.floor((clientY - boundingRect.top)/cellSize);

       //console.log(x,y)
       return {x,y}
      }else{return null;}
   }


   function drawBoard(field){
      const ctx = canvasRef.current.getContext('2d');// draw the board evry time the piece is down
      field.forEach((row, rowIndex) => {
         row.forEach((cell, columnIndex) => {
            let color ;
      
            switch(cell) {
               case "r":
                  color = "red";
                 break;
               case "yr":
                  color = "rgb(241, 143, 143)";
                 break;
                 case "g":
                  color = "rgb(39, 205, 39)";
                 break;
               case "yg":
                  color = "rgb(124, 194, 124)";
                 break;
                 case "b":
                  color = "rgb(25, 168, 181)";
                 break;
               case "yb":
                  color = "rgb(80, 169, 177)";
                 break;
                 case "y":
                  color = "rgb(214, 245, 42)";
                 break;
               case "yy":
                  color = "rgb(184, 198, 102)";
                 break;

               default:
                  color = cellColor
            }

            ctx.fillStyle = color
            ctx.strokeStyle = '#555'
            ctx.lineWidth =1

            const args = [columnIndex * cellSize, rowIndex *cellSize,cellSize,cellSize]
        
            ctx.fillRect(...args)
            ctx.strokeRect(...args)
        })
      })
  }

 

 return setCanvasRef;
}