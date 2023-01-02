import Gameboard from './Gameboard';
import Ship from './Ship';

test('Gameboard should have a height of 7', () => {
    const gameboard = new Gameboard();
    expect(gameboard.board.length).toBe(7);
})

test('Gameboard should have a width of 7', () => {
    const gameboard = new Gameboard();
    expect(gameboard.board[0].length).toBe(7);
})

test('Gameboard should have no ships by default', () => {
    const gameboard = new Gameboard();
    expect(gameboard.board[0][0].ship).toBe(null);
})

test('Gameboard should have no tries by default', () => {
    const gameboard = new Gameboard();
    expect(gameboard.board[0][0].tried).toBe(false);
})

test('Gameboard should be able to place ships', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    gameboard.placeShip(0, 1, ship);
    expect(gameboard.board[0][2].ship).toBe(ship);
})

test('Gameboard should be able to place ships horizontally', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    gameboard.placeShip(0, 1, ship, true);
    expect(gameboard.board[2][1].ship).toBe(ship);

})

test('Gameboard should be able to shift ship placement if placement is beyond board range', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    gameboard.placeShip(0, 5, ship);
    expect(gameboard.board[0][4].ship).toBe(ship);
})

test('Gameboard should be able to shift ship placement if placement is beyond board range, horizontally', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(5);
    gameboard.placeShip(4, 0, ship, true);
    expect(gameboard.board[2][0].ship).toBe(ship);
})
