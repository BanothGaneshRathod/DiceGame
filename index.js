var randomNumber1=Math.floor(Math.random()*6)+1;
var diceImg1="images/dice"+randomNumber1+".png";
var img11=document.querySelectorAll("img")[0];
img11.setAttribute("src",diceImg1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var diceImg2="images/dice"+randomNumber2+".png";
var img22=document.querySelectorAll("img")[1];
img22.setAttribute("src",diceImg2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="player 1 wins😁";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="player 2 wins😁";
}
else {
  document.querySelector("h1").innerHTML="draw!";
}
