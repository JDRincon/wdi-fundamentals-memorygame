var cards =[
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
	];
var cardsInPlay = [];
cardsInPlay.push(cards[0].rank);
	console.log(cards[0].cardImage);
	console.log(cards[0].suit);
cardsInPlay.push(cards[2].rank);
	console.log(cards[2].cardImage);
	console.log(cards[2].suit);
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!")
	} else {
		alert("Sorry,try again")
	}
}
var flipcard = function(cardId){
	console.log("User flipped" + " "+ cards[0].rank || "User flipped" + " " + cards[2].rank)
if (cardsInPlay.length === 2){
	checkForMatch();
}
else if (cardsInPlay.length < 2){
	console.log("Sorry,try again")
};
}
flipcard(0);
flipcard(2);