function diceRoller(){
    if(player1!==""){
        var player1 = prompt("Enter player 1 name : ");
    }
    if(player2 !== ""){
        var player2 = prompt("Enter player 2 name : ");
    }
    var randomNum1 = Math.floor((Math.random(0,6))*6)+1;
    var randomNum2 = Math.floor((Math.random(0,6))*6)+1;
    var newImg1 = "images/dice"+randomNum1+".png";
    var newImg2 = "images/dice"+randomNum2+".png";
    document.querySelector("img.img1").src = newImg1;
    document.querySelector("img.img2").src = newImg2;
    if(randomNum1 > randomNum2){
        document.querySelector("h1").innerHTML = "🚩"+player1+" Win."
    }else if(randomNum1 < randomNum2){
        document.querySelector("h1").innerHTML = "🚩"+player2+" Win."
    }else{
        document.querySelector("h1").innerHTML = "Draw"
    }
}
