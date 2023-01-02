import Ship from './Ship';


/**
 * A component of the Gameboard that contains a ship(or null)
 */
const Target = function() {
    let ship = null;
    let tried = false;

    return{ship, tried};
}

/**
 * A 7x7 grid of target objects that contains ships
 */
const Gameboard = function() {
    /**
     * Initialize a gameboard with nXn dimensions
     * @param {*} n 
     * @returns 
     */
    const initializeBoard = function(n) {
        let grid = [];
        for(let i = 0; i < n; i++) {
            grid[i] = [];
            for(let j = 0; j < n; j++) {
                grid[i][j] = Target();
            }
        }
        return grid;
    }
    
    let board = initializeBoard(7);
    
    //Store the board's ships
    let ships = [];

    /**
     * Place a ship on board at coordinates specified either vertically or horizontally
     * @param {*} x 
     * @param {*} y 
     * @param {*} ship 
     * @param {*} horizontal 
     */
    const placeShip = function(x, y, ship, horizontal=false) {
        this.ships.push(ship);
        let start = [x, y];
        if(horizontal) {
            if(x + ship.length - 1 >= 7) {
                start = [7 - ship.length, y];
            }
            let startingY = start[1];
            let startingX = start[0];
    
            for(let i = 0; i < ship.length; i++) {
                this.board[startingX + i][startingY].ship = ship;
            }
        }
        else {
            if(y + ship.length - 1 >= 7) {
                start = [x, 7 - ship.length];
            }
            let startingY = start[1];
            let startingX = start[0];
    
            for(let i = 0; i < ship.length; i++) {
                this.board[startingX][startingY + i].ship = ship;
            }
        }
        
    }



    return{board, placeShip, ships};
}

export default Gameboard;