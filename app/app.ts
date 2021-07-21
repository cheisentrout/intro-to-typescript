// / <reference path="player.ts" />
// / <reference path="game.ts" />

import { Player } from './player'
import { Game } from './game'
import { Utility } from './utility'

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
  const player: Player = new Player();
  player.name = Utility.getInputValue('playername');

  const problemCount: number = Number(Utility.getInputValue('problemCount'));
  const factor: number = Number(Utility.getInputValue('factor'));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
  newGame.calculateScore();
});

/*===================================================================================
  NOTES AND EXAMPLES
====================================================================================*/

// // triple-slash directive

// /// <reference path="player.ts" />


// function startGame() {

//   let playerName: string | undefined = getInputValue('playername');
//   logPlayer(playerName)
//   // starting a new game
//   // var messagesElement = document.getElementById('messages');

//   // within the scope of the conditional, the messagesElement variable can ONLY be a string! Within the else statement, it WILL be an HTMLElement only:
//   // if (typeof messagesElement === 'string') {
//   //   return messagesElement
//   // } else {
//   //   return messagesElement
//   // }
 
//   // non-null assertion operator:
//   // messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  
//   postScore(100, playerName)
//   postScore(-5, playerName)
// }

// // "void" below says - this function has a return value of void
// function logPlayer(name: string) : void {
//   console.log(`New game starting for player ${name}!`); 
// }

// function getInputValue(elementID: string): string | undefined {
//   const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID)

//   if (inputElement.value === "") {
//     return undefined
//   } else {
//     return inputElement.value
//   }
// }

// // question mark after playerName specifies that it's an optional parameter
// function postScore(score: number, playerName?: string): void {

//   let logger: (value: string) => void;

//   if (score < 0) {
//     logger = logError
//   } else {
//     logger = logMessage
//   }

//   logger(`Score: ${score}`)

//   const scoreElement: HTMLElement | null = document.getElementById('postedScores')
//   scoreElement!.innerText = `${score} - ${playerName}`
// }

// document.getElementById('startGame')!.addEventListener('click', startGame);

// // function return type is not necessary for arrow functions
// const logMessage = (message: string) => console.log(message) 

// function logError(err: string): void {
//   console.log(err);  
// }

// const firstPlayer: Player = new Player()
// firstPlayer.name = "Doofus"
// console.log(firstPlayer.formatName());


// An object literal with the custom type of "Result" as defined in the result.ts file:
// let myResult: Result = {
//     playerName: 'Marie',
//     score: 5,
//     problemCount: 5,
//     factor: 7,
// };

// let player: Person = {
//   name: "Daniel",
//   formatName: () => "Dan"
// }

/* COMPILING this ts file manually into js:
    In terminal, navigate to the root folder for this file ("app")
    Run the command tsc app.ts
*/

// ARROW FUNCTION TS SYNTAX:
// let squareIt = (x: number) => x * x;

// let add = (a: number, b: number) => a + b


// INTERFACE EXAMPLE:

// interface Employee {
//   name: string;
//   title: string;
// }

// interface Manager extends Employee {
//   department: string;
//   numOfEmployees: number;
//   scheduleMeeting: (topic: string) => void;
// }

// let developer = {
//   name: 'Michelle',
//   title: 'Developer',
//   editor: 'VSCode'
// }