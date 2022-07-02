import { useRef } from "react";

export function generateField (rows, cols)  {
  const field = Array.from({length: rows},
  () => Array.from({length: cols}, () =>0))

  field[0][0]="yr";
  field[0][19]="yb";
  field[19][0]="yg";
  field[19][19]="yy";

  return field
}

const insertIntoArray = (piece, board, xMousePos, yMousePos,isDownmouse,player) =>{
  let debutCloumn ,finCloumn, debutRow ,finRow ;
  let yes,no,p,np,ynp;
  let arrayOfPiece = ["r", "b", "y", "g"]
  let arrayOfYesOther =["yr", "yb","yy","yg"];
  let arrayOfNo =[ "nr", "nb", "ny", "ng"]

  yes = insertVariable (player, "yr", "yb","yy","yg" ) ;
  no =insertVariable (player, "nr", "nb", "ny", "ng" );
  p = insertVariable (player, "r", "b", "y", "g" );
  arrayOfPiece =arrayOfPiece.filter(items => items !== p);
  arrayOfYesOther = arrayOfYesOther.filter(items => items !== yes);
  arrayOfNo = arrayOfNo.filter(items => items !== no);

  let yrg = "yrg";

  let xPiece = 0;
  let yPiece = 0;
  let ismiddle = true;

  

  //pieces is in the top left corner board
  if(xMousePos === 0 && yMousePos === 0){
    debutCloumn=yMousePos;
    finCloumn=yMousePos+ piece.length -2;
    debutRow=xMousePos ;
    finRow =xMousePos +piece[0].length-2;
    xPiece=1;
    yPiece=1;
    ismiddle = false;
    //console.log("top left corner board");
  }
   
 // pieces is in the bottom left corner board
 if(xMousePos === 0 && yMousePos + piece.length-3 === 19){
  debutCloumn=yMousePos - 1;
  finCloumn = 19;
  debutRow=xMousePos -1  ;
  finRow =xMousePos +piece[0].length-2;
  xPiece=0;
  yPiece=0;
  ismiddle = false;
  //console.log("bottom left corner board");
 }

 // pieces is in the top right corner board
 if(yMousePos === 0 && xMousePos +piece[0].length === 19){
  debutCloumn=yMousePos;
  finCloumn=yMousePos+ piece.length -2;
  debutRow=xMousePos-1 ;
  finRow =xMousePos +piece[0].length;
  xPiece=0;
  yPiece=1;
  ismiddle = false;
  //console.log("top right corner board");
 }
 
 //pieces is in the bottom right corner board
 if(yMousePos+ piece.length -3 === 19 && xMousePos +piece[0].length -3 === 19){
  debutCloumn=yMousePos-1;
  finCloumn=19;
  debutRow=xMousePos-1 ;
  finRow =19;
  xPiece=0;
  yPiece=0;
  ismiddle = false;
  //console.log("bottom right corner board");
 }

 //pieces is in the left board
 /*if(xMousePos === 0 && yMousePos !== 0 && yMousePos !== 19){
  debutCloumn=yMousePos-1;
  finCloumn=yMousePos+ piece.length -2;
  debutRow=xMousePos ;
  finRow =xMousePos +piece[0].length-2;
  xPiece=0;
  yPiece=1;
  ismiddle = false;
  console.log("left board");
 }*/
 
 //pieces is in the top board
 if(yMousePos === 0 && xMousePos!== 0 && xMousePos!== 19){
   //console.log(xMousePos);
   //console.log(yMousePos);
   debutCloumn=yMousePos;
   finCloumn=yMousePos+ piece.length -2;
   debutRow=xMousePos-1 ;
   finRow =xMousePos +piece[0].length-2; 
   xPiece=1;
   yPiece=0;
   ismiddle = false;
   //console.log("top board");
 }

 //pieces is in the bottom board
 if(yMousePos + piece.length -3 === 19 && xMousePos!== 0 && xMousePos!== 19 && (xMousePos + piece[0].length -3) !== 19){
  debutCloumn = yMousePos - 1;
  finCloumn = 19;
  debutRow=xMousePos - 1 ;
  finRow =xMousePos + piece[0].length-2; 
  xPiece=0;
  yPiece=0;
  ismiddle = false;
  //console.log("bottom board");
 }
 
 //pieces is in the right board
 if((xMousePos + piece[0].length -3) === 19 && yMousePos !== 0 && yMousePos !== 19 && yMousePos + piece.length -3 !== 19){
     debutCloumn=yMousePos-1;
     finCloumn=yMousePos+ piece.length -2;
     debutRow=xMousePos-1 ;
     finRow =19; 
     xPiece=0;
     yPiece=0;
     ismiddle = false;
    // console.log("right board");
 }
 

 // in the middle
 if(ismiddle){
    debutCloumn=yMousePos-1;
    finCloumn=yMousePos + piece.length-2;
    debutRow=xMousePos-1 ;
    finRow =xMousePos +piece[0].length-2; 
    xPiece=0;
    yPiece=0; 
    //console.log("in the middle");
 }
 let isCorrectPlace =verifyPlacement(debutCloumn,finCloumn,debutRow,finRow,piece,board,xPiece,yPiece,player);

 if(xMousePos + piece[0].length - 3 > 19){return;}


console.log(player)

 
 if(!isDownmouse){
  let xpos = xPiece;
 for(let i=debutCloumn; i<=finCloumn;i++){
      let yPos=yPiece;
      for(let j= debutRow;j<=finRow;j++){
        if(board[i][j] !== p && piece[xpos][yPos] !== yes && piece[xpos][yPos] !== 0 && piece[xpos][yPos] !== no ){board[i][j]=piece[xpos][yPos]};
       yPos=yPos+1;
      }
      xpos=xpos+1;
    }
 }

 if(isCorrectPlace && isDownmouse){
  let xposP = xPiece;
  for(let i = debutCloumn; i <= finCloumn;i++){
    let yposP = yPiece;
    for(let j = debutRow; j <= finRow;j++){
      if( arrayOfYesOther.includes(board[i][j]) &&  piece[xposP][yposP] === yes){board[i][j]=yrg}  // we can put green or red pieces = "yrg"
      if(board[i][j] !== no && board[i][j] !== p && board[i][j] !==yrg &&  !arrayOfPiece.includes(board[i][j]) ){board[i][j]=piece[xposP][yposP]};
      if( arrayOfYesOther.includes(board[i][j])  && piece[xposP][yposP] == 0){board[i][j]= board[i][j]}
      if(board[i][j] === yrg && piece[xposP][yposP] == p){board[i][j]=piece[xposP][yposP]}
      yposP=yposP+1;
    }
    xposP=xposP+1;
  }

  //console.log("i m here")
 }

  
  //console.log(isCorrectPlace)
  return isCorrectPlace
}


function verifyPlacement(debutCloumn,finCloumn,debutRow,finRow,piece,board,xPiece,yPiece,player){
  let isPosCorrect = true;
  let isIncorner =false;
  let CanPlacePiece= false;
  let xpos=xPiece
  let yes,no,p,np,ynp;
  let arrayOfPiece = ["r", "b", "y", "g"];
  let arrayOfYesOther =["yr", "yb","yy","yg"];
  let arrayOfNo =[ "nr", "nb", "ny", "ng"];

  yes = insertVariable (player, "yr", "yb","yy","yg" ) ;
  no =insertVariable (player, "nr", "nb", "ny", "ng" );
  p = insertVariable (player, "r", "b", "y", "g" );
  arrayOfPiece =arrayOfPiece.filter(items => items !== p);
  arrayOfYesOther = arrayOfYesOther.filter(items => items !== yes);
  arrayOfNo = arrayOfNo.filter(items => items !== no);


  let yrg = "yrg";

  
    for(let i=debutCloumn; i<=finCloumn;i++){
      let yPos=yPiece;
      for(let j= debutRow;j<=finRow;j++){
        //verify if there is no green or red piece in the board 
        if((board[i][j] === p && piece[xpos][yPos] === p) || (board[i][j]===no &&  piece[xpos][yPos] === p)
        ||(arrayOfPiece.includes(board[i][j]) && piece[xpos][yPos] === p) )
        {isPosCorrect =false;/*piece isn't in the correct place*/}
    
       if((board[i][j] === yes || board[i][j] === yrg ) && piece[xpos][yPos] === p)
       {isIncorner=true;/* piece is in the corner of other piece with the same color*/}
       yPos=yPos+1;
      }
      xpos=xpos+1;
    }
 
    CanPlacePiece = (isIncorner && isPosCorrect)? true:false;

    return CanPlacePiece;
    
}


const insertVariable = (className, reed, blue, yellow, green ) =>{
  
let variable = className === "redPieceImage" ? reed:
               className === "bluePieceImage" ? blue:
               className === "yellowPieceImage" ?  yellow:
               green ;
return variable;
}
export {insertIntoArray};


