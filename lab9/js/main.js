function initializeDeck(){

	var hearts = new Array();
	var clubs = new Array();
	var spades = new Array();
	var diamonds = new Array();
	var sorted_deck = new Array();

	for(var i = 1; i <= 13; i++){

		hearts[i] = new Image();
		clubs[i] = new Image();
		spades[i] = new Image();
		diamonds[i] = new Image();

		hearts[i].src = 'card_assets/'+i+'H.png';
		clubs[i].src = 'card_assets/'+i+'C.png';
		spades[i].src = 'card_assets/'+i+'S.png';
		diamonds[i].src = 'card_assets/'+i+'D.png';

	}

		sorted_deck = sorted_deck.concat(hearts);
		sorted_deck = sorted_deck.concat(clubs);
		sorted_deck = sorted_deck.concat(spades);
		sorted_deck = sorted_deck.concat(diamonds);
		

		/* sorted_deck currently has an undefined element in index 0 of each of the suit sets*/
		shuffleDeck(sorted_deck);
}

//parameter
// @param {Array} player_hand  
function checkForHands(player_hand){





}

// @param {Array} current_deck the array of cards in a certain order
function shuffleDeck(current_deck){

	var j, x;

	for(var i = current_deck.length; i; i--){

		j = Math.floor(Math.random() * i);
		x = current_deck[i - 1];
		current_deck[i - 1] = current_deck[j];
		current_deck[j] = x;
	}
	for(var i = 0; i < current_deck.length; i++){
		console.log(current_deck[i]);
	}
	return current_deck

}

function dealCards(){

}

initializeDeck();