import {React, useState, useEffect }from 'react';
import Canvas from "./component/Board/canvas";
import Pieces from './component/Pieces/piecesContainer';
import { swalRules,swalRefresh, skipTurn } from './component/utili/utili';
import {PieceArrayRed , PieceArrayBleu, PieceArrayYellow, PieceArrayGreen} from './component/Pieces/piecesArray.js';
import { rotate} from './component/rotateFlip/rotate.js';
import { flip } from './component/rotateFlip/flip';
import CanvasPiece from './component/canvasPiece/canvasPiece';
import './App.css';


function App() {
  
  const [idActivePiece, setIdActivePiece] = useState(null);
  const [classeName, setClasseName] = useState("redPieceImage");
  const [scoreRedPlayer, setscoreRedPlayer] = useState(0);
  const [scoreBluePlayer, setscoreBluePlayer] = useState(0);
  const [scoreGreenPlayer, setscoreGreenPlayer] = useState(0);
  const [scoreYellowPlayer, setscoreYellowPlayer] = useState(0);
  let scorePlayer = classeName === "redPieceImage" ? scoreRedPlayer:
                    classeName === "bluePieceImage" ?  scoreBluePlayer:
                    classeName === "yellowPieceImage" ? scoreYellowPlayer:
                    scoreGreenPlayer ;
  useEffect(() =>{
    let hi = document.getElementById(classeName);
    console.log(classeName);
    hi.style.backgroundColor  = '#2b3282';
  },[classeName]);


  function MouseDown(e,className){
    const element= e.target ;
    let pieceArray= className === "redPieceImage" ? PieceArrayRed:
                    className === "bluePieceImage" ?  PieceArrayBleu:
                    className === "yellowPieceImage" ?  PieceArrayYellow:
                    PieceArrayGreen ;
    if(element.className===className){
     PieceArrayRed.map((p)=>{if(p.id === element.id){pieceArray = p.piece}});
     
     setIdActivePiece(element.id);
     console.log(idActivePiece);
    }
    
  }
  

  return (
   <div className="App"
   onMouseDown= {e=>MouseDown(e,classeName)}>
     <div className = "playZone">
         <Pieces color = "red" width = {300} height = {300}/>
       <div className = "playZoneMidelle">

         <Pieces color = "green" width = {200} height = {300}/>

         <Canvas  width = {300} height = {300} id = {idActivePiece}
           setid = {setIdActivePiece} setPlayer = {setClasseName} 
           player = {classeName}
           setscore = { classeName === "redPieceImage" ? setscoreRedPlayer:
                          classeName === "bluePieceImage" ?  setscoreBluePlayer:
                          classeName === "yellowPieceImage" ?  setscoreYellowPlayer:
                          setscoreGreenPlayer }
          scorePlayer ={scorePlayer}/>

         <Pieces color = "blue" width = {200} height = {300}/>

       </div>
       <Pieces color = "yellow" width = {300} height = {300}/>
     </div>

     <div className = "buttonZone">

       <div className ='scoreZone'>
         <div> Score:</div>
       <div className='scoreImage'>
         <div className='score'>
           <img src='./assests/redImagePieces/19r.png' className='colorImageScore'/>
           {scoreRedPlayer}
         </div>

         <div className='score'>
           <img src='./assests/blueImagePieces/19b.png' className='colorImageScore'/>
           {scoreBluePlayer}
         </div>

         <div className='score'>
           <img src='./assests/yellowImagePieces/19y.png' className='colorImageScore'/>
           {scoreYellowPlayer}
         </div>

         <div className='score'>
           <img src='./assests/greenImagePieces/19g.png' className='colorImageScore'/>
           {scoreGreenPlayer}
          </div>

       </div>
       </div>

       <div className ='rotate flipRotateButton' onClick={()=>rotate(idActivePiece,classeName)} >
       <img src="./assests/rotate.png" alt="Something" height="80" width="80"/>
       </div>


       <div className ='rules'  onClick={()=>skipTurn(classeName,setClasseName)}>
         Skip Turn
       </div>
       <div className ='rules'  onClick={()=>swalRefresh()}>
         End Game
       </div>
       <div className ='rules' onClick={()=>swalRules()}>
         Rules
       </div>
       <div className ='rules' >
       <a href="https://khaoula-khemiri.github.io/" target="_blank"> Copyright &copy; <span id="current-year">2022</span> Khaoula khemiri</a>
       </div>
       <div  >
       <img src="./assests/ninja-think.gif" alt="Something" height="200" width="200"/>
       </div>
     </div>
   </div>

  );
}

export default App;

/*<div className ='flipRightLeft flipRotateButton'  onClick={()=>flip(idActivePiece,classeName)}>
       <img src="./assests/flip-right-left.png" alt="Something" height="80" width="80"/>
       </div>

       <div className ='flipUpDown flipRotateButton'>
       <img src="./assests/flip-up-down.png" alt="Something" height="80" width="80"/>
       </div>*/