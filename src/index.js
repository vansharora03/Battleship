import renderer from "./modules/DOM";

const content = document.querySelector(".content");
const startGameBtn = document.querySelector(".startGameBtn");

const contentRender = renderer(content);

contentRender.setUpUserBoard();
contentRender.setUpComputerBoard();

startGameBtn.addEventListener("click", () => {
    contentRender.startGame();
})

