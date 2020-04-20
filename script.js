const userName = prompt('Enter your name maester:', 'Grand Maester');

function getComputerResponse() {

    const responseList = ['rock', 'paper', 'scissor'];
    let compResponse = responseList[Math.floor(Math.random() * 3)];
    return compResponse;
}

function playRound(userResponse, compResponse) {
    //returns the result of a single round
    
                
    if (userResponse === compResponse) {
        return 'draw';
    } else if (userResponse === 'rock') {
        if (compResponse === 'paper') {                        
            return 'lose';
        } else {                        
            return 'win';
        }
    } else if (userResponse === 'paper') {
        if (compResponse === 'scissor') {                        
            return 'lose';
        } else {                        
            return 'win';
        }
    } else if (userResponse === 'scissor') {
        if (compResponse === 'rock') {
            return 'lose';
        } else {
            return 'win';
        }
    }
}
let win = 0, draw = 0, lose = 0;
function game(userResponse) {
    //Plays the game n times; Displays results in the console after each round
    
    
    if (win < 5 && lose < 5) {
        compResponse = getComputerResponse();
        
        let result = playRound(userResponse, compResponse);
        let para = document.createElement('p');
        const resultInfo = document.querySelector('.result');
        switch (result) {
            case 'win':
                win++;
                para.textContent = `${userName} wins.\nComputer's move = ${compResponse.toUpperCase()}\t\t${userName}'s move = ${userResponse.toUpperCase()}\nScore:\t${win}-${lose}`
                break;
            
            case 'draw':
                draw++;
                para.textContent = `It's a draw.\nComputer's move = ${compResponse.toUpperCase()}\t\t${userName}'s move = ${userResponse.toUpperCase()}\nScore:\t${win}-${lose}`
                
                break;

            case 'lose':
                lose++;
                para.textContent = `${userName} loses  :(\nComputer's move = ${compResponse.toUpperCase()}\t\t${userName}'s move = ${userResponse.toUpperCase()}\nScore:\t${win}-${lose}`
                
                break;
        }
        
        resultInfo.appendChild(para);

      
    } else {
        const stats = document.querySelector('.stats');
        const para = document.createElement('p');
        const h1 = document.createElement('h1');

        if (win > 5) {
            h1.textContent = 'YOU WIN!!!'
        } else {
            h1.textContent = 'YOU LOSE!'
        }

        para.textContent = `Stats:\n\tWins: ${win}\n\tLost: ${lose}\n\tDraws: ${draw}`
        
        stats.appendChild(h1);
        stats.appendChild(para);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button => {
    button.addEventListener('click', function() {
        game(button.getAttribute('id'))
    })
}))