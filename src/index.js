import renderer from "./modules/DOM";

const content = document.querySelector(".content");
const startGameBtn = document.querySelector(".start-game-btn");

const contentRender = renderer(content);

contentRender.setUpUserBoard();
contentRender.setUpComputerBoard();

startGameBtn.addEventListener("click", () => {
    contentRender.startGame();
})

