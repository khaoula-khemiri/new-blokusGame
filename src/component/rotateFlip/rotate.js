
import { PieceArrayRed , PieceArrayBleu, PieceArrayYellow, PieceArrayGreen } from "../Pieces/piecesArray";
function rotate(id,player){
    if(id){
    let element =document.getElementById(id);
    let angle=element.dataset.image;

    function rotate90(id,player){ 
        let array = player === "redPieceImage"? PieceArrayRed:
                    player === "bluePieceImage"? PieceArrayBleu:
                    player === "yellowPieceImage"? PieceArrayYellow:
                    PieceArrayGreen;;
        let piece=[];
        let rotatePiece=[];
      array.map((p)=>{if(p.id === id){piece=p.piece}});
       
     //rotate 90deg matrice of the piece
     for(let i=0;i<=piece[0].length-1;i++){
            let row=[];
              for(let j=piece.length-1; j>=0;j--){
                   row.push(piece[j][i]);
               }
            rotatePiece.push(row);
           }
       
        array.map((p)=>{if(p.id === id){p.piece=rotatePiece}});
           
          
    }
    // rotate image of the piece
    // I'm working on this!!
    if(angle === "0NonFlip"){
        element.style.transform="rotate(90deg)";
        element.dataset.image="90NonFlip";
        rotate90(id,player); // rotate matrice of the piece
       }
   
    if(angle === "90NonFlip"){
        element.style.transform="rotate(180deg)";
        element.dataset.image="180NonFlip";
        rotate90(id,player); 
       }
   
    if(angle === "180NonFlip"){
        element.style.transform="rotate(270deg)";
        element.dataset.image="270NonFlip";
        rotate90(id,player); 
       }
   
    if(angle === "270NonFlip"){
        element.style.transform="rotate(360deg)";
        element.dataset.image="0NonFlip";
        rotate90(id,player); 
       }
    }
   }
   
   export {rotate}