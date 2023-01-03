import Player from '../modules/Player';
import Ship from '../modules/Ship';

test('Players can attack each other', () => {
    const player1 = Player();
    const player2 = Player();

    player1.opponent = player2;

    player1.attack(0, 1);
    expect(player2.gameboard.board[0][1].tried).toBe(true);
})

test('Computer can attack player ship', () => {
    const player = Player();
    const computer = Player();
    const trg = Ship(1);

    player.opponent = computer;
    computer.opponent = player;

    player.gameboard.placeShip(2,2,trg);

    const mockRandomizer = jest.fn().mockReturnValue(2);

    computer.computerAttack(mockRandomizer);
    expect(player.gameboard.lost()).toBe(true);
})

test('Computer will never hit the same spot twice', () => {
    const player =  Player();
    const computer = Player();
    const trg = Ship(1);

    player.opponent = computer;
    computer.opponent = player;

    player.gameboard.placeShip(4,4,trg);

    const mockRandomizer = jest.fn()
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(2)
    .mockReturnValue(4);

    computer.computerAttack(mockRandomizer);
    computer.computerAttack(mockRandomizer);

    expect(player.gameboard.lost()).toBe(true);
})