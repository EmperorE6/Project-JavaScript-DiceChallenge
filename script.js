let imageOne=document.querySelector(".img1")
let imageTwo=document.querySelector(".img2")
let heading=document.querySelector("h1");


window.onload=function (){
Shuffle();
}

function Shuffle(){

    let arrayImages=["/images/dice1.png","/images/dice2.png","/images/dice3.png","/images/dice4.png","/images/dice5.png","/images/dice6.png"];
    let arrayImagesSecond=["/images/dice1.png","/images/dice2.png","/images/dice3.png","/images/dice4.png","/images/dice5.png","/images/dice6.png"];

    let randomImage=Math.floor(Math.random()*arrayImages.length)
    let randomImageSecond=Math.floor(Math.random()*arrayImagesSecond.length)

imageOne.setAttribute("src",arrayImages[randomImage])
imageTwo.setAttribute("src",arrayImages[randomImageSecond])

if(randomImage=== randomImageSecond){
heading.textContent="Draw!"
}else if(randomImage > randomImageSecond){
    heading.textContent="Player 1 Won!";
}else if(randomImage < randomImageSecond){
    heading.textContent="Player 2 Won!";
}

}