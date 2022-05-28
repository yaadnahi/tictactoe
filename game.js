

// Progression from game7 works perfectly



// ADD logo image in the header



let siteLogo = document.createElement('img');
siteLogo.classList.add('site-logo-img');
siteLogo.src = 'ttt-logo.png';


let headerDiv = document.getElementById('site-logo');

let logoImageSection = document.getElementById('logo-image-section');
logoImageSection.appendChild(siteLogo);

// headerDiv.appendChild(siteLogo);



// Player Profiles



let playerOne;
let playerTwo;

let tossWinner;
let tossLoser;

let startBTN = document.getElementById('start-btn');


let playerInfoSection = document.getElementById('player-info');






// SYMBOLS


let symbolOneBTN = document.getElementById('sym-img-one');
let symbolTwoBTN = document.getElementById('sym-img-two');


let symbolOne = document.getElementById('symbol-1').innerText;
let symbolTwo = document.getElementById('symbol-2').innerText;


let tossWinnerSymbol;
let tossLoserSymbol;

let symOneText;
let symTwoText;



let newSymOne;
let newSymTwo;

let playerOneNameField = document.getElementById('p1-name');
let playerTwoNameField = document.getElementById('p2-name');




    symbolOneBTN.addEventListener('click', () => {


        if( playerOneNameField.value == "" || playerTwoNameField.value == ""){
            alert(`Add your good names first to start the FUN journey. I too hate alerts.`);
        } else if(playerOneNameField.value != "" || playerOneNameField.value != "") {
            playerOne = playerOneNameField.value;
            playerTwo = playerTwoNameField.value;


                    // Setting localStorage for player names

        // localStorage.setItem('p1', playerOneNameField);
        // localStorage.setItem('p2', playerTwoNameField);

        // We dont want this right now - we will want this on reload img button
        // playerOne = localStorage.getItem('p1');
        // playerTwo = localStorage.getItem('p2');
        // playerOne = document.getElementById('p1-name').value;
        // playerTwo= document.getElementById('p2-name').value;

    
        






        symOneText = document.getElementById('sym-1-text');
        symTwoText = document.getElementById('sym-2-text');

        symOneText.innerHTML = playerOne;
        symTwoText.innerHTML = playerTwo;




        let swapSymbol = document.getElementById('flip-icon');
        let swapCounter = false;

        swapSymbol.addEventListener('click', () => {

            if(swapCounter == false) {
                symOneText.innerHTML = playerTwo;
                symTwoText.innerHTML = playerOne;
                swapCounter = true;
            } else if(swapCounter == true) {
                symOneText.innerHTML = playerOne;
                symTwoText.innerHTML = playerTwo;
                swapCounter = false;
            }

        });




        startBTN.addEventListener('click', () => {
            playerInfoSection.style.display = 'none';
        
        
           
            gridAppender();
            // playGame();
        
            gameResultSectionMaker();
        
        }, {once: true});
    }



}
// , {once: true}
); 




let tossWinnerPhrase;

function toss() {
    let randomNumber = Math.floor(Math.random() * 2);

if(randomNumber == 0) {

    tossWinner = playerOne;
    tossLoser = playerTwo;


    tossWinnerPhrase = `${playerOne} won the toss.`;

    console.log(tossWinnerPhrase);


   }

 else if (randomNumber == 1) {
    
    tossWinner = playerTwo;
    tossLoser = playerOne;



    tossWinnerPhrase = `${playerTwo} won the toss.`;


}


}












let tossWinnerTitle;
let tossWinnerSection;
let selectedSymbolSection;

let playerOneSection;
let playerTwoSection;


let playerOneTitle;
let playerTwoTitle;

let playerOneSymbol;
let playerTwoSymbol;


let tossArticle = document.getElementById('toss-article');
document.body.appendChild(tossArticle);


function tossSectionMaker() {


    tossWinnerTitle = document.createElement('span');
    tossWinnerTitle.classList.add('toss-winner-title');
    tossWinnerTitle.innerHTML = tossWinnerPhrase;

    tossWinnerSection = document.createElement('section');
    tossWinnerSection.classList.add('toss-winner-section');

    selectedSymbolSection = document.createElement('section');
    selectedSymbolSection.classList.add('selected-symbol-section');
    


    playerOneTitle = document.createElement('span');
    playerOneTitle.classList.add('player-one-title');
    playerOneTitle.innerHTML = `${playerOne}:`;
    playerTwoTitle = document.createElement('span');
    playerTwoTitle.classList.add('player-two-title');
    playerTwoTitle.innerHTML = `${playerTwo}:`;


    playerOneSymbol = document.createElement('span');
    playerOneSymbol.classList.add('p1-symbol');
    playerTwoSymbol = document.createElement('span');
    playerTwoSymbol.classList.add('p2-symbol');
    playerTwoSymbol.style.width = '2em';


    playerOneSection = document.createElement('section');
    playerOneSection.classList.add('player-one-section');
    playerTwoSection = document.createElement('section');
    playerTwoSection.classList.add('player-two-section');


    playerOneSymbol = document.createElement('img');
    playerTwoSymbol = document.createElement('img');

    // tossArticle = document.createElement('article');



    
    tossWinnerSection.appendChild(tossWinnerTitle);


    playerOneSection.appendChild(playerOneTitle);
    playerOneSection.appendChild(playerOneSymbol);

    playerTwoSection.appendChild(playerTwoTitle);
    playerTwoSection.appendChild(playerTwoSymbol);
   
    selectedSymbolSection.appendChild(playerOneSection);
    selectedSymbolSection.appendChild(playerTwoSection);




    tossArticle.appendChild(tossWinnerSection);
    // tossArticle.appendChild(playerOneSection);
    // tossArticle.appendChild(playerTwoSection);
    tossArticle.appendChild(selectedSymbolSection);



    // document.body.appendChild(tossArticle);


}



function tossDisplay() {
    if(tossWinner == playerOne) {
        if(symOneText.innerHTML == playerOne) {

            tossWinnerSymbol = 'X';
            tossLoserSymbol = 'O';
            tossWinnerImg = symImageOne;
            tossLoserImg = symImageTwo;
            playerOneSymbol.src = 'cross.png';
            playerOneSymbol.style.width = '1.3em';
            playerOneSymbol.style.paddingLeft = '0.5em';
            playerOneSymbol.style.justifySelf = 'left';


            playerTwoSymbol.src = 'circle.png';
            playerTwoSymbol.style.width = '1.3em';
            playerTwoSymbol.style.paddingLeft = '0.5em';
            playerTwoSymbol.style.justifySelf = 'left';


    
        } else if (symOneText.innerHTML == playerTwo) {
    
            tossWinnerSymbol = 'O';
            tossLoserSymbol = 'X';
            tossWinnerImg = symImageTwo;
            tossLoserImg = symImageOne;
            playerOneSymbol.innerHTML = tossWinnerImg;

            playerOneSymbol.src = 'circle.png';
            playerOneSymbol.style.width = '1.3em';
            playerOneSymbol.style.paddingLeft = '0.5em';
            playerOneSymbol.style.justifySelf = 'left';


            playerTwoSymbol.src = 'cross.png';
            playerTwoSymbol.style.width = '1em';
            playerTwoSymbol.style.paddingLeft = '0.5em';
            playerTwoSymbol.style.justifySelf = 'left';
            

    
        }

    } else if (tossWinner == playerTwo) {


        if(symOneText.innerHTML == playerTwo) {

            tossWinnerSymbol = 'X';
            tossLoserSymbol = 'O';
            tossWinnerImg = symImageOne;
            tossLoserImg = symImageTwo;
            playerTwoSymbol.innerHTML = tossWinnerImg;

            playerOneSymbol.src = 'circle.png';
            playerOneSymbol.style.width = '1em';


            playerTwoSymbol.src = 'cross.png';
            playerTwoSymbol.style.width = '1em';

    
        } else if (symOneText.innerHTML == playerOne) {
    
            tossWinnerSymbol = 'O';
            tossLoserSymbol = 'X';
            tossWinnerImg = symImageTwo;
            tossLoserImg = symImageOne;
            playerTwoSymbol.innerHTML = tossWinnerImg;
    
            playerOneSymbol.src = 'cross.png';
            playerOneSymbol.style.width = '1em';


            playerTwoSymbol.src = 'circle.png';
            playerTwoSymbol.style.width = '1em';

    
        }
    


    }



    // tossWinnerSection.appendChild(tossWinnerTitle);


    // playerOneSection.appendChild(playerOneTitle);
    // playerOneSection.appendChild(playerOneSymbol);

    // playerTwoSection.appendChild(playerTwoTitle);
    // playerTwoSection.appendChild(playerTwoSymbol);
   




    // tossArticle.appendChild(tossWinnerSection);
    // tossArticle.appendChild(playerOneSection);
    // tossArticle.appendChild(playerTwoSection);



    // document.body.appendChild(tossArticle);

}




function goesFirst() {
    tossWinnerTitle.innerHTML = `${tossWinner}, you go first.`;
}








let startBtnState = true;


let tossWinnerImg;
let tossLoserImg;


// startBTN.addEventListener('click', () => {
//     playerInfoSection.style.display = 'none';


   
//     gridAppender();
//     // playGame();

//     gameResultSectionMaker();

// }, {once: true});



let currentGrid;


let gridArea = document.getElementById('grid-area');
document.body.appendChild(gridArea);

let newGrid;

function gridMaker() {

let gridElementsArray = [];


    // if(streakCounter == 0) {
        // gridArea = document.createElement('article');
        // gridArea.classList.add('grid-area');
    
        currentGrid = document.createElement('article');
        currentGrid.classList.add('current-grid');
    
        
        for(let i = 1; i <= 9; i++) {
    
            let newSpan = document.createElement('span');
            newSpan.classList.add('display-symbol');
        
    
    
            let newDIV = document.createElement('div'); 
            newDIV.classList.add(`cell`);
            newDIV.classList.add(`cell-${i}`);
    
            newDIV.appendChild(newSpan);
    
            currentGrid.appendChild(newDIV);
        
            gridElementsArray.push(newDIV);
        
        }
        // document.body.style.display = 'Grid';
    
        // gridArea.appendChild(currentGrid);
    
        // document.body.appendChild(gridArea);
        // currentGrid.style.justifySelf = 'center';
        // console.log('listening to createGrid');
    
        
        // playGame();
    return currentGrid;
}



function gridAppender() {
    console.log('new grid appended')

    let latestGrid = gridMaker();
    gridArea.appendChild(latestGrid);
    // gridArea.innerHTML = gridMaker();
    
    // document.body.appendChild(gridArea);
    currentGrid.style.justifySelf = 'center';

    toss();

    if(startBtnState == true) {
        tossSectionMaker();
        startBtnState = false;
    } else if(startBtnState == false) {
        // tossWinnerTitle.innerHTML = tossWinnerPhrase;
        goesFirst();
    }

    // tossSectionMaker();
    tossDisplay();

    playGame();
    
}

function gridRemover() {

    gridArea.removeChild(currentGrid);


}



// Symbol hover 

// SYMBOL ONE

symbolOneBTN.addEventListener('mouseover', () => {
    symOneImg = document.getElementById('sym-img-one');
    symOneImg.src = 'cross-hover.png';
    symImageOne.style.width = '1.5em';
    symOneImg.style.transitionDuration = '0.5s';
});


symbolOneBTN.addEventListener('mouseout', () => {
    symOneImg = document.getElementById('sym-img-one');
    symOneImg.src = 'cross.png';
    symImageOne.style.width = '1em';

    symOneImg.style.transitionDuration = '0.5s';
});



// SYMBOL TWO

symbolTwoBTN.addEventListener('mouseover', () => {
    symTwoImg = document.getElementById('sym-img-two');
    symTwoImg.src = 'circle-hover.png';
    symTwoImg.style.width = '1.5em';
    symTwoImg.style.transitionDuration = '0.5s';
});


symbolTwoBTN.addEventListener('mouseout', () => {
    symTwoImg = document.getElementById('sym-img-two');
    symTwoImg.src = 'circle.png';
    symImageTwo.style.width = '1em';
    symTwoImg.style.transitionDuration = '0.5s';
});



// sTART BUTTON
// let startBTNImg;


startBTN.addEventListener('mouseover', () => {
    // startBTNImg = document.getElementById('start-btn');
    // startBTNImg.src = 'start-btn-hover.png';
    // startBTNImg.style.transitionDuration = '0.5s';

    // startBTNImg = document.getElementById('start-btn');
    startBTN.src = 'start-btn-hover.png';
    startBTN.style.transitionDuration = '0.1s';
    startBTN.style.width = '8.5em';
    // console.log(startBTN.src)
});


startBTN.addEventListener('mouseout', () => {
    // startBTNImg = document.getElementById('start-btn');
    // startBTNImg.src = 'start-btn.png';
    // startBTNImg.style.transitionDuration = '0.5s';

    // startBTNImg = document.getElementById('start-btn');
    startBTN.src = 'start-btn.png';
    startBTN.style.width = '7em';
    startBTN.style.transitionDuration = '0.1s';
    // console.log(startBTN.src)


});












function rowCheck() {

    if(c1.innerHTML == tossWinnerSymbol) {

        if(c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML) {
        console.log(`${tossWinner} is the winner.`);  
        gameWinner = tossWinner;
        matchFound = true;
        // gameOver();
        gameResult();
        // revertValues();

        } 

    }
    
    
    if(c1.innerHTML == tossLoserSymbol) {

        if(c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML) {
        console.log(`${tossLoser} is the winner.`);  
        gameWinner = tossLoser;
        matchFound = true;
        // gameOver();
        gameResult();
        // revertValues();
        

        } 

    }
    
    
    if (c4.innerHTML == tossWinnerSymbol) {

        if(c4.innerHTML == c5.innerHTML && c5.innerHTML == c6.innerHTML) {
            matchFound = true;
            console.log(`${tossWinner} is the winner.`); 
        gameWinner = tossWinner;
        // gameOver();
        gameResult();
        // revertValues();



        } 


    }
    
    if(c4.innerHTML == tossLoserSymbol) {

        if(c4.innerHTML == c5.innerHTML && c5.innerHTML == c6.innerHTML) {
            console.log(`${tossLoser} is the winner.`);   
         gameWinner = tossLoser;

            matchFound = true;
        gameResult();
        // revertValues();



            } 

    }
    
    if (c7.innerHTML == tossWinnerSymbol) {

        if(c7.innerHTML == c8.innerHTML && c8.innerHTML == c9.innerHTML) {
        console.log(`${tossWinner} is the winner.`);    
        gameWinner = tossWinner;
        matchFound = true;
        gameResult();
        // revertValues();


        } 


    } 
    
    if(c7.innerHTML == tossLoserSymbol) {

        if(c7.innerHTML == c8.innerHTML && c8.innerHTML == c9.innerHTML) {
            console.log(`${tossLoser} is the winner.`); 
            gameWinner = tossLoser;
            matchFound = true;
        gameResult();
        // revertValues();


            } 

    }

}


function colCheck() {
    
    if(c1.innerHTML == tossWinnerSymbol) {

        if(c1.innerHTML == c4.innerHTML && c4.innerHTML == c7.innerHTML) {
        console.log(`${tossWinner} is the winner.`);
        gameWinner = tossWinner;
        matchFound = true;
        gameResult();
        // revertValues();


        } 

    }
    
    if(c1.innerHTML == tossLoserSymbol) {

        if(c1.innerHTML == c4.innerHTML && c4.innerHTML == c7.innerHTML) {
        console.log(`${tossLoser} is the winner.`); 
        gameWinner = tossLoser;
        matchFound = true;
        gameResult();
        // revertValues();


        } 

    }
    
    
    if (c2.innerHTML == tossWinnerSymbol) {

        if(c2.innerHTML == c5.innerHTML && c5.innerHTML == c8.innerHTML) {
        console.log(`${tossWinner} is the winner.`);  
        gameWinner = tossWinner;
        matchFound = true;
        gameResult();
        // revertValues();


        } 


    }
    
    if(c2.innerHTML == tossLoserSymbol) {

        if(c2.innerHTML == c5.innerHTML && c5.innerHTML == c8.innerHTML) {
            console.log(`${tossLoser} is the winner.`);
        gameWinner = tossLoser;
            matchFound = true;
        gameResult();
        // revertValues();


            } 

    }
    
    
    if (c3.innerHTML == tossWinnerSymbol) {

        if(c3.innerHTML == c6.innerHTML && c6.innerHTML == c9.innerHTML) {
        console.log(`${tossWinner} is the winner.`); 
        gameWinner = tossWinner;
        matchFound = true;
        gameResult();
        // revertValues();


        } 


    }
    
    if(c3.innerHTML == tossLoserSymbol) {

        if(c3.innerHTML == c6.innerHTML && c6.innerHTML == c9.innerHTML) {
            console.log(`${tossLoser} is the winner.`);  
        
        gameWinner = tossLoser;

            matchFound = true;
        gameResult();
        // revertValues();


            } 

    }

}


function diagonalCheck() {
    
    
    if(c1.innerHTML == tossWinnerSymbol) {

        if(c1.innerHTML == c5.innerHTML && c5.innerHTML == c9.innerHTML) {
        console.log(`${tossWinner} is the winner.`);  
    gameWinner = tossWinner;

        matchFound = true;
    gameResult();
    //     revertValues();


        } 

    } 
    
    
    if(c1.innerHTML == tossLoserSymbol) {

        if(c1.innerHTML == c5.innerHTML && c5.innerHTML == c9.innerHTML) {
        console.log(`${tossLoser} is the winner.`);  
    gameWinner = tossLoser;

        matchFound = true;
    gameResult();
    // revertValues();


        } 

    } 
    
    if (c3.innerHTML == tossWinnerSymbol) {

        if(c3.innerHTML == c5.innerHTML && c5.innerHTML == c7.innerHTML) {
        console.log(`${tossWinner} is the winner.`); 
    gameWinner = tossWinner;

        matchFound = true;
    gameResult();
    //     revertValues();


        } 


    }
    
    if(c3.innerHTML == tossLoserSymbol) {

        if(c3.innerHTML == c5.innerHTML && c5.innerHTML == c7.innerHTML) {
            console.log(`${tossLoser} is the winner.`); 

    gameWinner = tossLoser;

            matchFound = true;
    gameResult();

    //     revertValues();
            
            } 

    }





}



function drawCheck() {

    if((c1.innerHTML != c2.innerHTML && c2.innerHTML != c3.innerHTML) ||
    (c1.innerHTML != c4.innerHTML && c4.innerHTML != c7.innerHTML) ||
    (c1.innerHTML != c5.innerHTML && c5.innerHTML != c9.innerHTML)
    
    ) {
        console.log('Match tied');
        gameWinner = 0;
        gameResult();


    } 
    
}
    












// TURN COUNTER Function



let totalTurns = 9;
// let tossWinnerTurns = 0;
// let tossLoserTurns = 0;

let turnCounter = 0;


let tossWinnerState = true;
let tossLoserState = false;



let matchFound = false;




let symImageOne = document.getElementsByClassName('sym-image-1')[0];
let symImageTwo = document.getElementsByClassName('sym-image-2')[0];








let displaySymbolArray = document.getElementsByClassName('display-symbol');



let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;
let c9;




let gameWinner;




function playGame() {

revertValues();


c1 = displaySymbolArray[0];
c2 = displaySymbolArray[1];
c3 = displaySymbolArray[2];
c4 = displaySymbolArray[3];
c5 = displaySymbolArray[4];
c6 = displaySymbolArray[5];
c7 = displaySymbolArray[6];
c8 = displaySymbolArray[7];
c9 = displaySymbolArray[8];



let gridElementsArray = document.getElementsByClassName('cell');

// All the grid elements have an event listener 'click' 

for(let i=0; i<gridElementsArray.length; i++) {
    gridElementsArray[i].addEventListener('click', () => {
        turns();
    },
    
    {once: true}
    
    
    );


    function turns() {

        if(tossWinnerState == true) {

                // Place a background image the cell
                gridElementsArray[i].style.backgroundImage = `url(${tossWinnerImg.src})`;
                gridElementsArray[i].style.backgroundRepeat = 'no-repeat';
                gridElementsArray[i].style.backgroundSize = '3.5em 3.5em';
                gridElementsArray[i].style.backgroundPosition = 'center';



                // Place the symbol in the cell
                displaySymbolArray[i].innerHTML = tossWinnerSymbol;


                //removes event listener fom current cell
                // gridElementsArray[i].removeEventListener('click', ()  => {
                //     turns;
                // });

                
                rowCheck();
                colCheck();
                diagonalCheck();

                // console.log(turnCounter);
    
                tossWinnerState = false;
                tossLoserState = true;
                turnCounter += 1;

    
    
                if(turnCounter == 9) {
                    return drawCheck();
                }

                if(matchFound == true) {
                    console.log('match found.');
                    tossLoserState = false;
                }
                
    
                
        } else  if(tossLoserState == true) {

          
                gridElementsArray[i].style.backgroundImage = `url(${tossLoserImg.src})`;
                gridElementsArray[i].style.backgroundRepeat = 'no-repeat';
                gridElementsArray[i].style.backgroundSize = '3.5em 3.5em';
                gridElementsArray[i].style.backgroundPosition = 'center';





                displaySymbolArray[i].innerHTML = tossLoserSymbol;
                
                // gridElementsArray[i].removeEventListener('click', () => {
                //     turns;
                // });

                rowCheck();
                colCheck();
                diagonalCheck();
    
                console.log(turnCounter);

                tossLoserState = false;
                tossWinnerState = true;
                turnCounter += 1;

                if(matchFound == true) {
                    console.log('match found.');
                    tossWinnerState = false;
                }

    
        }    
    
    }




    // function gameOver() {
    //     for(let i=0; i<gridElementsArray; i++) { 
    //         gridElementsArray[i].removeEventListener('click', turns);
    //     }

    //     console.log('game over function called');
    
    // }




    // function rowCheck() {

    //     if(c1.innerHTML == tossWinnerSymbol) {
    
    //         if(c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML) {
    //         console.log(`${tossWinner} is the winner.`);  
    //         gameWinner = tossWinner;
    //         matchFound = true;
    //         // gameOver();
    //         gameResult();
    //         // revertValues();

    //         } 
    
    //     }
        
        
    //     if(c1.innerHTML == tossLoserSymbol) {
    
    //         if(c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML) {
    //         console.log(`${tossLoser} is the winner.`);  
    //         gameWinner = tossLoser;
    //         matchFound = true;
    //         // gameOver();
    //         gameResult();
    //         // revertValues();
            

    //         } 
    
    //     }
        
        
    //     if (c4.innerHTML == tossWinnerSymbol) {
    
    //         if(c4.innerHTML == c5.innerHTML && c5.innerHTML == c6.innerHTML) {
    //             matchFound = true;
    //             console.log(`${tossWinner} is the winner.`); 
    //         gameWinner = tossWinner;
    //         // gameOver();
    //         gameResult();
    //         // revertValues();



    //         } 
    
    
    //     }
        
    //     if(c4.innerHTML == tossLoserSymbol) {
    
    //         if(c4.innerHTML == c5.innerHTML && c5.innerHTML == c6.innerHTML) {
    //             console.log(`${tossLoser} is the winner.`);   
    //          gameWinner = tossLoser;

    //             matchFound = true;
    //         gameResult();
    //         // revertValues();



    //             } 
    
    //     }
        
    //     if (c7.innerHTML == tossWinnerSymbol) {
    
    //         if(c7.innerHTML == c8.innerHTML && c8.innerHTML == c9.innerHTML) {
    //         console.log(`${tossWinner} is the winner.`);    
    //         gameWinner = tossWinner;
    //         matchFound = true;
    //         gameResult();
    //         // revertValues();


    //         } 
    
    
    //     } 
        
    //     if(c7.innerHTML == tossLoserSymbol) {
    
    //         if(c7.innerHTML == c8.innerHTML && c8.innerHTML == c9.innerHTML) {
    //             console.log(`${tossLoser} is the winner.`); 
    //             gameWinner = tossLoser;
    //             matchFound = true;
    //         gameResult();
    //         // revertValues();


    //             } 
    
    //     }
    
    // }
    
    
    
    // function colCheck() {
    
    //     if(c1.innerHTML == tossWinnerSymbol) {
    
    //         if(c1.innerHTML == c4.innerHTML && c4.innerHTML == c7.innerHTML) {
    //         console.log(`${tossWinner} is the winner.`);
    //         gameWinner = tossWinner;
    //         matchFound = true;
    //         gameResult();
    //         // revertValues();


    //         } 
    
    //     }
        
    //     if(c1.innerHTML == tossLoserSymbol) {
    
    //         if(c1.innerHTML == c4.innerHTML && c4.innerHTML == c7.innerHTML) {
    //         console.log(`${tossLoser} is the winner.`); 
    //         gameWinner = tossLoser;
    //         matchFound = true;
    //         gameResult();
    //         // revertValues();


    //         } 
    
    //     }
        
        
    //     if (c2.innerHTML == tossWinnerSymbol) {
    
    //         if(c2.innerHTML == c5.innerHTML && c5.innerHTML == c8.innerHTML) {
    //         console.log(`${tossWinner} is the winner.`);  
    //         gameWinner = tossWinner;
    //         matchFound = true;
    //         gameResult();
    //         // revertValues();


    //         } 
    
    
    //     }
        
    //     if(c2.innerHTML == tossLoserSymbol) {
    
    //         if(c2.innerHTML == c5.innerHTML && c5.innerHTML == c8.innerHTML) {
    //             console.log(`${tossLoser} is the winner.`);
    //         gameWinner = tossLoser;
    //             matchFound = true;
    //         gameResult();
    //         // revertValues();


    //             } 
    
    //     }
        
        
    //     if (c3.innerHTML == tossWinnerSymbol) {
    
    //         if(c3.innerHTML == c6.innerHTML && c6.innerHTML == c9.innerHTML) {
    //         console.log(`${tossWinner} is the winner.`); 
    //         gameWinner = tossWinner;
    //         matchFound = true;
    //         gameResult();
    //         // revertValues();


    //         } 
    
    
    //     }
        
    //     if(c3.innerHTML == tossLoserSymbol) {
    
    //         if(c3.innerHTML == c6.innerHTML && c6.innerHTML == c9.innerHTML) {
    //             console.log(`${tossLoser} is the winner.`);  
            
    //         gameWinner = tossLoser;

    //             matchFound = true;
    //         gameResult();
    //         // revertValues();


    //             } 
    
    //     }
    
    // }
    
    
    
    // function diagonalCheck() {
    
    
    //         if(c1.innerHTML == tossWinnerSymbol) {
    
    //             if(c1.innerHTML == c5.innerHTML && c5.innerHTML == c9.innerHTML) {
    //             console.log(`${tossWinner} is the winner.`);  
    //         gameWinner = tossWinner;

    //             matchFound = true;
    //         gameResult();
    //         //     revertValues();


    //             } 
    
    //         } 
            
            
    //         if(c1.innerHTML == tossLoserSymbol) {
    
    //             if(c1.innerHTML == c5.innerHTML && c5.innerHTML == c9.innerHTML) {
    //             console.log(`${tossLoser} is the winner.`);  
    //         gameWinner = tossLoser;

    //             matchFound = true;
    //         gameResult();
    //         // revertValues();


    //             } 
    
    //         } 
            
    //         if (c3.innerHTML == tossWinnerSymbol) {
    
    //             if(c3.innerHTML == c5.innerHTML && c5.innerHTML == c7.innerHTML) {
    //             console.log(`${tossWinner} is the winner.`); 
    //         gameWinner = tossWinner;

    //             matchFound = true;
    //         gameResult();
    //         //     revertValues();


    //             } 
    
    
    //         }
            
    //         if(c3.innerHTML == tossLoserSymbol) {
    
    //             if(c3.innerHTML == c5.innerHTML && c5.innerHTML == c7.innerHTML) {
    //                 console.log(`${tossLoser} is the winner.`); 

    //         gameWinner = tossLoser;

    //                 matchFound = true;
    //         gameResult();

    //         //     revertValues();
                    
    //                 } 
    
    //         }
      
    
    
        
    
    // }
    

    
    // function drawCheck() {

    //     if((c1.innerHTML != c2.innerHTML && c2.innerHTML != c3.innerHTML) ||
    //     (c1.innerHTML != c4.innerHTML && c4.innerHTML != c7.innerHTML) ||
    //     (c1.innerHTML != c5.innerHTML && c5.innerHTML != c9.innerHTML)
        
    //     ) {
    //         console.log('Match tied');
    //         gameWinner = `Match Tied`;
    //         gameResult();

    //         // revertValues();

    //     } 
        
    // }
        


}

return gameWinner;

}



/* Toss winner display/ who goes first? */


/* Display toss winner*/


/* function display result- lets call it gameResult()




    creates table below the grid to display the scorecard
    shows winning title and play again button + it also shows the scorecard section
    

*/

let displayWinner;
let displayWinnerTitle;
let reloadBTN;
let reloadImg;
let winnerArticle = document.getElementById('winner-article');
document.body.appendChild(winnerArticle);



let scoreCardTitle;

let playersTextArray = [];
let playersScoreArray = [];

let p1Text;
let p1Name;
let p2Text;
let p2Name;

let p1WinsTitle;
let p1Wins;
let p1LossesTitle;
let p1Losses;

let p2WinsTitle;
let p2Wins;
let p2LossesTitle;
let p2Losses;


let scorecardArticle = document.getElementById('scorecard-article');
scorecardArticle.classList.add('scorecard-article');
document.body.appendChild(scorecardArticle);



let p1WinCount = 0;
let p1LossCount = 0;
let p2WinCount = 0;
let p2LossCount = 0;





function gameResult() {

    // displayWinner.innerHTML = `${gameWinner} Wins!`;

    if(gameWinner == 0) {
         displayWinner.innerHTML = `Game Tied`;
    } else {
         displayWinner.innerHTML = `${gameWinner} Wins!`;
    }

    
    reloadImg.src = 'play-again.png';
    reloadImg.style.width = '7em';

    hoverReloadBTN();



    // Update Score
    if(gameWinner == playerOne) {
        p1WinCount += 1;
        p1Wins.innerHTML = `${p1WinCount}`;


        p2LossCount += 1;
        p2Losses.innerHTML = `${p2LossCount}`;

        localStorage.setItem('p1Wins', p1WinCount);
        localStorage.setItem('p1Losses', 0);
        localStorage.setItem('p2Wins', 0);
        localStorage.setItem('p2Losses', p2LossCount);
        console.log(`${p1WinCount} p1 won`, `${p2LossCount} p2 lost`);

    } else if(gameWinner == playerTwo) {
        p2WinCount +=1;
        p2Wins.innerHTML = `${p2WinCount}`;


        p1LossCount += 1;
        p1Losses.innerHTML = `${p1LossCount}`;

        localStorage.setItem('p2Wins', p2WinCount);
        localStorage.setItem('p1Wins', 0);
        localStorage.setItem('p2Losses', 0);
        localStorage.setItem('p1Losses', p1LossCount);

        // console.log(p2WinCount, p1LossCount);


        // SAHI HAI BHAIIIIII
        // console.log(`${p2WinCount} p2 won`, `${p1LossCount} p1 lost`);


    }

    reloadImg.addEventListener('click', ()  => {
        // console.log('play again button clicked');
        playAgain();
        // reLoad();
    });

}



function hoverReloadBTN() {   // REload button

    reloadImg.addEventListener('mouseover', () => {
     reloadImg.src = 'play-again-hover.png';
     reloadImg.style.width = '8.5em';
     reloadImg.style.transitionDuration = '0.1s';
 });
 
 
 reloadImg.addEventListener('mouseout', () => {
     reloadImg.src = 'play-again.png';
     reloadImg.style.width = '7em';
     reloadImg.style.transitionDuration = '0.1s';
 
 });}





function gameResultSectionMaker() {


     // First article

    // section to contain our game winner title
    displayWinner = document.createElement('section');
    displayWinner.classList.add('game-winner');
    displayWinnerTitle = document.createElement('span');


    // section to contain our reload button
    reloadBTN = document.createElement('section');
    reloadBTN.classList.add('reload-btn');
    reloadImg = document.createElement('img');
    reloadImg.classList.add('reload-img');

    
// article element to contain both winner display and reload btn
// winnerArticle = document.createElement('article');



    

    // Append displayWinnterTitle to displayWinner
    displayWinner.appendChild(displayWinnerTitle);
    // Append reloadImg to reload button
    reloadBTN.appendChild(reloadImg);
    // append display winner and reload btn to article

    winnerArticle.appendChild(displayWinner);
    winnerArticle.appendChild(reloadBTN);


    // append our first article to the document body
    // document.body.appendChild(winnerArticle);


    
    // Second Article 


    // Scorecard Title
    scoreCardTitle = document.createElement('div');
    scoreCardTitle.classList.add('scorecard-title');
    scoreCardTitle.innerHTML = 'SCORECARD';


        // yeh end per banaya tha isiliye aisa hai

        p1Name = document.createElement('span');
        p1Name.classList.add('p1-name');
        p1Name.innerHTML = playerOne;

        p2Name = document.createElement('span');
        p2Name.classList.add('p2-name');
        p2Name.innerHTML = playerTwo;



        // The hard one 4spans inside 2 divs (2spans for each div)   2/4 loop (our notation hehe)
    
        for(let i = 0; i < 2; i++) {

        
            playersTextArray[i] = document.createElement('div');
            // document.classList.add(`p${1}-text`);
    
            for(let i=0; i<8; i++) {
    
                playersScoreArray[i] =  document.createElement('span');
                // playersScoreArray[i].classList.add(`p1-wins`);
            }
    
        }
    
        // assigning values to their respective bindings both for divs and spans
    
        p1Text = playersTextArray[0];
    // p1Text.innerHTML = playerOne;

        p1Text.classList.add('p1-text');

        
    p2Text = playersTextArray[1];
    // p2Text.innerHTML = playerTwo;

    p2Text.classList.add('p2-text');

    p1WinsTitle = playersScoreArray[0];
    p1WinsTitle.classList.add('p1-wins-title');
    p1WinsTitle.innerHTML = `W:`;
    p1LossesTitle = playersScoreArray[1];
    p1LossesTitle.classList.add('p1-losses-title');
    p1LossesTitle.innerHTML = `L:`;


    p1Wins = playersScoreArray[2];
    p1Wins.innerHTML = '0';
    p1Wins.classList.add('p1-wins');






    p1Losses = playersScoreArray[3];
    p1Losses.innerHTML = '0';
    p1Losses.classList.add('p1-losses');











    p2WinsTitle = playersScoreArray[4];
    p2WinsTitle.classList.add('p2-wins-title');
    p2WinsTitle.innerHTML = `W:`;
    p2LossesTitle = playersScoreArray[5];
    p2LossesTitle.classList.add('p2-losses-title');
    p2LossesTitle.innerHTML = `L:`;


    p2Wins = playersScoreArray[6];
    p2Wins.innerHTML = '0';

    p2Wins.classList.add('p2-wins');




      
    p2Losses = playersScoreArray[7];
    p2Losses.innerHTML = '0';

    p2Losses.classList.add('p2-losses');

    // Append p1Wins and p1Losses to p1text

    p1Text.appendChild(p1Name);
    p1Text.appendChild(p1WinsTitle);
    p1Text.appendChild(p1Wins);
    p1Text.appendChild(p1LossesTitle);
    p1Text.appendChild(p1Losses);





    // Append p2Wins and p2Losses to p2text

    p2Text.appendChild(p2Name);
    p2Text.appendChild(p2WinsTitle);
    p2Text.appendChild(p2Wins);
    p2Text.appendChild(p2LossesTitle);
    p2Text.appendChild(p2Losses);



    // Scorecard article


    // scorecardArticle = document.createElement('article');
    // scorecardArticle.classList.add('scorecard-article');



    // append p1text and then p2text to scorecard article

    scorecardArticle.appendChild(scoreCardTitle);
    scorecardArticle.appendChild(p1Text);
    scorecardArticle.appendChild(p2Text);


    // append scorecard article to document body

    // document.body.appendChild(winnerArticle);
    // document.body.appendChild(scorecardArticle);









}


 







let streakCounter = 0; 



// check kareen iss meh kya aisa lga diya mujhe toh streakCounter he lgta hai problematic
// function gameResult() {
//     streakCounter+=1;

//     // if(streakCounter < 1) {
//           // First article

//     // section to contain our game winner title
//     displayWinner = document.createElement('section');
//     displayWinner.classList.add('game-winner');
//     displayWinnerTitle = document.createElement('span');
//     displayWinner.innerHTML = `${gameWinner} Wins!`;


//     // section to contain our reload button
//     reloadBTN = document.createElement('section');
//     reloadBTN.classList.add('reload-btn');
//     reloadImg = document.createElement('img');
//     reloadImg.classList.add('reload-img');
//     reloadImg.src = 'play-again.png';
//     reloadImg.style.width = '7em';
    

//     // Append displayWinnterTitle to displayWinner
//     displayWinner.appendChild(displayWinnerTitle);

//     // Append reloadImg to reload button
//     reloadBTN.appendChild(reloadImg);


//     // article element to contain both winner display and reload btn
//     winnerArticle = document.createElement('article');



//     // append display winner and reload btn to article

//     winnerArticle.appendChild(displayWinner);
//     winnerArticle.appendChild(reloadBTN);


//     // append our first article to the document body
//     document.body.appendChild(winnerArticle);









//     // Second Article 


//     // Scorecard Title
//     scoreCardTitle = document.createElement('div');
//     scoreCardTitle.classList.add('scorecard-title');
//     scoreCardTitle.innerHTML = 'SCORECARD';



//     // The hard one 4spans inside 2 divs (2spans for each div)   2/4 loop (our notation hehe)
    
//     for(let i = 0; i < 2; i++) {

        
//         playersTextArray[i] = document.createElement('div');
//         // document.classList.add(`p${1}-text`);

//         for(let i=0; i<8; i++) {

//             playersScoreArray[i] =  document.createElement('span');
//             playersScoreArray[i].classList.add(`p1-wins`);
//         }

//     }

//     // assigning values to their respective bindings both for divs and spans

//     p1Text = playersTextArray[0];
//     p1Text.classList.add('p1-text');
//     p1Text.innerHTML = playerOne;
//     p2Text = playersTextArray[1];
//     p2Text.classList.add('p2-text');
//     p2Text.innerHTML = playerTwo;




//     p1WinsTitle = playersScoreArray[0];
//     p1WinsTitle.classList.add('p1-wins-title');
//     p1WinsTitle.innerHTML = `W:`;
//     p1LossesTitle = playersScoreArray[1];
//     p1LossesTitle.classList.add('p1-losses-title');
//     p1LossesTitle.innerHTML = `L:`;




    
//     p1Wins = playersScoreArray[2];
//     p1Wins.classList.add('p1-wins');
//     p1Wins.innerHTML = '0';
//     p1Losses = playersScoreArray[3];
//     p1Losses.classList.add('p1-losses');
//     p1Losses.innerHTML = '0';



//     p2WinsTitle = playersScoreArray[4];
//     p2WinsTitle.classList.add('p2-wins-title');
//     p2WinsTitle.innerHTML = `W:`;
//     p2LossesTitle = playersScoreArray[5];
//     p2LossesTitle.classList.add('p2-losses-title');
//     p2LossesTitle.innerHTML = `L:`;


//     p2Wins = playersScoreArray[6];
//     p2Wins.classList.add('p2-wins');
//     p2Wins.innerHTML = '0';
//     p2Losses = playersScoreArray[7];
//     p2Losses.classList.add('p2-losses');
//     p2Losses.innerHTML = '0';



//     // Append p1Wins and p1Losses to p1text

//     p1Text.appendChild(p1WinsTitle)
//     p1Text.appendChild(p1Wins);
//     p1Text.appendChild(p1LossesTitle);
//     p1Text.appendChild(p1Losses);





//     // Append p2Wins and p2Losses to p2text

//     p2Text.appendChild(p2WinsTitle);
//     p2Text.appendChild(p2Wins);
//     p2Text.appendChild(p2LossesTitle);
//     p2Text.appendChild(p2Losses);



//     // Scorecard article


//     scorecardArticle = document.createElement('article');
//     scorecardArticle.classList.add('scorecard-article');



//     // append p1text and then p2text to scorecard article

//     scorecardArticle.appendChild(scoreCardTitle);
//     scorecardArticle.appendChild(p1Text);
//     scorecardArticle.appendChild(p2Text);


//     // append scorecard article to document body

//     // document.body.appendChild(winnerArticle);
//     document.body.appendChild(scorecardArticle);


//     // Update Score
//     if(gameWinner == playerOne) {
//         p1WinCount += 1;
//         p1Wins.innerHTML = `${p1WinCount}`;


//         p2LossCount += 1;
//         p2Losses.innerHTML = `${p2LossCount}`;

//         localStorage.setItem('p1Wins', p1WinCount);
//         localStorage.setItem('p2Losses', p2LossCount);
//         console.log(`${p1WinCount} p1 won`, `${p2LossCount} p2 lost`);

//     } else if(gameWinner == playerTwo) {
//         p2WinCount +=1;
//         p2Wins.innerHTML = `${p2WinCount}`;


//         p1LossCount += 1;
//         p1Losses.innerHTML = `${p1LossCount}`;

//         localStorage.setItem('p2Wins', p2WinCount);
//         localStorage.setItem('p1Losses', p1LossCount);

//         // console.log(p2WinCount, p1LossCount);


//         // SAHI HAI BHAIIIIII
//         // console.log(`${p2WinCount} p2 won`, `${p1LossCount} p1 lost`);


    

//         // console.log(streakCounter)
//         // streakCounter+=1;


//     // } else if(streakCounter > 1) {

        
//     // Update Score
//     if(gameWinner == playerOne) {
//         p1WinCount += 1;
//         p1Wins.innerHTML = `${p1WinCount}`;


//         p2LossCount += 1;
//         p2Losses.innerHTML = `${p2LossCount}`;

//         localStorage.setItem('p1Wins', p1WinCount);
//         localStorage.setItem('p2Losses', p2LossCount);
//         // console.log(`${p1WinCount} p1 won`, `${p2LossCount} p2 lost`);

//     } else if(gameWinner == playerTwo) {
//         p2WinCount +=1;
//         p2Wins.innerHTML = `${p2WinCount}`;


//         p1LossCount += 1;
//         p1Losses.innerHTML = `${p1LossCount}`;

//         localStorage.setItem('p2Wins', p2WinCount);
//         localStorage.setItem('p1Losses', p1LossCount);

//         // console.log(p2WinCount, p1LossCount);


//         // SAHI HAI BHAIIIIII
//         // console.log(`${p2WinCount} p2 won`, `${p1LossCount} p1 lost`);

//         console.log(streakCounter);
//     }


//     // }



    


//     reloadImg.addEventListener('click', ()  => {

//         gridArea.removeChild(currentGrid);



//         gridElementsArray = [];
//         displaySymbolArray = document.getElementsByClassName('display-symbol');


        
//         let newPara = document.createElement('p');
//         newPara.innerText = 'This is where the grid was.';


//         toss();
//         // createGrid();
//         console.log(streakCounter)
    
    

//     });

// }
// }







// function gameResult() {
//     console.log(gameWinner);
// }









// function addNewGrid() {
    

         
//     for(let i = 1; i <= 9; i++) {

//         let newSpan = document.createElement('span');
//         newSpan.classList.add('display-symbol');
    

//         currentGrid = document.createElement('article');
//         currentGrid.classList.add('current-grid');

//         let newDIV = document.createElement('div'); 
//         newDIV.classList.add(`cell`);
//         newDIV.classList.add(`cell-${i}`);

//         newDIV.appendChild(newSpan);

//         currentGrid.appendChild(newDIV);
    
//         gridElementsArray.push(newDIV);


    
//     }
//     gridArea.removeChild(currentGrid);
//     currentGrid = undefined;

//     gridArea.appendChild(currentGrid);

    
// }






// console.log(gridElementsArray);
        // console.log(displaySymbolArray);







/* 

play gain function 
    1. stores names (woh upar hogaye hen) and current score in local storage
    2. clears grid
    3. call playgame function 
    4. calls display result function



    5. toss happens everytime playagain button is pressed
*/










function playAgain() {

    // document.body.style.backgroundColor = 'lightgreen';

   
    // revertValues();

    // toss();

    
    // for(let i=0; i < gridElementsArray.length; i++) {

    //     gridElementsArray[i].style.backgroundImage = 'none';
    //     displaySymbolArray[i].innerHTML = '';



    // }



    // playGame(); 

    // gridArea.removeChild(currentGrid);

    // let newPara = document.createElement('p');
    // newPara.innerHTML = 'This is where the grid used to be.';
    

    
    // gridArea.appendChild(newPara);
    // gridArea.appendChild(gridMaker);
    gridRemover();

    gridAppender();

    // playGame();
}






function revertValues() {

    totalTurns = 9;


    turnCounter = 0;


    tossWinnerState = true;
    tossLoserState = false;



    matchFound = false;
    // console.log(`total turns: ${totalTurns}`);
    // console.log(`turn counter: ${turnCounter}`);
    // console.log(`tossWinner State: ${tossWinnerState}`);
    // console.log(`toss Loser state: ${tossLoserState}`);
    // console.log(`match found: ${matchFound}`);

}



let playerOneName;
let playerTwoName;

let p1PreviousWin;
let p1PreviousLoss;


let p2PreviousWin;
let p2PreviousLoss;



// window.onload = reLoad();

function reLoad() {

    playerOneName = localStorage.getItem('p1');
    playerTwoName = localStorage.getItem('p2');

    console.log(playerOneName);
    console.log(playerTwoName);


    p1PreviousWin = localStorage.getItem('p1Wins');
    p1PreviousLoss = localStorage.getItem('p1Losses');


    p2PreviousWin = localStorage.getItem('p2Wins');
    p2PreviousLoss = localStorage.getItem('p2Losses');

    console.log(` p1 previous win ${p1PreviousWin}, p1 previous loss ${p1PreviousLoss}`);
    console.log(` p2 previous win ${p2PreviousWin}, p2 previous loss ${p2PreviousLoss}`);

}