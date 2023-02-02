const prompt = require('prompt-sync')();

var yourname = prompt("What is your name?");
var wanttoplay = prompt(`Hello ${yourname} do you want to play a game? [Y/N]`);

if (wanttoplay === "N" || wanttoplay === "n") {
    return;

}
let cash = 10;

while(cash > 0){
	console.log("You have $" + cash);

	let bet = 0;
	do{
		bet = prompt("How much would you like to bet?");
		bet = bet * 1;
	}while(bet > cash || isNaN(bet));
	
	let pick = "";
	do{
		pick = prompt("Would you like (H)eads or (T)ails?").toLowerCase();
	}while(pick != "t" && pick != "h");
	
	let coinflip = Math.floor(Math.random() * 2);
	
	if(coinflip == 0){
		console.log("The flip was Heads");
		coinflip = "h";
	}else {
		console.log("The flip was Tails");
		coinflip = "t";
	}
	
	if(coinflip == pick){
		cash += bet;
		console.log("YAAAY! You won $" + bet);
	}else {
		cash -= bet;
		console.log("WRONG! You lost $" + bet);
	}
}