const buttonList = document.querySelectorAll('.button-xo-class');

let turn = 'X';
let xArray = [];
let oArray = [];



function replayFunction() {
    buttonList.forEach(button => {
        button.innerText = '';
        button.disabled = false;
    })
    turn = 'X';
    xArray = [];
    oArray = [];
}


function buttonClick(btnNumber , event){
    let btnDiv = event.target;
    btnDiv.innerHTML = turn;
    btnDiv.disabled = true;

    if (turn === 'X') {
        turn = 'O';
        xArray.push(btnNumber);
    }
    else {
        turn = 'X';
        oArray.push(btnNumber);
    }

    checkWinner();
}


function checkWinner(){

    if (checkArray(xArray , [1,2,3]) || checkArray(xArray , [4,5,6]) || checkArray(xArray , [7,8,9])
        || checkArray(xArray , [1,4,7]) || checkArray(xArray , [2,5,8]) || checkArray(xArray , [3,6,9]) 
        || checkArray(xArray , [1,5,9]) || checkArray(xArray , [3,5,7])) {
            
            alert('X is the Winner.');

            buttonList.forEach(button => {
                button.disabled = true;
            })
        }
        else if(checkArray(xArray , [1,7,2,8,6]) || checkArray(xArray , [1,7,2,5,6]) || checkArray(xArray , [4,8,3,9]) || 
        checkArray(xArray , [1,7,5,8,6]) || checkArray(xArray , [4,2,3,9]) || checkArray(xArray , [4,5,3,9]) || 
        checkArray(xArray , [1,7,2,6,9]) || checkArray(xArray , [4,5,8,3]) || checkArray(xArray , [1,7,8,3,6]) || 
        checkArray(xArray , [4,2,5,9]) || checkArray(xArray , [4,2,8,3,9]) || checkArray(xArray , [1,7,5,6]) || 
        checkArray(xArray , [4,7,2,3,9]) || checkArray(xArray , [1,5,8,6]) || checkArray(xArray , [1,4,8,3,9]) || 
        checkArray(xArray , [7,2,5,6])){
        
            alert('The Game is Over.');

            buttonList.forEach(button => {
                button.disabled = true;
            })
        }


    if (checkArray(oArray , [1,2,3]) || checkArray(oArray , [4,5,6]) || checkArray(oArray , [7,8,9])
        || checkArray(oArray , [1,4,7]) || checkArray(oArray , [2,5,8]) || checkArray(oArray , [3,6,9]) 
        || checkArray(oArray , [1,5,9]) || checkArray(oArray , [3,5,7])) {
            alert('O is the Winner.');

            buttonList.forEach(button => {
                button.disabled = true;
            })
        }
        else if(checkArray(oArray , [1,7,2,8,6]) || checkArray(oArray , [1,7,2,5,6]) || checkArray(oArray , [4,8,3,9]) || 
        checkArray(oArray , [1,7,5,8,6]) || checkArray(oArray , [4,2,3,9]) || checkArray(oArray , [4,5,3,9]) || 
        checkArray(oArray , [1,7,2,6,9]) || checkArray(oArray , [4,5,8,3]) || checkArray(oArray , [1,7,8,3,6]) || 
        checkArray(oArray , [4,2,5,9]) || checkArray(oArray , [4,2,8,3,9]) || checkArray(oArray , [1,7,5,6]) || 
        checkArray(oArray , [4,7,2,3,9]) || checkArray(oArray , [1,5,8,6]) || checkArray(oArray , [1,4,8,3,9]) || 
        checkArray(oArray , [7,2,5,6])){

            alert('The Game is Over.');
        
            buttonList.forEach(button => {
                button.disabled = true;
            })
        }

        
}


function checkArray(myArray , winArray){
    for (const key in winArray) {
        if (!myArray.includes(winArray[key])) {
            return false;
        }  
    }
        return true;
}



