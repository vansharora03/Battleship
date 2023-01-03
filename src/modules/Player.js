import Ship from "./Ship";
import Gameboard from "./Gameboard";

const Player = function () {
    const gameboard = Gameboard();
    const opponent = null;

    const alreadyHit = new Set();

    /**
     * Attack the opponent at x, y coordinates
     * @param {*} x 
     * @param {*} y 
     */
    const attack = function(x, y) {
        if(!alreadyHit.has(this.opponent.gameboard.board[x][y])) {
            this.opponent.gameboard.receiveAttack(x, y);
            alreadyHit.add(this.opponent.gameboard.board[x][y]);
        }
    }

    const _randomizer = function(n) {
        return Math.floor(Math.random() * n);
    }

    const computerAttack = function(randomizer=_randomizer) {
        let x = randomizer(7);
        let y = randomizer(7);
        if(!alreadyHit.has(this.opponent.gameboard.board[x][y])) {
            attack.call(this, x, y)
            alreadyHit.add(this.opponent.gameboard.board[x][y]);
        }
        else{
            computerAttack.call(this, randomizer);
        }
    }
    
    return {gameboard, opponent, attack, computerAttack};
}


export default Player;