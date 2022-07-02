import { PieceArrayRed , PieceArrayBleu, PieceArrayYellow, PieceArrayGreen } from "../Pieces/piecesArray";
function flip(id,type){
    let element =document.getElementById(id);
    let angle=element.dataset.image;
    //element.style.transform="rotate(90deg) scaleX(-1)";
    function flip90(id,player){
       
        let piece=[];
        let rotatePiece=[];
        let array = player === "redPieceImage"? PieceArrayRed:
                      player === "bluePieceImage"? PieceArrayBleu:
                      player === "yellowPieceImage"? PieceArrayYellow:
                      PieceArrayGreen;

        array.map((p)=>{if(p.id === id){piece=p.piece}});
           for(let i=0; i<=piece.length-1;i++){
               let row=[];
             for(let j=piece[0].length-1;j>=0;j--){
                   row.push(piece[i][j]);
               }
            rotatePiece.push(row);
           }   
           array.map((p)=>{if(p.id === id){p.piece=rotatePiece}});
       }


       if(angle === "0NonFlip"){
        element.style.transform="rotateY(90deg)";
        element.dataset.image="90NonFlip";
       flip90(id,type); // rotate matrice of the piece
       }
   
    if(angle === "90NonFlip"){
        element.style.transform="rotate(90deg) scaleX(-1)";
        element.dataset.image="180NonFlip";
        flip90(id,type); 
       }
   
   /* if(angle === "180NonFlip"){
        element.style.transform="rotate(270deg)";
        element.dataset.image="270NonFlip";
        flip90(id,type); 
       }
   
    if(angle === "270NonFlip"){
        element.style.transform="rotate(360deg)";
        element.dataset.image="0NonFlip";
        flip90(id,type); 
       }*/
   }

   export {flip};