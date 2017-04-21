console.log("Up and running");
var cards =["queen","queen","king","king"];
var cardsInPlay = [];
cardsInPlay.push(cards[0]);
cardsInPlay.push(cards[2]);
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!")
	} else {
		alert("Sorry,try again")
	}
}
var flipcard = function(cardId){
	console.log("User flipped" + " "+ cards[0] || "User flipped" + " " + cards[2])
if (cardsInPlay.length === 2){
	checkForMatch();
}
else if (cardsInPlay.length < 2){
	console.log("Sorry,try again")
};
}
flipcard(0);
flipcard(2);