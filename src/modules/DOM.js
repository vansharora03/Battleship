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

    //game status message
    const gameStatus = document.querySelector(".game-status");


    //Keep track of placeable ships and which ship is being placed
    const toPlace = [Ship(2), Ship(1), Ship(3)];
    let shipNumber = 0;

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
     * Add placeable style depending on the length of the ship
     * @param {*} e 
     */
    const addPlaceableStyle = function (e) {
        let length = toPlace[shipNumber].length;
        const squares = document.querySelectorAll(".user-board-square");
        let x = parseInt(e.target.dataset.x);
        let y = parseInt(e.target.dataset.y);
        let start = [x, y];

        if(y + length - 1 >= 7) {
            start = [x, 7 - length];
        }
        let startingY = start[1];
        let startingX = start[0];

        //Check for overlap
        for(let i = 0; i < length; i++) {
            if(user.gameboard.board[startingY + i][startingX].ship) {
                e.target.classList.add('not-placeable');
                e.target.addEventListener('mouseout', () => {
                    e.target.classList.remove('not-placeable');
                })
                return;
            }
        }

        let placeables = new Set();

        for(let i = 0; i < length; i++) {
            squares.forEach(square => {
                if(square.dataset.y === (startingY + i)+"" && square.dataset.x === startingX+"") {
                    square.classList.add('placeable');
                    placeables.add(square);

                }
                e.target.addEventListener('mouseout', () => {
                    placeables.forEach( square => {
                        placeables.delete(square);
                        square.classList.remove('placeable');
                    }
                    )
                })
            })
        }
    }

    /**
     * Place ship, then check if ready to start game
     */
    const placeShip = function(e) {
        if(e.target.classList.contains('not-placeable')) {
            return;
        }
        let ship = toPlace[shipNumber];
        let placed = user.gameboard.placeShip(parseInt(e.target.dataset.x), parseInt(e.target.dataset.y), ship);
        renderShips(user);
        shipNumber++;
        if(shipNumber >= toPlace.length) {
            const squares = document.querySelectorAll(".user-board-square");
            squares.forEach(square => {
                square.removeEventListener('mouseover', addPlaceableStyle);
                square.removeEventListener('click', placeShip);
            });
            beginBattle();
        }
        else {
            gameStatus.textContent =  `Place your ${toPlace[shipNumber].length}-length ship`;
        }
    }

    const beginBattle = function() {
        gameStatus.textContent = `Strike the enemy!`
        readyToAttack(user);
    }


    /**
     * Allow manual placement of ships
     */
    const manuallyPlaceShip = function() {
        const squares = document.querySelectorAll(".user-board-square");
        
        squares.forEach(square => {
            //mouse over and see if placeable
            square.addEventListener("mouseover", addPlaceableStyle);
            //click and place
            square.addEventListener("click", placeShip);
        });


    }

    /**
     * Computer strikes 
     */
    const computerMove = function () {
        if(turn !== computer) {
            return;
        }
        computer.computerAttack();

        renderShips(computer.opponent);
        if(computer.opponent.gameboard.lost()) {
            document.querySelector('.game-status').textContent = "Computer wins!";
        }

        turn = computer.opponent;
        
    }

    /**
     * Allow player to attack opponent;
     */
    const readyToAttack = function(player, cpuPlaying=true) {
        let opponent = player.opponent;
        const opponentSquareClass = opponent == user? '.user-board-square' : '.computer-board-square';
        const squares = document.querySelectorAll(opponentSquareClass);
        const gameStatus = document.querySelector('.game-status');
        squares.forEach(square => {
            square.addEventListener('click', (e) => {
                if(turn !== player) {
                    return;
                }
                let attack = player.attack(parseInt(square.dataset.x), parseInt(square.dataset.y));
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
                    if(cpuPlaying === true) {
                        computerMove();
                    }
                }
            })
        });

    }


    /**
     * Begin game loop
     */
    const startGameAuto = function(){
        //place ships
        autoPlaceShips();
        autoPlaceComputerShips();

        //ready attack listeners
        readyToAttack(user);
    }

    const startGame = function() {
        const startGameBtn = document.querySelector(".start-game-btn");
        startGameBtn.style.visibility = 'hidden';
        document.querySelector(".game-status").textContent = `Place your ${toPlace[shipNumber].length}-length ship`;
        //place ships
        //place computer ship
        autoPlaceComputerShips();

        //begin user placement, and then begin game
        manuallyPlaceShip();

    }

    

    return{setUpUserBoard, setUpComputerBoard, startGameAuto, startGame}
}

export default renderer;