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

    return{setUpUserBoard, setUpComputerBoard}
}

export default renderer;