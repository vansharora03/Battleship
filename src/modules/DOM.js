import Ship from "./Ship";
import Player from "./Player";

/**
 * Contains functions to set up the game
 * @param {} content 
 */
const renderer = function (content) {

    //Set up players
    const user = Player();
    const computer = Player();
    user.opponent = computer;
    computer.opponent = user;

    //keep track of turns
    let turn = user;

    /**
     * Render the user's gameboard
     */
    const setUpUserBoard = function() {
        const userBoard = document.createElement("div");
        userBoard.classList.add("user-board");

        for(let i = 0; i < user.gameboard.board.length; i++) {
            for(let j = 0; j < user.gameboard.board[i].length; j++) {
                const userBoardSquare = document.createElement("div");
                userBoardSquare.classList.add("user-board-square");
                userBoardSquare.dataset.x = j;
                userBoardSquare.dataset.y = i;
                userBoard.appendChild(userBoardSquare);
            }
        }

        content.appendChild(userBoard);
    }


    /**
     * Automatically place and render a ship for testing purposes
     */
    const autoPlaceShips = function() {
        const ship1 = new Ship(2);
        const ship2 = new Ship(3);
        const ship3 = new Ship(5);


        //place ships on the gameboard
        user.gameboard.placeShip(0, 0, ship1);
        user.gameboard.placeShip(3, 1, ship2);
        user.gameboard.placeShip(2, 5, ship3, true);

        //re-render ships
        renderShips(user);

    }

    /**
     * Automatically place and render computer ships
     */
    const autoPlaceComputerShips = function() {
        const computerShip = new Ship(2);
        const computerShip2 = new Ship(3);
        const computerShip3 = new Ship(5);

        //place computer ships on the gameboard
        computer.gameboard.placeShip(0, 0, computerShip);
        computer.gameboard.placeShip(3, 1, computerShip2);
        computer.gameboard.placeShip(2, 5, computerShip3, true);

        //re-render computer ships
        renderShips(computer);

    }

    /**
     * Render player's ships
     */
    const renderShips = function(player) {
        const squareClass = player == user? '.user-board-square' : '.computer-board-square'
        const squares = document.querySelectorAll(squareClass);
        squares.forEach(square => {
            const gameSquareStatus = player.gameboard.board[parseInt(square.dataset.y)][parseInt(square.dataset.x)];
            if(gameSquareStatus.ship !== null) {
                square.classList.add("ship");
                if(gameSquareStatus.tried) {
                    square.classList.remove("ship");
                    square.classList.add("damaged-ship");
                }
            }
            else {
                if(gameSquareStatus.tried) {
                    square.classList.add("missed");
                }
            }
        })
    }

    /**
     * Render the computer's gameboard
     */
    const setUpComputerBoard = function() {
        const computerBoard = document.createElement("div");
        computerBoard.classList.add("computer-board");

        for(let i = 0; i < computer.gameboard.board.length; i++) {
            for(let j = 0; j < computer.gameboard.board[i].length; j++) {
                const computerBoardSquare = document.createElement("div");
                computerBoardSquare.classList.add("computer-board-square");
                computerBoardSquare.dataset.x = j;
                computerBoardSquare.dataset.y = i;
                computerBoard.appendChild(computerBoardSquare);
            }
        }
        content.appendChild(computerBoard);
    }

    /**
     * Allow player to attack opponent;
     */
    const readyToAttack = function(player) {
        let opponent = player.opponent;
        const opponentSquareClass = opponent == user? '.user-board-square' : '.computer-board-square';
        const squares = document.querySelectorAll(opponentSquareClass);
        const gameStatus = document.querySelector('.game-status');
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if(turn !== player) {
                    return;
                }
                let attack = opponent.gameboard.receiveAttack(parseInt(square.dataset.x), parseInt(square.dataset.y));
                if(attack && opponent.gameboard.board[parseInt(square.dataset.y)][parseInt(square.dataset.x)].ship !== null) {
                    gameStatus.textContent = "Ship damaged!"
                    if(opponent.gameboard.lost()) {
                        gameStatus.textContent = "You win!";
                    }
                }
                else if(attack) {
                    gameStatus.textContent = "Miss!"
                }
                else {
                    gameStatus.textContent = "Already struck here! Try again."
                }
                renderShips(opponent);
                if(attack === true) {
                    turn = opponent;
                }
            })
        });

    }


    /**
     * Begin game loop
     */
    const startGame = function(){

        //place ships
        autoPlaceShips();
        autoPlaceComputerShips();

        //ready attack listeners
        readyToAttack(user);
        readyToAttack(computer);
    }

    

    return{setUpUserBoard, setUpComputerBoard, startGame}
}

export default renderer;