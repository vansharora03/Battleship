import renderer from "./modules/DOM";

const content = document.querySelector(".content");

renderer(content).setUpUserBoard();
renderer(content).setUpComputerBoard();