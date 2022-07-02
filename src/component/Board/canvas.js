import React, { useRef, useEffect, useState } from 'react';
import { useOnDraw } from './Hooks';
import { generateField } from './DrawBoard';
import {PieceArrayRed , PieceArrayBleu, PieceArrayYellow, PieceArrayGreen} from "../Pieces/piecesArray";
import { PieceImageR, PieceImageG, PieceImageB ,PieceImageY} from '../Pieces/piecesArrayImages';
import { insertIntoArray } from "./DrawBoard";

const Canvas = ({width,height,id, setid, setPlayer ,player, setscore, scorePlayer}) => {
  
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const numberOfRows = 20
  const numberOfCols = 20
  const cellSize = width/ numberOfCols
  let piece;
  let arrayOfPieces = player === "redPieceImage"? PieceArrayRed:
                      player === "bluePieceImage"? PieceArrayBleu:
                      player === "yellowPieceImage"? PieceArrayYellow:
                      PieceArrayGreen;
 
  const [board, setBoard] = useState(generateField(numberOfRows,numberOfCols));
  const [iscorrectPlace, setiscorrectPlace] = useState(false);

  



  useEffect(() =>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    drawBoard(board, "white" ,player);
    console.log(board);
  },[board]);

  const draw = (e) =>{
    arrayOfPieces.map((p)=>{if(p.id === id){piece = p.piece}});
    if(piece){
  
     const h = structuredClone(board);
     const point = computePointInCanvas(e.clientX, e.clientY);
     
       insertIntoArray (piece, h, point.x, point.y,false, player);
       drawBoard(h,"gainsboro" , player);
      
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

  const verifyPlacement = (e) =>{
    let is = false;
    let score;
    arrayOfPieces.map((p)=>{if(p.id === id){piece = p.piece; score= p.numSquares}});
   
    if(piece){
     
      const point = computePointInCanvas(e.clientX, e.clientY);
      let newBoard = structuredClone(board);
      console.log(point)
      is =insertIntoArray (piece, newBoard, point.x, point.y,true , player);
      
     if(is){
       setscore(score + scorePlayer);
       document.getElementById(id).style.visibility = "hidden";
        setBoard(newBoard);
        setid(null);
        setiscorrectPlace(false);
        let hi = document.getElementById(player);
        hi.style.backgroundColor  = 'transparent';
        switch(player) {
          case "redPieceImage":
             setPlayer("bluePieceImage");
            break;
          case "bluePieceImage":
            setPlayer("yellowPieceImage");
            break;
            case "yellowPieceImage":
              setPlayer("greenPieceImage");
            break;
          default:
            setPlayer("redPieceImage");}
     }
    }
  }


  const mouseLeave = ()  =>{
    drawBoard(board, "white", player)
  }

  function drawBoard(field, boardColor, player){
    const ctx = canvasRef.current.getContext('2d');// draw the board evry time the piece is down
    field.forEach((row, rowIndex) => {
       row.forEach((cell, columnIndex) => {
          let color ;
    
          switch(cell) {
             case "r":
                color = "red";
               break;
             case "yr":
                color = player ==="redPieceImage"? "rgb(241, 143, 143)":boardColor;
               break;
               case "g":
                color = "rgb(39, 205, 39)";
               break;
             case "yg":
                color = player ==="greenPieceImage"?"rgb(155, 191, 155)":boardColor;
               break;
               case "b":
                color = "rgb(25, 168, 181)";
               break;
             case "yb":
                color = player ==="bluePieceImage"?"rgb(174, 191, 193)":boardColor;
               break;
               case "y":
                color = "rgb(215, 197, 6)";
               break;
             case "yy":
                color = player ==="yellowPieceImage"?"rgb(192, 200, 149)":boardColor;
               break;
              
             default:
                color = boardColor
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



  return (
   <canvas id = "canvas"
     width ={width} 
     height = {height}
     style = {canvasStyle}
     ref = {canvasRef}
     onMouseMove = {draw}
     onMouseDown = {verifyPlacement}
     onMouseLeave = {mouseLeave}
    />
     
  );

}
export default Canvas;

const canvasStyle = {border : "3px solid black"}


/*const Canvas = ({width,height,piece}) => {

  const numberOfRows = 20
  const numberOfCols = 20
  const cellSize = width/ numberOfCols

  const board = generateField(numberOfRows,numberOfCols);
  const setCanvasRef = useOnDraw(board,cellSize ,piece);

  return (
   <canvas id = "canvas"
     width ={width} 
     height = {height}
     style = {canvasStyle}
     ref = {setCanvasRef}/>
  );

}
export default Canvas;*/