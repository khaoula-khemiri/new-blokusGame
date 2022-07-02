let PieceArrayRed =[]
 /*yg = we can put green pieces  
    ng = we can't put  green pieces 
    g = it's a  green pieces 
    yrg = we can put green or red pieces (same thing for "yr,nr,r")*/ 
    PieceArrayRed.push({id:"1r",
               piece:[["yr","nr","nr","nr","nr","yr"],
                      ["nr","r","r","r","r","nr"],
                      ["yr","nr","nr","nr","nr","yr"]],
               numSquares:4});

 PieceArrayRed.push({id:"2r",
               piece:[[0,"yr","nr","yr",0],
                      ["yr","nr","r","nr","yr"],
                      ["nr","r","r","r","nr"],
                      ["yr","nr","nr","nr","yr"]],
              numSquares:4});

PieceArrayRed.push({id:"3r",
              piece:[[0,0,0,"yr","nr","yr"],
                     ["yr","nr","nr","nr","r","nr"],
                     ["nr","r","r","r","r","nr"],
                     ["yr","nr","nr","nr","nr","yr"]],
              numSquares:5});

PieceArrayRed.push({id:"4r",
              piece:[[0,0,"yr","nr","yr",0],
              ["yr","nr","nr","r","nr","yr"],
              ["nr","r","r","r","r","nr"],
              ["yr","nr","nr","nr","nr","yr"]],
             numSquares:5});

PieceArrayRed.push({id:"5r",
             piece:[["yr","nr","yr",0],
                    ["nr","r","nr","yr"],
                    ["nr","r","r","nr"],
                    ["yr","nr","nr","yr"]],
            numSquares:3});

PieceArrayRed.push({id:"6r",
             piece:[[0,"yr","nr","yr",0],
                   [0,"nr","r","nr",0],
                   ["yr","nr","r","nr","yr"],
                  ["nr","r","r","r","nr"],
                  ["yr","nr","nr","nr","yr"]],
            numSquares:5});

PieceArrayRed.push({id:"7r",
             piece:[[0,"yr","nr","yr",0],
                   ["yr","nr","r","nr","yr"],
                   ["nr","r","r","r","nr"],
                   ["yr","nr","nr","r","nr"],
                   [0,0,"yr","nr","yr"],],
            numSquares:5});

PieceArrayRed.push({id:"8r",
            piece:[["yr","nr","nr","yr"],
                   ["nr","r","r","nr"],
                   ["nr","r","r","nr"],
                   ["yr","nr","nr","yr"]],
           numSquares:4});

PieceArrayRed.push({id:"9r",
             piece:[[0,"yr","nr","nr","nr","yr"],
                   ["yr","nr","r","r","r","nr"],
                   ["nr","r","r","nr","nr","yr"],
                   ["yr","nr","nr","yr",0,0]],
           numSquares:5});

PieceArrayRed.push({id:"10r",
           piece:[["yr","nr","yr","nr","yr"],
                  ["nr","r","nr","r","nr"],
                  ["nr","r","r","r","nr"],
                  ["yr","nr","nr","nr","yr"]],
           numSquares:5});

PieceArrayRed.push({id:"11r",
             piece:[[0,0,"yr","nr","yr"],
                    ["yr","nr","nr","r","nr"],
                    ["nr","r","r","r","nr"],
                    ["nr","r","nr","nr","yr"],
                    ["yr","nr","yr",0,0]],
          numSquares:4});

PieceArrayRed.push({id:"12r",
          piece:[[0,0,"yr","nr","yr"],
                 [0,"yr","nr","r","nr"],
                 ["yr","nr","r","r","nr"],
                 ["nr","r","r","nr","yr"],
                 ["yr","nr","nr","yr","nr"]],
          numSquares:5});

PieceArrayRed.push({id:"13r",
             piece:[["yr","nr","nr","yr",0],
                    ["nr","r","r","nr","yr"],
                    ["yr","nr","r","r","nr"],
                    [0,"yr","nr","nr","yr"]],
           numSquares:4});

PieceArrayRed.push({id:"14r",
           piece:[["yr","nr","nr","nr","yr"],
                  ["nr","r","r","r","nr"],
                  ["yr","nr","nr","nr","yr"]],
          numSquares:3});

PieceArrayRed.push({id:"15r",
            piece:[[0,"yr","nr","nr","yr"],
                  ["yr","nr","r","r","nr"],
                  ["nr","r","r","r","nr"],
                  ["yr","nr","nr","nr","yr"]],
          numSquares:5});

PieceArrayRed.push({id:"16r",
             piece:[["yr","nr","yr",0,0],
                   ["nr","r","nr",0,0],
                   ["nr","r","nr","nr","yr"],
                   ["nr","r","r","r","nr"],
                   ["yr","nr","nr","nr","yr"]],
          numSquares:5});

PieceArrayRed.push({id:"17r",
            piece:[[0,"yr","nr","yr",0],
                  ["yr","nr","r","nr","yr"],
                  ["nr","r","r","r","nr"],
                  ["yr","nr","r","nr","yr"],
                  [0,"yr","nr","yr",0]],
         numSquares:5});
         
PieceArrayRed.push({id:"18r",
             piece:[[0,0,"yr","nr","yr"],
                   ["yr","nr","nr","r","nr"],
                   ["nr","r","r","r","nr"],
                   ["yr","nr","nr","nr","yr"]],
         numSquares:4});

PieceArrayRed.push({id:"19r",
          piece:[["yr","nr","yr"],
                 ["nr","r","nr"],
                 ["yr","nr","yr"]],
          numSquares:1});

PieceArrayRed.push({id:"20r",
          piece:[["yr","nr","nr","yr"],
                 ["nr","r","r","nr"],
                 ["yr","nr","nr","yr"]],
         numSquares:2});
  
  
  
            
let PieceArrayGreen =[]
PieceArrayGreen.push({id:"1g",
               piece:[["yg","ng","ng","ng","ng","yg"],
                      ["ng","g","g","g","g","ng"],
                      ["yg","ng","ng","ng","ng","yg"]],
               numSquares:4});

PieceArrayGreen.push({id:"2g",
               piece:[[0,"yg","ng","yg",0],
               ["yg","ng","g","ng","yg"],
               ["ng","g","g","g","ng"],
               ["yg","ng","ng","ng","yg"]],
               numSquares:4});

PieceArrayGreen.push({id:"3g",
                      piece:[[0,0,0,"yg","ng","yg"],
                            ["yg","ng","ng","ng","g","ng"],
                            ["ng","g","g","g","g","ng"],
                            ["yg","ng","ng","ng","ng","yg"]],
              numSquares:5});

PieceArrayGreen.push({id:"4g",
              piece:[[0,0,"yg","ng","yg",0],
                     ["yg","ng","ng","g","ng","yg"],
                     ["ng","g","g","g","g","ng"],
                     ["yg","ng","ng","ng","ng","yg"]],
              numSquares:5});

PieceArrayGreen.push({id:"5g",
             piece:[["yg","ng","yg",0],
                    ["ng","g","ng","yg"],
                    ["ng","g","g","ng"],
                    ["yg","ng","ng","yg"]],
              numSquares:3});

PieceArrayGreen.push({id:"6g",
             piece:[[0,"yg","ng","yg",0],
                    [0,"ng","g","ng",0],
                    ["yg","ng","g","ng","yg"],
                    ["ng","g","g","g","ng"],
                    ["yg","ng","ng","ng","yg"]],
             numSquares:5});

PieceArrayGreen.push({id:"7g",
             piece:[[0,"yg","ng","yg",0],
                    ["yg","ng","g","ng","yg"],
                    ["ng","g","g","g","ng"],
                    ["yg","ng","ng","g","ng"],
                    [0,0,"yg","ng","yg"],],
             numSquares:5});

PieceArrayGreen.push({id:"8g",
             piece:[["yg","ng","ng","yg"],
                   ["ng","g","g","ng"],
                   ["ng","g","g","ng"],
                   ["yg","ng","ng","yg"]],
             numSquares:4});

PieceArrayGreen.push({id:"9g",
            piece:[[0,"yg","ng","ng","ng","yg"],
                   ["yg","ng","g","g","g","ng"],
                   ["ng","g","g","ng","ng","yg"],
                   ["yg","ng","ng","yg",0,0]],
            numSquares:5});

PieceArrayGreen.push({id:"10g",
            piece:[["yg","ng","yg","ng","yg"],
                   ["ng","g","ng","g","ng"],
                   ["ng","g","g","g","ng"],
                   ["yg","ng","ng","ng","yg"]],
            numSquares:5});

PieceArrayGreen.push({id:"11g",
            piece:[[0,0,"yg","ng","yg"],
                  ["yg","ng","ng","g","ng"],
                  ["ng","g","g","g","ng"],
                  ["ng","g","ng","ng","yg"],
                  ["yg","ng","yg",0,0]],
            numSquares:5});

PieceArrayGreen.push({id:"12g",
             piece:[[0,0,"yg","ng","yg"],
                   [0,"yg","ng","g","ng"],
                   ["yg","ng","g","g","ng"],
                   ["ng","g","g","ng","yg"],
                   ["yg","ng","ng","yg","ng"]],
           numSquares:5});

PieceArrayGreen.push({id:"13g",
                    piece:[["yg","ng","ng","yg",0],
                          ["ng","g","g","ng","yg"],
                          ["yg","ng","g","g","ng"],
                          [0,"yg","ng","ng","yg"]],
           numSquares:4});

PieceArrayGreen.push({id:"14g",
            piece:[["yg","ng","ng","ng","yg"],
                  ["ng","g","g","g","ng"],
                  ["yg","ng","ng","ng","yg"]],
           numSquares:3});
           
PieceArrayGreen.push({id:"15g",
          piece:[[0,"yg","ng","ng","yg"],
                 ["yg","ng","g","g","ng"],
                 ["ng","g","g","g","ng"],
                 ["yg","ng","ng","ng","yg"]],
          numSquares:5});

PieceArrayGreen.push({id:"16g",
             piece:[["yg","ng","yg",0,0],
                   ["ng","g","ng",0,0],
                   ["ng","g","ng","ng","yg"],
                   ["ng","g","g","g","ng"],
                   ["yg","ng","ng","ng","yg"]],
          numSquares:5});

PieceArrayGreen.push({id:"17g",
             piece:[[0,"yg","ng","yg",0],
                 ["yg","ng","g","ng","yg"],
                 ["ng","g","g","g","ng"],
                 ["yg","ng","g","ng","yg"],
                 [0,"yg","ng","yg",0]],
             numSquares:5});

PieceArrayGreen.push({id:"18g",
                      piece:[[0,0,"yg","ng","yg"],
                            ["yg","ng","ng","g","ng"],
                            ["ng","g","g","g","ng"],
                            ["yg","ng","ng","ng","yg"]],
         numSquares:4});

PieceArrayGreen.push({id:"19g",
          piece:[["yg","ng","yg"],
                 ["ng","g","ng"],
                 ["yg","ng","yg"]],
          numSquares:1});

PieceArrayGreen.push({id:"20g",
          piece:[["yg","ng","ng","yg"],
                 ["ng","g","g","ng"],
                 ["yg","ng","ng","yg"]],
          numSquares:2});


let PieceArrayBleu =[]
PieceArrayBleu.push({id:"1b",
                         piece:[["yb","nb","nb","nb","nb","yb"],
                                ["nb","b","b","b","b","nb"],
                                ["yb","nb","nb","nb","nb","yb"]],
                         numSquares:4});

PieceArrayBleu.push({id:"2b",
                         piece:[[0,"yb","nb","yb",0],
                         ["yb","nb","b","nb","yb"],
                         ["nb","b","b","b","nb"],
                         ["yb","nb","nb","nb","yb"]],
                         numSquares:4});

PieceArrayBleu.push({id:"3b",
                    piece:[[0,0,0,"yb","nb","yb"],
                          ["yb","nb","nb","nb","b","nb"],
                          ["nb","b","b","b","b","nb"],
                         ["yb","nb","nb","nb","nb","yb"]],
                        numSquares:5});
          
PieceArrayBleu.push({id:"4b",
                        piece:[[0,0,"yb","nb","yb",0],
                               ["yb","nb","nb","b","nb","yb"],
                               ["nb","b","b","b","b","nb"],
                               ["yb","nb","nb","nb","nb","yb"]],
                        numSquares:5});
          
PieceArrayBleu.push({id:"5b",
                       piece:[["yb","nb","yb",0],
                              ["nb","b","nb","yb"],
                              ["nb","b","b","nb"],
                              ["yb","nb","nb","yb"]],
                        numSquares:3});
          
PieceArrayBleu.push({id:"6b",
                       piece:[[0,"yb","nb","yb",0],
                              [0,"nb","b","nb",0],
                              ["yb","nb","b","nb","yb"],
                              ["nb","b","b","b","nb"],
                              ["yb","nb","nb","nb","yb"]],
                       numSquares:5});
          
PieceArrayBleu.push({id:"7b",
                       piece:[[0,"yb","nb","yb",0],
                              ["yb","nb","b","nb","yb"],
                              ["nb","b","b","b","nb"],
                              ["yb","nb","ng","b","nb"],
                              [0,0,"yb","nb","yb"],],
                       numSquares:5});
          
PieceArrayBleu.push({id:"8b",
                       piece:[["yb","nb","nb","yb"],
                             ["nb","b","b","nb"],
                             ["nb","b","b","nb"],
                             ["yb","nb","nb","yb"]],
                       numSquares:4});

PieceArrayBleu.push({id:"9b",
                      piece:[[0,"yb","nb","nb","nb","yb"],
                             ["yb","nb","b","b","b","nb"],
                             ["nb","b","b","nb","nb","yb"],
                             ["yb","nb","nb","yb",0,0]],
                      numSquares:5});
          
PieceArrayBleu.push({id:"10b",
                      piece:[["yb","nb","yb","nb","yb"],
                             ["nb","b","nb","b","nb"],
                             ["nb","b","b","b","nb"],
                             ["yb","nb","nb","nb","yb"]],
                      numSquares:5});

PieceArrayBleu.push({id:"11b",
                      piece:[[0,0,"yb","nb","yb"],
                            ["yb","nb","nb","b","nb"],
                            ["nb","b","b","b","nb"],
                            ["nb","b","nb","nb","yb"],
                            ["yb","nb","yb",0,0]],
                      numSquares:5});
          
PieceArrayBleu.push({id:"12b",
                       piece:[[0,0,"yb","nb","yb"],
                             [0,"yb","nb","b","nb"],
                             ["yb","nb","b","b","nb"],
                             ["nb","b","b","nb","yb"],
                             ["yb","nb","nb","yb","nb"]],
                     numSquares:5});
          
PieceArrayBleu.push({id:"13b",
                    piece:[["yb","nb","nb","yb",0],
                           ["nb","b","b","nb","yb"],
                           ["yb","nb","b","b","nb"],
                           [0,"yb","nb","nb","yb"]],
                     numSquares:4});
          
PieceArrayBleu.push({id:"14b",
                      piece:[["yb","nb","nb","nb","yb"],
                            ["nb","b","b","b","nb"],
                            ["yb","nb","nb","nb","yb"]],
                     numSquares:3});
                     
PieceArrayBleu.push({id:"15b",
                    piece:[[0,"yb","nb","nb","yb"],
                           ["yb","nb","b","b","nb"],
                           ["nb","b","b","b","nb"],
                           ["yb","nb","nb","nb","yb"]],
                    numSquares:5});
          
PieceArrayBleu.push({id:"16b",
                       piece:[["yb","nb","yb",0,0],
                             ["nb","b","nb",0,0],
                             ["nb","b","nb","nb","yb"],
                             ["nb","b","b","b","nb"],
                             ["yb","nb","nb","nb","yb"]],
                    numSquares:5});
          
PieceArrayBleu.push({id:"17b",
                       piece:[[0,"yb","nb","yb",0],
                           ["yb","nb","b","nb","yb"],
                           ["nb","b","b","b","nb"],
                           ["yb","nb","b","nb","yb"],
                           [0,"yb","nb","yb",0]],
                       numSquares:5});

PieceArrayBleu.push({id:"18b",
                      piece:[[0,0,"yb","nb","yb"],
                            ["yb","nb","nb","b","nb"],
                            ["nb","b","b","b","nb"],
                            ["yb","nb","nb","nb","yb"]],
                   numSquares:4});

PieceArrayBleu.push({id:"19b",
                    piece:[["yb","nb","yb"],
                           ["nb","b","nb"],
                           ["yb","nb","yb"]],
                    numSquares:1});

PieceArrayBleu.push({id:"20b",
                    piece:[["yb","nb","nb","yb"],
                           ["nb","b","b","nb"],
                           ["yb","nb","nb","yb"]],
                    numSquares:2});

let PieceArrayYellow =[]
PieceArrayYellow.push({id:"1y",
                     piece:[["yy","ny","ny","ny","ny","yy"],
                            ["ny","y","y","y","y","ny"],
                            ["yy","ny","ny","ny","ny","yy"]],
                            numSquares:4});

PieceArrayYellow.push({id:"2y",
                      piece:[[0,"yy","ny","yy",0],
                            ["yy","ny","y","ny","yy"],
                            ["ny","y","y","y","ny"],
                            ["yy","ny","ny","ny","yy"]],
                            numSquares:4});
                            
PieceArrayYellow.push({id:"3y",
                      piece:[[0,0,0,"yy","ny","yy"],
                            ["yy","ny","ny","ny","y","ny"],
                            ["ny","y","y","y","y","ny"],
                            ["yy","ny","ny","ny","ny","yy"]],
                     numSquares:5});
                              
PieceArrayYellow.push({id:"4y",
                      piece:[[0,0,"yy","ny","yy",0],
                            ["yy","ny","ny","y","ny","yy"],
                            ["ny","y","y","y","y","ny"],
                            ["yy","ny","ny","ny","ny","yy"]],
                            numSquares:5});
                              
PieceArrayYellow.push({id:"5y",
                      piece:[["yy","ny","yy",0],
                            ["ny","y","ny","yy"],
                            ["ny","y","y","ny"],
                            ["yy","ny","ny","yy"]],
                      numSquares:3});
                              
PieceArrayYellow.push({id:"6y",
                      piece:[[0,"yy","ny","yy",0],
                            [0,"ny","y","ny",0],
                            ["yy","ny","y","ny","yy"],
                            ["ny","y","y","y","ny"],
                            ["yy","ny","ny","ny","yy"]],
                      numSquares:5});
                              
PieceArrayYellow.push({id:"7y",
                      piece:[[0,"yy","ny","yy",0],
                            ["yy","ny","y","ny","yy"],
                            ["ny","y","y","y","ny"],
                            ["yy","ny","ny","y","ny"],
                            [0,0,"yy","ny","yy"],],
                      numSquares:5});
                              
PieceArrayYellow.push({id:"8y",
                      piece:[["yy","ny","ny","yy"],
                            ["ny","y","y","ny"],
                            ["ny","y","y","ny"],
                            ["yy","ny","ny","yy"]],
                      numSquares:4});

PieceArrayYellow.push({id:"9y",
                      piece:[[0,"yy","ny","ny","ny","yy"],
                            ["yy","ny","y","y","y","ny"],
                            ["ny","y","y","ny","ny","yy"],
                            ["yy","ny","ny","yy",0,0]],
                      numSquares:5});
                              
PieceArrayYellow.push({id:"10y",
                      piece:[["yy","ny","yy","ny","yy"],
                            ["ny","y","ny","y","ny"],
                            ["ny","y","y","y","ny"],
                            ["yy","ny","ny","ny","yy"]],
                      numSquares:5});

PieceArrayYellow.push({id:"11y",
                      piece:[[0,0,"yy","ny","yy"],
                            ["yy","ny","ny","y","ny"],
                            ["ny","y","y","y","ny"],
                            ["ny","y","ny","ny","yy"],
                            ["yy","ny","yy",0,0]],
                      numSquares:5});
                              
PieceArrayYellow.push({id:"12y",
                      piece:[[0,0,"yy","ny","yy"],
                            [0,"yy","ny","y","ny"],
                            ["yy","ny","y","y","ny"],
                            ["ny","y","y","ny","yy"],
                            ["yy","ny","ny","yy","ny"]],
                      numSquares:5});
                              
PieceArrayYellow.push({id:"13y",
                      piece:[["yy","ny","ny","yy",0],
                            ["ny","y","y","ny","yy"],
                            ["yy","ny","y","y","ny"],
                            [0,"yy","ny","ny","yy"]],
                      numSquares:4});
                              
PieceArrayYellow.push({id:"14y",
                      piece:[["yy","ny","ny","ny","yy"],
                            ["ny","y","y","y","ny"],
                            ["yy","ny","ny","ny","yy"]],
                      numSquares:3});
                                         
PieceArrayYellow.push({id:"15y",
                      piece:[[0,"yy","ny","ny","yy"],
                            ["yy","ny","y","y","ny"],
                            ["ny","y","y","y","ny"],
                            ["yy","ny","ny","ny","yy"]],
                      numSquares:5});
                              
PieceArrayYellow.push({id:"16y",
                      piece:[["yy","ny","yy",0,0],
                            ["ny","y","ny",0,0],
                            ["ny","y","ny","ny","yy"],
                            ["ny","y","y","y","ny"],
                            ["yy","ny","ny","ny","yy"]],
                      numSquares:5});
                              
PieceArrayYellow.push({id:"17y",
                      piece:[[0,"yy","ny","yy",0],
                            ["yy","ny","y","ny","yy"],
                            ["ny","y","y","y","ny"],
                            ["yy","ny","y","ny","yy"],
                            [0,"yy","ny","yy",0]],
                      numSquares:5});

PieceArrayYellow.push({id:"18y",
                      piece:[[0,0,"yy","ny","yy"],
                            ["yy","ny","ny","y","ny"],
                            ["ny","y","y","y","ny"],
                            ["yy","ny","ny","ny","yy"]],
                     numSquares:4});

PieceArrayYellow.push({id:"19y",
                      piece:[["yy","ny","yy"],
                            ["ny","y","ny"],
                            ["yy","ny","yy"]],
                     numSquares:1});

PieceArrayYellow.push({id:"20y",
                      piece:[["yy","ny","ny","yy"],
                            ["ny","y","y","ny"],
                            ["yy","ny","ny","yy"]],
                     numSquares:2});

export  {PieceArrayRed};
export  {PieceArrayGreen};
export  {PieceArrayBleu};
export  {PieceArrayYellow};