function startGame() {
  // starting a new game
  var messagesElement = document.getElementById('messages');
  // non-null assertion operator
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  
}

document.getElementById('startGame')!.addEventListener('click', startGame);

/* Compiling this ts file into js:
    In terminal, navigate to the root folder for this file ("app")
    Run the command tsc app.ts
*/