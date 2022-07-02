import React, {useEffect, useState} from 'react';
import { PieceImageR, PieceImageG, PieceImageB ,PieceImageY} from './piecesArrayImages';
import "./piecesContainer.css";


const Pieces = ({color,width,height}) =>{
  let c = color;
  let list= [];
  let image,heightImage,widthImage,idImage;
  let array =  color === "red" ? PieceImageR:
               color === "green"? PieceImageG:
               color === "blue"? PieceImageB:
               PieceImageY;
  let classNameChildren = color === "red" ? "redPieceImage":
                          color === "green"? "greenPieceImage":
                          color === "blue"? "bluePieceImage":
                          "yellowPieceImage";
                          
  let classNameParent = color === "red" ? "redPieceZone":
                        color === "green"? "greenPieceZone":
                        color === "blue"? "bluePieceZone":
                        "yellowPieceZone";

  const numberOfRows = height/40;
  const numberOfCols = width/40;
  const cellSize = 15;
 //console.log(color)
 //console.log(classNameParent)
   for(let j = 0; j<=19 ; j++){
       
    image=array[j].image;
    //console.log(array[j])
    widthImage=cellSize*array[j].l;
    heightImage=cellSize*array[j].m;
    idImage=array[j].id;
    list.push(
        <div key={`${color}${j}`} className='tail'> 
             <img id={ idImage} src={image} width= {widthImage} height={heightImage} data-image="0NonFlip"  className={ classNameChildren}/>
       </div>
      )  
   }

   return(
     <div  className = {classNameParent} id={classNameChildren}>
     {list}
     </div>
   )

}
export default Pieces;

