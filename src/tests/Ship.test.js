import Ship from "../modules/Ship";

test('Ship should have proper length', () => {
    const ship = Ship(3);
    expect(ship.length).toBe(3);
})

test('Ship should take hits', () => {
    const ship = Ship(1);
    ship.hit();
    expect(ship.hits).toBe(1);
})

test('Ship should not be sunk', () => {
    const ship = Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
})

test('Ship should be sunk', () => {
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})

test('Ship should not take more hits than length', () => {
    const ship = Ship(3);
    [1, 2, 3, 4].forEach(() => ship.hit());
    expect(ship.hits).toBe(3);
})