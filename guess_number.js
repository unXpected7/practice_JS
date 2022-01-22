const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    alert ("Game started")
    play()
    final()
} )

let scorep1 = 0;
let scorep2 = 0;
let player1;
let player2;



//plot game
function game (){
    player1 = prompt("Player 1 : input a number between 1- 3")
    player2 = prompt("Player 2 : input a number between 1- 3")
    number = Math.floor(Math.random()*3)+1

    //validation number
    if(!/^[0-9]+$/.test(player1)||!/^[0-9]+$/.test(player2)){ // use Regular Expressions
        alert("your guess must a number")
        if(confirm("wanna try again?")){
            return game()
        }
        else{
            alert("Come On, Lets Try Again")
        }
    }
        
    //validation same number
    else if(player1==player2){
        alert("don't use the same number")
        if(confirm("wanna try again?")){
            return game()
        }
        else{
            alert("Come On, Lets Try Again")
        }
    }
    //validation number less than 1
    else if(player1 < 1 || player2 < 1){
        alert("your guess less than 1")
        if(confirm("Wanna try again?")){
            return game()
        }
        else{
            alert("Come On, Lets Try Again")
        }
    }

    //player1 guess right number
    else if(number==player1){
        scorep1 = scorep1 +1
        alert("player 1 has guess the right number")
        alert("the right number is:" + number + "\n" + "score now is" + "\n" + "player 1 =" + scorep1 + "\n" + "player 2 =" + scorep2)
        next()
    }
    //player2 guess right number
    else if(number==player2){
        scorep1 = scorep2 +1
        alert("player 2 has guess the right number")
        alert("the right number is:" + number + "\n" + "score now is" + "\n" + "player 1 =" + scorep1 + "\n" + "player 2 =" + scorep2)
        next()
    }
    //player 1 & 2 guess wrong number
    else if(number!=player1 && number!=player2){
        alert("nothing player guess the right number" +"\n" + "you guys draw")
        alert("the right number is:" + number + "\n" + "score now is" + "\n" + "player 1 =" + scorep1 + "\n" + "player 2 =" + scorep2)
    }
}

// Final Round
function final(){
    if(scorep1 > scorep2){
        alert("Player 1 Won" + "\n" + "The Final Score Is :" + "\n" + "Player 1 =" + scorep1 + "\n" + "Player 2 =" + scorep2 )
    }
    else if(scorep2 > scorep1){
        alert("Player 2 Won" + "\n" + "The Final Score Is :" + "\n" + "Player 1 =" + scorep1 + "\n" + "Player 2 =" + scorep2 )
    }
    else{
        alert("The Final Score Is Draw" + "\n" + "The Final Score Is :" + "\n" + "Player 1 =" + scorep1 + "\n" + "Player 2 =" + scorep2)
    }
}

    // function next
    function next(){
        if(confirm("Wanna next round??")){
            return
        }
        else{
            alert("Come On, Lets Try Again")
        }
    }
    //play 5 round
function play(){
    let i=1;
    do {
        alert("Round" + i)
        game(i)
        i++
    }
    while(i<6)
    return final()
}