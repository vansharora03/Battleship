import Gameboard from '../modules/Gameboard';
import Ship from '../modules/Ship';

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

test('Gameboard can receive attacks', () => {
    const gameboard = new Gameboard();
    gameboard.receiveAttack(5, 4);
    expect(gameboard.board[5][4].tried).toBe(true);
})

test('Gameboard can receive attacks to ships', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(5);
    gameboard.placeShip(2, 3, ship);
    gameboard.receiveAttack(2, 2);
    expect(gameboard.board[2][6].ship.hits).toBe(1);
})

test('Gameboard can return true if all ships have been sunk', () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(1);
    const ship2 = new Ship(2);
    gameboard.placeShip(2, 3, ship1);
    gameboard.placeShip(3, 4, ship2, true);
    gameboard.receiveAttack(2, 3);
    gameboard.receiveAttack(3, 4);
    gameboard.receiveAttack(4, 4);
    expect(gameboard.lost()).toBe(true);
})

test('Gameboard can return false if not all ships have been sunk', () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(1);
    const ship2 = new Ship(2);
    gameboard.placeShip(2, 3, ship1);
    gameboard.placeShip(3, 4, ship2, true);
    gameboard.receiveAttack(2, 3);
    gameboard.receiveAttack(4, 4);
    expect(gameboard.lost()).toBe(false);
})

test('Gameboard can prevent ships from placing overlapping ships', () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);
    gameboard.placeShip(1, 0, ship1);
    expect(gameboard.placeShip(0, 1, ship2, true)).toBe(false);
    
})
    