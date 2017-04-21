console.log("Up and running");
var cards =["queen","queen","king","king"];
var cardsInPlay = [];
cardsInPlay.push('cardOne');
cardsInPlay.push('cardThree');
console.log("User flipped" + " " + cards[0]);
console.log("User flipped" + " " + cards[2]);
if (cardsInPlay.length === 2){
	if (cards[0] === cards[1]){
		alert("You found a match!")
	} else {
		alert("Sorry,try again")
	}
}
