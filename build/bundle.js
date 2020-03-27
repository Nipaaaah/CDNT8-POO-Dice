/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

// Create a new game
// Params: number of turns, number of dices
var game = new _classes_game__WEBPACK_IMPORTED_MODULE_0__["Game"](4, 6);
game.init_game();
game.start_game();
game.show_winner();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _cup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


var Game = /** @class */ (function () {
    // Constructor
    function Game(nb_turns, nb_dices) {
        var _this = this;
        // Create array of players
        this.init_game = function () {
            var bob = new _player__WEBPACK_IMPORTED_MODULE_1__["Player"]('Bob');
            var willy = new _player__WEBPACK_IMPORTED_MODULE_1__["Player"]('Willy');
            var mike = new _player__WEBPACK_IMPORTED_MODULE_1__["Player"]('Mike');
            _this._players.push(bob, willy, mike);
        };
        // Start the game and let the players play each turns
        this.start_game = function () {
            console.log("Game starts !  It will last for " + _this._nb_turns + " turns !");
            console.log('Players for this game are:');
            _this._players.map(function (p) {
                console.log(p.name);
            });
            console.log('');
            for (var i = 1; i < _this._nb_turns + 1; i++) {
                console.log("Turn " + i + ": ");
                _this._players.map(function (p) {
                    console.log(p.name + " throws the cup.");
                    p.play(_this._cup);
                });
            }
        };
        // Checks which player has the highest score and displays its name
        this.show_winner = function () {
            console.log("End of the game");
            var score = _this._players[0].score;
            var winner = _this._players[0];
            _this._players.map(function (p) {
                if (p.score > score) {
                    score = p.score;
                    winner = p;
                }
            });
            console.log("Winner is: " + winner.name);
        };
        this._players = [];
        this._nb_turns = nb_turns;
        this._cup = new _cup__WEBPACK_IMPORTED_MODULE_0__["Cup"](nb_dices);
    }
    return Game;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cup", function() { return Cup; });
/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var Cup = /** @class */ (function () {
    // Constructor
    function Cup(nb_dices) {
        var _this = this;
        // Throw the cup
        // Take the sum of the dices values to make the value of the cup
        // Shows the value of the cup
        this.throw = function () {
            _this._value = 0;
            _this._dices.map(function (d) {
                d.throw();
                var value = d.value;
                _this._value += value;
            });
        };
        // Shows the value of the cup
        this.show_score = function () {
            console.log("Cup = " + _this._value);
        };
        this._value = 0;
        this._dices = [];
        // Create new dices and add them to the cup
        for (var i = 0; i < nb_dices; i++) {
            var dice = new _dice__WEBPACK_IMPORTED_MODULE_0__["Dice"]();
            this._dices.push(dice);
        }
    }
    Object.defineProperty(Cup.prototype, "value", {
        // Getter
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return Cup;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dice", function() { return Dice; });
var Dice = /** @class */ (function () {
    // Constructor
    function Dice() {
        var _this = this;
        // Changed the value of the dice to a number between 1 and 6
        this.throw = function () {
            _this._value = Math.floor(Math.random() * 6 + 1);
        };
        this._value = 0;
    }
    Object.defineProperty(Dice.prototype, "value", {
        // Getter
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return Dice;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    // Constructor
    function Player(name) {
        var _this = this;
        // Let the player throw the cup, add the value of the cup to its score and shows its score
        this.play = function (cup) {
            cup.throw();
            _this._score += cup.value;
            console.log(_this._name + " does " + cup.value + ".");
            _this.show_score();
            console.log('');
        };
        // Show current score of the player
        this.show_score = function () {
            console.log(_this._name + " has " + _this._score + " points.");
        };
        this._name = name;
        this._score = 0;
    }
    Object.defineProperty(Player.prototype, "name", {
        // Getters
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvY3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2RpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBc0M7QUFFdEMsb0JBQW9CO0FBQ3BCLDJDQUEyQztBQUMzQyxJQUFNLElBQUksR0FBUyxJQUFJLGtEQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWxDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7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Ozs7Ozs7QUNoQkQ7QUFBQTtBQUFBO0lBSUUsY0FBYztJQUNkLGdCQUFZLElBQVk7UUFBeEIsaUJBR0M7UUFXRCwwRkFBMEY7UUFDMUYsU0FBSSxHQUFHLFVBQUMsR0FBUTtZQUNkLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNaLEtBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztZQUV6QixPQUFPLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxLQUFLLGNBQVMsR0FBRyxDQUFDLEtBQUssTUFBRyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBRUQsbUNBQW1DO1FBQ25DLGVBQVUsR0FBRztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUksS0FBSSxDQUFDLEtBQUssYUFBUSxLQUFJLENBQUMsTUFBTSxhQUFVLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBMUJDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFHRCxzQkFBSSx3QkFBSTtRQURSLFVBQVU7YUFDVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlCQUFLO2FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFnQkgsYUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2NsYXNzZXMvZ2FtZVwiO1xyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IGdhbWVcclxuLy8gUGFyYW1zOiBudW1iZXIgb2YgdHVybnMsIG51bWJlciBvZiBkaWNlc1xyXG5jb25zdCBnYW1lOiBHYW1lID0gbmV3IEdhbWUoNCwgNik7XHJcblxyXG5nYW1lLmluaXRfZ2FtZSgpO1xyXG5nYW1lLnN0YXJ0X2dhbWUoKTtcclxuZ2FtZS5zaG93X3dpbm5lcigpOyIsImltcG9ydCB7IEN1cCB9IGZyb20gJy4vY3VwJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gIHByaXZhdGUgX3BsYXllcnM6IFBsYXllcltdO1xyXG4gIHByaXZhdGUgX25iX3R1cm5zOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfY3VwOiBDdXA7XHJcblxyXG4gIC8vIENvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IobmJfdHVybnM6IG51bWJlciwgbmJfZGljZXM6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcGxheWVycyA9IFtdO1xyXG4gICAgdGhpcy5fbmJfdHVybnMgPSBuYl90dXJucztcclxuICAgIHRoaXMuX2N1cCA9IG5ldyBDdXAobmJfZGljZXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGFycmF5IG9mIHBsYXllcnNcclxuICBwdWJsaWMgaW5pdF9nYW1lID0gKCkgPT4ge1xyXG4gICAgbGV0IGJvYiA9IG5ldyBQbGF5ZXIoJ0JvYicpO1xyXG4gICAgbGV0IHdpbGx5ID0gbmV3IFBsYXllcignV2lsbHknKTtcclxuICAgIGxldCBtaWtlID0gbmV3IFBsYXllcignTWlrZScpO1xyXG5cclxuICAgIHRoaXMuX3BsYXllcnMucHVzaChib2IsIHdpbGx5LCBtaWtlKTtcclxuICB9XHJcblxyXG4gIC8vIFN0YXJ0IHRoZSBnYW1lIGFuZCBsZXQgdGhlIHBsYXllcnMgcGxheSBlYWNoIHR1cm5zXHJcbiAgcHVibGljIHN0YXJ0X2dhbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgR2FtZSBzdGFydHMgISAgSXQgd2lsbCBsYXN0IGZvciAke3RoaXMuX25iX3R1cm5zfSB0dXJucyAhYClcclxuICAgIGNvbnNvbGUubG9nKCdQbGF5ZXJzIGZvciB0aGlzIGdhbWUgYXJlOicpO1xyXG4gICAgdGhpcy5fcGxheWVycy5tYXAocCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHAubmFtZSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCcnKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5fbmJfdHVybnMgKyAxOyBpKyspIHtcclxuICAgICAgY29uc29sZS5sb2coYFR1cm4gJHtpfTogYClcclxuXHJcbiAgICAgIHRoaXMuX3BsYXllcnMubWFwKHAgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3AubmFtZX0gdGhyb3dzIHRoZSBjdXAuYClcclxuICAgICAgICBwLnBsYXkodGhpcy5fY3VwKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENoZWNrcyB3aGljaCBwbGF5ZXIgaGFzIHRoZSBoaWdoZXN0IHNjb3JlIGFuZCBkaXNwbGF5cyBpdHMgbmFtZVxyXG4gIHB1YmxpYyBzaG93X3dpbm5lciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRW5kIG9mIHRoZSBnYW1lXCIpO1xyXG5cclxuICAgIGxldCBzY29yZSA9IHRoaXMuX3BsYXllcnNbMF0uc2NvcmU7XHJcbiAgICBsZXQgd2lubmVyID0gdGhpcy5fcGxheWVyc1swXTtcclxuXHJcbiAgICB0aGlzLl9wbGF5ZXJzLm1hcChwID0+IHtcclxuICAgICAgaWYgKHAuc2NvcmUgPiBzY29yZSkge1xyXG4gICAgICAgIHNjb3JlID0gcC5zY29yZTtcclxuICAgICAgICB3aW5uZXIgPSBwO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGBXaW5uZXIgaXM6ICR7d2lubmVyLm5hbWV9YClcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEaWNlIH0gZnJvbSAnLi9kaWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXAge1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZGljZXM6IERpY2VbXTtcclxuXHJcbiAgLy8gQ29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihuYl9kaWNlczogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IDA7XHJcbiAgICB0aGlzLl9kaWNlcyA9IFtdO1xyXG5cclxuICAgIC8vIENyZWF0ZSBuZXcgZGljZXMgYW5kIGFkZCB0aGVtIHRvIHRoZSBjdXBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJfZGljZXM7IGkrKykge1xyXG4gICAgICBsZXQgZGljZSA9IG5ldyBEaWNlKCk7XHJcbiAgICAgIHRoaXMuX2RpY2VzLnB1c2goZGljZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZXR0ZXJcclxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhyb3cgdGhlIGN1cFxyXG4gIC8vIFRha2UgdGhlIHN1bSBvZiB0aGUgZGljZXMgdmFsdWVzIHRvIG1ha2UgdGhlIHZhbHVlIG9mIHRoZSBjdXBcclxuICAvLyBTaG93cyB0aGUgdmFsdWUgb2YgdGhlIGN1cFxyXG4gIHB1YmxpYyB0aHJvdyA9ICgpID0+IHtcclxuICAgIHRoaXMuX3ZhbHVlID0gMDtcclxuXHJcbiAgICB0aGlzLl9kaWNlcy5tYXAoZCA9PiB7XHJcbiAgICAgIGQudGhyb3coKTtcclxuICAgICAgbGV0IHZhbHVlID0gZC52YWx1ZTtcclxuICAgICAgdGhpcy5fdmFsdWUgKz0gdmFsdWU7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gU2hvd3MgdGhlIHZhbHVlIG9mIHRoZSBjdXBcclxuICBwdWJsaWMgc2hvd19zY29yZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBDdXAgPSAke3RoaXMuX3ZhbHVlfWApO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBEaWNlIHtcclxuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyO1xyXG5cclxuICAvLyBDb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fdmFsdWUgPSAwO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0dGVyXHJcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIENoYW5nZWQgdGhlIHZhbHVlIG9mIHRoZSBkaWNlIHRvIGEgbnVtYmVyIGJldHdlZW4gMSBhbmQgNlxyXG4gIHB1YmxpYyB0aHJvdyA9ICgpID0+IHtcclxuICAgIHRoaXMuX3ZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNiArIDEpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEN1cCB9IGZyb20gJy4vY3VwJztcclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3Njb3JlOiBudW1iZXI7XHJcblxyXG4gIC8vIENvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3Njb3JlID0gMDtcclxuICB9XHJcblxyXG4gIC8vIEdldHRlcnNcclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjb3JlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xyXG4gIH1cclxuXHJcbiAgLy8gTGV0IHRoZSBwbGF5ZXIgdGhyb3cgdGhlIGN1cCwgYWRkIHRoZSB2YWx1ZSBvZiB0aGUgY3VwIHRvIGl0cyBzY29yZSBhbmQgc2hvd3MgaXRzIHNjb3JlXHJcbiAgcGxheSA9IChjdXA6IEN1cCkgPT4ge1xyXG4gICAgY3VwLnRocm93KCk7XHJcbiAgICB0aGlzLl9zY29yZSArPSBjdXAudmFsdWU7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5fbmFtZX0gZG9lcyAke2N1cC52YWx1ZX0uYClcclxuICAgIHRoaXMuc2hvd19zY29yZSgpO1xyXG4gICAgY29uc29sZS5sb2coJycpXHJcbiAgfVxyXG5cclxuICAvLyBTaG93IGN1cnJlbnQgc2NvcmUgb2YgdGhlIHBsYXllclxyXG4gIHNob3dfc2NvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLl9uYW1lfSBoYXMgJHt0aGlzLl9zY29yZX0gcG9pbnRzLmApO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=