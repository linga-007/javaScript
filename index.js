var player1 = (Math.random()*6)+1;
player1 = Math.floor(player1);
console.log(player1);

var player2 = (Math.random()*6);
player2=Math.ceil(player2); 

var player1img = "dice" + player1 + ".png";
var player2img = "dice" + player2 + ".png";

var imgsource1 = "images/" + player1img ;
var imgsource2 = "images/" + player2img ;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",imgsource1);

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",imgsource2);




if(player1>player2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if(player2>player1){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "draw";
}
  