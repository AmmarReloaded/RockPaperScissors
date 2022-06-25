
const h1_result_value = document.querySelector( "#h1-result-value" )


function computerPlay () {
    
    let computerChoice = Math.random();
    console.log(computerChoice)

    let computerChoiceValue = ''

    if (computerChoice <= 0.3) {
        console.log("rock")
        computerChoiceValue = "rock"
    }

    else if (computerChoice < 0.6) {
        console.log("paper")
        computerChoiceValue = "paper"
    }
    else {
        console.log("scissors")
        computerChoiceValue = "scissors"
    }

    return computerChoiceValue
}

const result_value = ''

// Main flow of program
function playerSelection ( event ) {

    console.log(event.target)
    console.log(event.target.value);

    // result_value = play(event.target.value, computerPlay)

    // console.log(" HELLO ? " + result_value)

     h1_result_value.textContent = play();
}


function play (player, computer) {
    
     console.log("Player wins"); 

     return "Player Wwwwinssss"
}


const btn_rock = document.querySelector('#btn-rock');
const btn_paper = document.querySelector('#btn-paper');
const btn_scissors = document.querySelector('#btn-scissors');



btn_rock.addEventListener( 'click', (e) => {
    playerSelection(e)
} )


btn_paper.addEventListener( 'click', (e) => {
    playerSelection(e)
} )


btn_scissors.addEventListener( 'click', (e) => {
    playerSelection(e)
} )






