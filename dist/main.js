/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> :root {\\n|     --user-ship-color : blue;\\n|     --grid-border-color : black;\");\n\n//# sourceURL=webpack://battleship/./src/assets/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM */ \"./src/modules/DOM.js\");\n\r\n\r\nconst content = document.querySelector(\".content\");\r\nconst startGameBtn = document.querySelector(\".start-game-btn\");\r\n\r\nconst contentRender = (0,_modules_DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\r\n\r\ncontentRender.setUpUserBoard();\r\ncontentRender.setUpComputerBoard();\r\n\r\nstartGameBtn.addEventListener(\"click\", () => {\r\n    contentRender.startGame();\r\n})\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/modules/Player.js\");\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n/**\r\n * Contains functions to set up the game\r\n * @param {} content \r\n */\r\nconst renderer = function (content) {\r\n\r\n    //Set up players\r\n    const user = (0,_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    const computer = (0,_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    user.opponent = computer;\r\n    computer.opponent = user;\r\n\r\n    //keep track of turns\r\n    let turn = user;\r\n\r\n    //game status message\r\n    const gameStatus = document.querySelector(\".game-status\");\r\n\r\n\r\n    //Keep track of placeable ships and which ship is being placed\r\n    const toPlace = [(0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5), (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4), (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3)];\r\n    let shipNumber = 0;\r\n\r\n    //keep track of rotation axis\r\n    let horizontal = false;\r\n\r\n    /**\r\n     * Render the user's gameboard\r\n     */\r\n    const setUpUserBoard = function() {\r\n        const userBoard = document.createElement(\"div\");\r\n        userBoard.classList.add(\"user-board\");\r\n\r\n        for(let i = 0; i < user.gameboard.board.length; i++) {\r\n            for(let j = 0; j < user.gameboard.board[i].length; j++) {\r\n                const userBoardSquare = document.createElement(\"div\");\r\n                userBoardSquare.classList.add(\"user-board-square\");\r\n                userBoardSquare.dataset.x = j;\r\n                userBoardSquare.dataset.y = i;\r\n                userBoard.appendChild(userBoardSquare);\r\n            }\r\n        }\r\n\r\n        content.appendChild(userBoard);\r\n    }\r\n\r\n\r\n    /**\r\n     * Automatically place and render a ship for testing purposes\r\n     */\r\n    const autoPlaceShips = function() {\r\n        const ship1 = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\r\n        const ship2 = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\r\n        const ship3 = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\r\n\r\n\r\n        //place ships on the gameboard\r\n        user.gameboard.placeShip(0, 0, ship1);\r\n        user.gameboard.placeShip(3, 1, ship2);\r\n        user.gameboard.placeShip(2, 5, ship3, true);\r\n\r\n        //re-render ships\r\n        renderShips(user);\r\n\r\n    }\r\n\r\n    /**\r\n     * Automatically place and render computer ships\r\n     */\r\n    const autoPlaceComputerShips = function() {\r\n        const computerShip = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\r\n        const computerShip2 = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\r\n        const computerShip3 = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\r\n\r\n        //place computer ships on the gameboard\r\n        computer.gameboard.placeShip(0, 0, computerShip);\r\n        computer.gameboard.placeShip(3, 1, computerShip2);\r\n        computer.gameboard.placeShip(2, 5, computerShip3, true);\r\n\r\n        //re-render computer ships\r\n        renderShips(computer);\r\n\r\n    }\r\n\r\n    /**\r\n     * Render player's ships\r\n     */\r\n    const renderShips = function(player) {\r\n        const squareClass = player == user? '.user-board-square' : '.computer-board-square'\r\n        const squares = document.querySelectorAll(squareClass);\r\n        squares.forEach(square => {\r\n            const gameSquareStatus = player.gameboard.board[parseInt(square.dataset.y)][parseInt(square.dataset.x)];\r\n            if(gameSquareStatus.ship !== null) {\r\n                square.classList.add(\"ship\");\r\n                if(gameSquareStatus.tried) {\r\n                    square.classList.remove(\"ship\");\r\n                    square.classList.add(\"damaged-ship\");\r\n                }\r\n            }\r\n            else {\r\n                if(gameSquareStatus.tried) {\r\n                    square.classList.add(\"missed\");\r\n                }\r\n            }\r\n        })\r\n    }\r\n\r\n    /**\r\n     * Render the computer's gameboard\r\n     */\r\n    const setUpComputerBoard = function() {\r\n        const computerBoard = document.createElement(\"div\");\r\n        computerBoard.classList.add(\"computer-board\");\r\n\r\n        for(let i = 0; i < computer.gameboard.board.length; i++) {\r\n            for(let j = 0; j < computer.gameboard.board[i].length; j++) {\r\n                const computerBoardSquare = document.createElement(\"div\");\r\n                computerBoardSquare.classList.add(\"computer-board-square\");\r\n                computerBoardSquare.dataset.x = j;\r\n                computerBoardSquare.dataset.y = i;\r\n                computerBoard.appendChild(computerBoardSquare);\r\n            }\r\n        }\r\n        content.appendChild(computerBoard);\r\n    }\r\n\r\n    /**\r\n     * Add placeable style depending on the length of the ship\r\n     * @param {*} e \r\n     */\r\n    const addPlaceableStyle = function (e) {\r\n        let length = toPlace[shipNumber].length;\r\n        const squares = document.querySelectorAll(\".user-board-square\");\r\n        let x = parseInt(e.target.dataset.x);\r\n        let y = parseInt(e.target.dataset.y);\r\n        let start = [x, y];\r\n        if(horizontal) {\r\n            if(x + length - 1 >= 7) {\r\n                start = [7 - length, y];\r\n            }\r\n            let startingY = start[1];\r\n            let startingX = start[0];\r\n\r\n            //Check for overlap\r\n            for(let i = 0; i < length; i++) {\r\n                if(user.gameboard.board[startingY][startingX + i].ship) {\r\n                    e.target.classList.add('not-placeable');\r\n                    e.target.addEventListener('mouseout', () => {\r\n                        e.target.classList.remove('not-placeable');\r\n                    })\r\n                    return;\r\n                }\r\n            }\r\n\r\n            let placeables = new Set();\r\n        \r\n            for(let i = 0; i < length; i++) {\r\n                squares.forEach(square => {\r\n                    if(square.dataset.y === (startingY)+\"\" && square.dataset.x === (startingX+i)+\"\") {\r\n                        //if in range\r\n                        square.classList.add('placeable');\r\n                        //place the square in the placeables set\r\n                        placeables.add(square);\r\n    \r\n                    }\r\n                    e.target.addEventListener('mouseout', () => {\r\n                        //empty out the marked squares and remove their placeable class\r\n                        placeables.forEach( square => {\r\n                            placeables.delete(square);\r\n                            square.classList.remove('placeable');\r\n                        }\r\n                        )\r\n                    })\r\n                })\r\n            }\r\n            return;\r\n        }\r\n        \r\n        if(y + length - 1 >= 7) {\r\n            start = [x, 7 - length];\r\n        }\r\n        let startingY = start[1];\r\n        let startingX = start[0];\r\n\r\n        //Check for overlap\r\n        for(let i = 0; i < length; i++) {\r\n            if(user.gameboard.board[startingY + i][startingX].ship) {\r\n                e.target.classList.add('not-placeable');\r\n                e.target.addEventListener('mouseout', () => {\r\n                    e.target.classList.remove('not-placeable');\r\n                })\r\n                return;\r\n            }\r\n        }\r\n\r\n        //store the squares that are marked for placement\r\n        let placeables = new Set();\r\n        \r\n        for(let i = 0; i < length; i++) {\r\n            squares.forEach(square => {\r\n                if(square.dataset.y === (startingY + i)+\"\" && square.dataset.x === startingX+\"\") {\r\n                    //if in range\r\n                    square.classList.add('placeable');\r\n                    //place the square in the placeables set\r\n                    placeables.add(square);\r\n\r\n                }\r\n                e.target.addEventListener('mouseout', () => {\r\n                    //empty out the marked squares and remove their placeable class\r\n                    placeables.forEach( square => {\r\n                        placeables.delete(square);\r\n                        square.classList.remove('placeable');\r\n                    }\r\n                    )\r\n                })\r\n            })\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Place ship, then check if ready to start game\r\n     */\r\n    const placeShip = function(e) {\r\n        if(e.target.classList.contains('not-placeable')) {\r\n            return;\r\n        }\r\n        let ship = toPlace[shipNumber];\r\n        let placed = user.gameboard.placeShip(parseInt(e.target.dataset.x), parseInt(e.target.dataset.y), ship, horizontal);\r\n        renderShips(user);\r\n        shipNumber++;\r\n        if(shipNumber >= toPlace.length) {\r\n            const squares = document.querySelectorAll(\".user-board-square\");\r\n            squares.forEach(square => {\r\n                square.removeEventListener('mouseover', addPlaceableStyle);\r\n                square.removeEventListener('click', placeShip);\r\n            });\r\n            const rotateBtn = document.querySelector('.rotate-btn');\r\n            rotateBtn.style.visibility = 'hidden';\r\n            beginBattle();\r\n        }\r\n        else {\r\n            gameStatus.textContent =  `Place your ${toPlace[shipNumber].length}-length ship`;\r\n        }\r\n    }\r\n\r\n    const beginBattle = function() {\r\n        gameStatus.textContent = `Strike the enemy!`\r\n        readyToAttack(user);\r\n    }\r\n\r\n\r\n    /**\r\n     * Allow manual placement of ships\r\n     */\r\n    const manuallyPlaceShip = function() {\r\n        const squares = document.querySelectorAll(\".user-board-square\");\r\n        \r\n        squares.forEach(square => {\r\n            //mouse over and see if placeable\r\n            square.addEventListener(\"mouseover\", addPlaceableStyle);\r\n            //click and place\r\n            square.addEventListener(\"click\", placeShip);\r\n        });\r\n\r\n\r\n    }\r\n\r\n    /**\r\n     * Computer strikes \r\n     */\r\n    const computerMove = function () {\r\n        if(turn !== computer) {\r\n            return;\r\n        }\r\n        computer.computerAttack();\r\n\r\n        renderShips(computer.opponent);\r\n        if(computer.opponent.gameboard.lost()) {\r\n            document.querySelector('.game-status').textContent = \"Computer wins!\";\r\n            endGame(computer);\r\n        }\r\n\r\n        turn = computer.opponent;\r\n        \r\n    }\r\n\r\n    /**\r\n     * End the game\r\n     */\r\n    const endGame = function(winner) {\r\n        const gameOver = document.createElement(\"div\");\r\n        gameOver.classList.add(\"game-over\");\r\n        gameOver.textContent = winner===computer? 'You Lost!' : `You Won!`;\r\n        document.querySelector('.content').appendChild(gameOver);\r\n    }\r\n\r\n    /**\r\n     * Allow player to attack opponent;\r\n     */\r\n    const readyToAttack = function(player, cpuPlaying=true) {\r\n        let opponent = player.opponent;\r\n        const opponentSquareClass = opponent == user? '.user-board-square' : '.computer-board-square';\r\n        const squares = document.querySelectorAll(opponentSquareClass);\r\n        const gameStatus = document.querySelector('.game-status');\r\n        squares.forEach(square => {\r\n            square.addEventListener('click', (e) => {\r\n                if(turn !== player) {\r\n                    return;\r\n                }\r\n                let attack = player.attack(parseInt(square.dataset.x), parseInt(square.dataset.y));\r\n                if(attack && opponent.gameboard.board[parseInt(square.dataset.y)][parseInt(square.dataset.x)].ship !== null) {\r\n                    gameStatus.textContent = \"Ship damaged!\"\r\n                    if(opponent.gameboard.lost()) {\r\n                        gameStatus.textContent = \"You win!\";\r\n                        endGame(user);\r\n                    }\r\n                }\r\n                else if(attack) {\r\n                    gameStatus.textContent = \"Miss!\"\r\n                }\r\n                else {\r\n                    gameStatus.textContent = \"Already struck here! Try again.\"\r\n                }\r\n                renderShips(opponent);\r\n                if(attack === true) {\r\n                    turn = opponent;\r\n                    if(cpuPlaying === true) {\r\n                        computerMove();\r\n                    }\r\n                }\r\n            })\r\n        });\r\n\r\n    }\r\n\r\n\r\n    /**\r\n     * Begin game loop\r\n     */\r\n    const startGameAuto = function(){\r\n        //place ships\r\n        autoPlaceShips();\r\n        autoPlaceComputerShips();\r\n\r\n        //ready attack listeners\r\n        readyToAttack(user);\r\n    }\r\n\r\n    const startGame = function() {\r\n        const startGameBtn = document.querySelector(\".start-game-btn\");\r\n        startGameBtn.style.visibility = 'hidden';\r\n        \r\n        const rotateBtn = document.querySelector(\".rotate-btn\");\r\n        rotateBtn.style.visibility = 'visible';\r\n        rotateBtn.addEventListener('click', () => {\r\n            horizontal = horizontal? false : true;\r\n        });\r\n\r\n\r\n        document.querySelector(\".game-status\").textContent = `Place your ${toPlace[shipNumber].length}-length ship`;\r\n        //place ships\r\n        //place computer ship\r\n        autoPlaceComputerShips();\r\n\r\n        //begin user placement, and then begin game\r\n        manuallyPlaceShip();\r\n\r\n    }\r\n\r\n    \r\n\r\n    return{setUpUserBoard, setUpComputerBoard, startGameAuto, startGame}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);\n\n//# sourceURL=webpack://battleship/./src/modules/DOM.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n\r\n\r\n\r\n/**\r\n * A component of the Gameboard that contains a ship(or null)\r\n */\r\nconst Target = function() {\r\n    let ship = null;\r\n    let tried = false;\r\n\r\n    return{ship, tried};\r\n}\r\n\r\n/**\r\n * A 7x7 grid of target objects that contains ships\r\n */\r\nconst Gameboard = function() {\r\n    /**\r\n     * Initialize a gameboard with nXn dimensions\r\n     * @param {*} n \r\n     * @returns \r\n     */\r\n    const initializeBoard = function(n) {\r\n        let grid = [];\r\n        for(let i = 0; i < n; i++) {\r\n            grid[i] = [];\r\n            for(let j = 0; j < n; j++) {\r\n                grid[i][j] = Target();\r\n            }\r\n        }\r\n        return grid;\r\n    }\r\n    \r\n    let board = initializeBoard(7);\r\n    \r\n    //Store the board's ships\r\n    let ships = [];\r\n\r\n\r\n    /**\r\n     * Place a ship on board at coordinates specified \r\n     * either vertically or horizontally, return false if\r\n     * placing this ship will overlap with another\r\n     * @param {*} x \r\n     * @param {*} y \r\n     * @param {*} length \r\n     * @param {*} horizontal \r\n     */\r\n    const placeShip = function(x, y, shipNew, horizontal=false) {\r\n        \r\n        let start = [x, y];\r\n        if(horizontal) {\r\n            if(x + shipNew.length - 1 >= 7) {\r\n                start = [7 - shipNew.length, y];\r\n            }\r\n            let startingY = start[1];\r\n            let startingX = start[0];\r\n\r\n            //Check for overlap\r\n            for(let i = 0; i < shipNew.length; i++) {\r\n                if(this.board[startingY][startingX + i].ship) {\r\n                    return false;\r\n                }\r\n            }\r\n\r\n            this.ships.push(shipNew);\r\n    \r\n            for(let i = 0; i < shipNew.length; i++) {\r\n                this.board[startingY][startingX + i].ship = shipNew;\r\n            }\r\n        }\r\n        else {\r\n            if(y + shipNew.length - 1 >= 7) {\r\n                start = [x, 7 - shipNew.length];\r\n            }\r\n            let startingY = start[1];\r\n            let startingX = start[0];\r\n\r\n            //Check for overlap\r\n            for(let i = 0; i < shipNew.length; i++) {\r\n                if(this.board[startingY + i][startingX].ship) {\r\n                    return false;\r\n                }\r\n            }\r\n\r\n            this.ships.push(shipNew);\r\n    \r\n            for(let i = 0; i < shipNew.length; i++) {\r\n                this.board[startingY + i][startingX].ship = shipNew;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * Try to attack a coordinate, if has been tried already, do nothing\r\n     * @param {*} x \r\n     * @param {*} y \r\n     */\r\n    const receiveAttack = function(x, y) {\r\n        let toAttack = this.board[y][x];\r\n\r\n        if(toAttack.tried) {\r\n            return false;\r\n        }\r\n        toAttack.tried = true;\r\n        if(toAttack.ship !== null) {\r\n            toAttack.ship.hit();\r\n        }\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * Return whether all ships have been sunk or not\r\n     */\r\n    const lost = function() {\r\n        let ships = this.ships;\r\n        return ships.every((ship) => ship.isSunk());\r\n    }\r\n\r\n\r\n\r\n    return{board, ships, placeShip, receiveAttack, lost};\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/modules/Gameboard.js?");

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ \"./src/modules/Gameboard.js\");\n\r\n\r\n\r\nconst Player = function () {\r\n    const gameboard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    const opponent = null;\r\n\r\n    const alreadyHit = new Set();\r\n\r\n    /**\r\n     * Attack the opponent at x, y coordinates\r\n     * @param {*} x \r\n     * @param {*} y \r\n     */\r\n    const attack = function(x, y) {\r\n        return this.opponent.gameboard.receiveAttack(x, y);\r\n    }\r\n\r\n    const _randomizer = function(n) {\r\n        return Math.floor(Math.random() * n);\r\n    }\r\n\r\n    const computerAttack = function(randomizer=_randomizer) {\r\n        let x = randomizer(7);\r\n        let y = randomizer(7);\r\n        if(!alreadyHit.has(this.opponent.gameboard.board[y][x])) {\r\n            attack.call(this, x, y)\r\n            alreadyHit.add(this.opponent.gameboard.board[y][x]);\r\n            return [x, y];\r\n        }\r\n        else{\r\n            computerAttack.call(this, randomizer);\r\n        }\r\n    }\r\n    \r\n    return {gameboard, opponent, attack, computerAttack};\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/modules/Player.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Create a Ship object from length\r\n * @param {number} length \r\n */\r\nconst Ship = function(length=null) {\r\n   let hits = 0;\r\n\r\n   /**\r\n    * Hit the ship if it has not been sunk\r\n    */  \r\n   const hit = function() {\r\n    if(!this.isSunk()) {\r\n        this.hits++;\r\n    }\r\n   }\r\n\r\n   /**\r\n    * Determine if the ship has sunk\r\n    * @returns boolean\r\n    */\r\n    const isSunk = function() {\r\n        return this.hits >= this.length;\r\n    }\r\n\r\n    return{length, hits, hit, isSunk}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/modules/Ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;