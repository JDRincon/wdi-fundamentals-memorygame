console.log("Up and running!");
var cards = [
	{
		rank: "queen",
		suit: "hearts"
		cardImage: "images/queen-of-hearts.png"
	}
	{
		rank: "queen",
		suit: "diamonds"
		cardImage: "images/queen-of-diamonds.png"
	}
	{
		rank: "king",
		suit: "hearts"
		cardImage: "images/king-of-hearts.png"
	}
	{
		rank: "king",
		suit: "diamonds"
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardInPlay = [];
cardsInPlay.push("queen"|| "king".rank]);
var checkForMatch = function(){
	if(cardInPlay[0] === cardInPlay[1]) {
		alert("You found a match")
	} else {
		alert("Sorry!Try again.")
	} 	
}
var flipCard = function(cardId){
	console.log("User flipped"+" "+ cards[cardId].rank);
	console.log(cards.cardImage);
	console.log(cards.suit);
	checkForMatch();
if (cardInPlay.length===2){	
} else if (cardInPlay.length<2){
	alert("Sorry try again.")
}	
}
var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var createElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		.setAttribute('data-id,i);
	}
}
flipcard(0);
flipcard(2);