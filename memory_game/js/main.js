console.log("Up and running!");
var cards = ["queen", "queen","king", "king"];
var cardInPlay = [];
cardsInPlay.push(cards(0));
var checkForMatch = function(){
	if(cardInPlay[0] === cardInPlay[1]) {
		alert("You found a match")
	} else {
		alert("Sorry!Try again.")
	} 	
}
var flipCard = function(cardId){
	console.log("User flipped"+" "+ cards[0])
	checkForMatch();
if (cardInPlay.length===2){	
} else if (cardInPlay.length<2){
	alert("Sorry try again.")
}	
}

flipcard(0);
flipcard(2);