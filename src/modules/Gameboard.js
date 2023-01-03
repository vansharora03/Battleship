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
     * Place a ship on board at coordinates specified 
     * either vertically or horizontally, return false if
     * placing this ship will overlap with another
     * @param {*} x 
     * @param {*} y 
     * @param {*} length 
     * @param {*} horizontal 
     */
    const placeShip = function(x, y, shipNew, horizontal=false) {
        
        let start = [x, y];
        if(horizontal) {
            if(x + shipNew.length - 1 >= 7) {
                start = [7 - shipNew.length, y];
            }
            let startingY = start[1];
            let startingX = start[0];

            //Check for overlap
            for(let i = 0; i < shipNew.length; i++) {
                if(this.board[startingY][startingX + i].ship) {
                    return false;
                }
            }

            this.ships.push(shipNew);
    
            for(let i = 0; i < shipNew.length; i++) {
                this.board[startingY][startingX + i].ship = shipNew;
            }
        }
        else {
            if(y + shipNew.length - 1 >= 7) {
                start = [x, 7 - shipNew.length];
            }
            let startingY = start[1];
            let startingX = start[0];

            //Check for overlap
            for(let i = 0; i < shipNew.length; i++) {
                if(this.board[startingY + i][startingX].ship) {
                    return false;
                }
            }

            this.ships.push(shipNew);
    
            for(let i = 0; i < shipNew.length; i++) {
                this.board[startingY + i][startingX].ship = shipNew;
            }
        }
        return true;
    }

    /**
     * Try to attack a coordinate, if has been tried already, do nothing
     * @param {*} x 
     * @param {*} y 
     */
    const receiveAttack = function(x, y) {
        let toAttack = this.board[y][x];

        if(toAttack.tried) {
            return;
        }
        toAttack.tried = true;
        if(toAttack.ship !== null) {
            toAttack.ship.hit();
        }
    }

    /**
     * Return whether all ships have been sunk or not
     */
    const lost = function() {
        let ships = this.ships;
        return ships.every((ship) => ship.isSunk());
    }



    return{board, ships, placeShip, receiveAttack, lost};
}

export default Gameboard;