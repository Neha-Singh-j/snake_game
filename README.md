# snake_game
Snake Game
This is a classic Snake Game built with JavaScript, HTML, and CSS. The game allows players to control a snake that moves around the screen, eating food, growing in size, and avoiding walls and its own tail.
#Demo
https://snake-game-cyan-psi.vercel.app/
<h2>Features:</h2>
Classic Snake Gameplay: Navigate the snake to eat food and grow.
Sound Effects: Includes sound effects for movement, food consumption, and game over.
High Score: The game saves and displays your highest score locally.
Responsive Design: The game is responsive to various screen sizes.
Background Music: Includes background music for a more immersive experience.
<h2>Gameplay:</h2>
Arrow Keys: Use the arrow keys (Up, Down, Left, Right) to control the snake.
Objective: The goal is to eat food to grow the snake while avoiding collisions with walls or the snake's own body.
Game Over: The game ends when the snake hits the wall or itself.
High Score: Your high score will be saved locally and displayed at the top of the game.

<h2>Installation:</h2>
Clone this repository to your local machine:

bash
Copy
Edit
git clone https://github.com//Neha-Singh-j/snake_game
Open the project folder and open the index.html file in a browser.

The game should be ready to play!

<h2>How It Works:</h2>
The game logic is controlled using JavaScript. Here's an overview of the main components:

Movement: The snake's direction is controlled using the arrow keys, with the direction stored in the inputDir object.
Food: The food is randomly placed on the grid, and when the snake eats it, it grows.
Collision Detection: The game checks if the snake collides with itself or the walls, which triggers a game over.
Score Tracking: The current score is tracked based on the number of food items the snake eats, and the high score is saved using localStorage.
Game Mechanics:
Snake Movement: The snake moves by adding new segments to its body. The head of the snake is always moved based on the current direction.
Speed: The speed of the game can be adjusted using the speed variable.
Sound Effects: Several sounds are used throughout the game for different actions:
eat.wav: Played when the snake eats food.
turn.wav: Played when the snake changes direction.
endgame.mp3: Played when the game ends.
bg.mp3: Background music played during the game.

<h2>Code Structure:</h2>
JavaScript:

Handles the game logic such as snake movement, collision detection, score tracking, and sound effects.
Manages the high score and local storage.

HTML (index.html):

Contains the basic structure of the game, including the game board.
<br>
CSS (style.css):

Styles the game board and the snake, giving it a classic look.
<br>
<h2>Local Storage:</h2>
The high score is saved using localStorage. When the game ends, the score is compared with the existing high score, and if it's higher, it's saved.
Screenshots:
