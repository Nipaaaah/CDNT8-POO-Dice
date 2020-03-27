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
var game = new _classes_game__WEBPACK_IMPORTED_MODULE_0__["Game"](2, 2);
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
                console.log(p.get_name());
            });
            console.log('');
            for (var i = 1; i < _this._nb_turns + 1; i++) {
                console.log("Turn " + i + ": ");
                _this._players.map(function (p) {
                    console.log(p.get_name() + " throws the cup");
                    p.play(_this._cup);
                });
            }
        };
        // Checks which player has the highest score and displays its name
        this.show_winner = function () {
            console.log("End of the game");
            var score = _this._players[0].get_score();
            var winner = _this._players[0];
            _this._players.map(function (p) {
                if (p.get_score() > score) {
                    score = p.get_score();
                    winner = p;
                }
            });
            console.log("Winner is: " + winner.get_name());
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
        // Getter
        this.get_value = function () {
            return _this._value;
        };
        // Throw the cup
        // Take the sum of the dices values to make the value of the cup
        // Shows the value of the cup
        this.throw = function () {
            _this._value = 0;
            _this._dices.map(function (d) {
                d.throw();
                var value = d.get_value();
                _this._value += value;
            });
            _this.show_score();
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
        // Getter
        this.get_value = function () {
            return _this._value;
        };
        // Changed the value of the dice to a number between 1 and 6
        this.throw = function () {
            _this._value = Math.floor(Math.random() * 6 + 1);
        };
        this._value = 0;
    }
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
        // Getters
        this.get_name = function () {
            return _this._name;
        };
        this.get_score = function () {
            return _this._score;
        };
        // Let the player throw the cup, add the value of the cup to its score and shows its score
        this.play = function (cup) {
            cup.throw();
            _this._score += cup.get_value();
            _this.show_score();
        };
        // Show current score of the player
        this.show_score = function () {
            console.log(_this._name + " has " + _this._score + " points.");
        };
        this._name = name;
        this._score = 0;
    }
    return Player;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvY3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2RpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBc0M7QUFFdEMsb0JBQW9CO0FBQ3BCLDJDQUEyQztBQUMzQyxJQUFNLElBQUksR0FBUyxJQUFJLGtEQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWxDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7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Q0FBQztJQUNsQixDQUFDO0lBV0gsV0FBQztBQUFELENBQUM7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUE7SUFJRSxjQUFjO0lBQ2QsZ0JBQVksSUFBWTtRQUF4QixpQkFHQztRQUVELFVBQVU7UUFDVixhQUFRLEdBQUc7WUFDVCxPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQztRQUVELGNBQVMsR0FBRztZQUNWLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO1FBRUQsMEZBQTBGO1FBQzFGLFNBQUksR0FBRyxVQUFDLEdBQVE7WUFDZCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWixLQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUUvQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUVELG1DQUFtQztRQUNuQyxlQUFVLEdBQUc7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxLQUFLLGFBQVEsS0FBSSxDQUFDLE1BQU0sYUFBVSxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQXhCQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBdUJILGFBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9jbGFzc2VzL2dhbWVcIjtcclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBnYW1lXHJcbi8vIFBhcmFtczogbnVtYmVyIG9mIHR1cm5zLCBudW1iZXIgb2YgZGljZXNcclxuY29uc3QgZ2FtZTogR2FtZSA9IG5ldyBHYW1lKDIsIDIpO1xyXG5cclxuZ2FtZS5pbml0X2dhbWUoKTtcclxuZ2FtZS5zdGFydF9nYW1lKCk7XHJcbmdhbWUuc2hvd193aW5uZXIoKTsiLCJpbXBvcnQgeyBDdXAgfSBmcm9tICcuL2N1cCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICBwcml2YXRlIF9wbGF5ZXJzOiBQbGF5ZXJbXTtcclxuICBwcml2YXRlIF9uYl90dXJuczogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2N1cDogQ3VwO1xyXG5cclxuICAvLyBDb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKG5iX3R1cm5zOiBudW1iZXIsIG5iX2RpY2VzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BsYXllcnMgPSBbXTtcclxuICAgIHRoaXMuX25iX3R1cm5zID0gbmJfdHVybnM7XHJcbiAgICB0aGlzLl9jdXAgPSBuZXcgQ3VwKG5iX2RpY2VzKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBhcnJheSBvZiBwbGF5ZXJzXHJcbiAgcHVibGljIGluaXRfZ2FtZSA9ICgpID0+IHtcclxuICAgIGxldCBib2IgPSBuZXcgUGxheWVyKCdCb2InKTtcclxuICAgIGxldCB3aWxseSA9IG5ldyBQbGF5ZXIoJ1dpbGx5Jyk7XHJcbiAgICBsZXQgbWlrZSA9IG5ldyBQbGF5ZXIoJ01pa2UnKTtcclxuXHJcbiAgICB0aGlzLl9wbGF5ZXJzLnB1c2goYm9iLCB3aWxseSwgbWlrZSk7XHJcbiAgfVxyXG5cclxuICAvLyBTdGFydCB0aGUgZ2FtZSBhbmQgbGV0IHRoZSBwbGF5ZXJzIHBsYXkgZWFjaCB0dXJuc1xyXG4gIHB1YmxpYyBzdGFydF9nYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYEdhbWUgc3RhcnRzICEgIEl0IHdpbGwgbGFzdCBmb3IgJHt0aGlzLl9uYl90dXJuc30gdHVybnMgIWApXHJcbiAgICBjb25zb2xlLmxvZygnUGxheWVycyBmb3IgdGhpcyBnYW1lIGFyZTonKTtcclxuICAgIHRoaXMuX3BsYXllcnMubWFwKHAgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhwLmdldF9uYW1lKCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZygnJylcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuX25iX3R1cm5zICsgMTsgaSsrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBUdXJuICR7aX06IGApXHJcblxyXG4gICAgICB0aGlzLl9wbGF5ZXJzLm1hcChwID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwLmdldF9uYW1lKCl9IHRocm93cyB0aGUgY3VwYClcclxuICAgICAgICBwLnBsYXkodGhpcy5fY3VwKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENoZWNrcyB3aGljaCBwbGF5ZXIgaGFzIHRoZSBoaWdoZXN0IHNjb3JlIGFuZCBkaXNwbGF5cyBpdHMgbmFtZVxyXG4gIHB1YmxpYyBzaG93X3dpbm5lciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRW5kIG9mIHRoZSBnYW1lXCIpO1xyXG5cclxuICAgIGxldCBzY29yZSA9IHRoaXMuX3BsYXllcnNbMF0uZ2V0X3Njb3JlKCk7XHJcbiAgICBsZXQgd2lubmVyID0gdGhpcy5fcGxheWVyc1swXTtcclxuXHJcbiAgICB0aGlzLl9wbGF5ZXJzLm1hcChwID0+IHtcclxuICAgICAgaWYgKHAuZ2V0X3Njb3JlKCkgPiBzY29yZSkge1xyXG4gICAgICAgIHNjb3JlID0gcC5nZXRfc2NvcmUoKTtcclxuICAgICAgICB3aW5uZXIgPSBwO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGBXaW5uZXIgaXM6ICR7d2lubmVyLmdldF9uYW1lKCl9YClcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEaWNlIH0gZnJvbSAnLi9kaWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXAge1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZGljZXM6IERpY2VbXTtcclxuXHJcbiAgLy8gQ29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihuYl9kaWNlczogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IDA7XHJcbiAgICB0aGlzLl9kaWNlcyA9IFtdO1xyXG5cclxuICAgIC8vIENyZWF0ZSBuZXcgZGljZXMgYW5kIGFkZCB0aGVtIHRvIHRoZSBjdXBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJfZGljZXM7IGkrKykge1xyXG4gICAgICBsZXQgZGljZSA9IG5ldyBEaWNlKCk7XHJcbiAgICAgIHRoaXMuX2RpY2VzLnB1c2goZGljZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZXR0ZXJcclxuICBwdWJsaWMgZ2V0X3ZhbHVlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhyb3cgdGhlIGN1cFxyXG4gIC8vIFRha2UgdGhlIHN1bSBvZiB0aGUgZGljZXMgdmFsdWVzIHRvIG1ha2UgdGhlIHZhbHVlIG9mIHRoZSBjdXBcclxuICAvLyBTaG93cyB0aGUgdmFsdWUgb2YgdGhlIGN1cFxyXG4gIHB1YmxpYyB0aHJvdyA9ICgpID0+IHtcclxuICAgIHRoaXMuX3ZhbHVlID0gMDtcclxuXHJcbiAgICB0aGlzLl9kaWNlcy5tYXAoZCA9PiB7XHJcbiAgICAgIGQudGhyb3coKTtcclxuICAgICAgbGV0IHZhbHVlID0gZC5nZXRfdmFsdWUoKTtcclxuICAgICAgdGhpcy5fdmFsdWUgKz0gdmFsdWU7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuc2hvd19zY29yZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2hvd3MgdGhlIHZhbHVlIG9mIHRoZSBjdXBcclxuICBwdWJsaWMgc2hvd19zY29yZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBDdXAgPSAke3RoaXMuX3ZhbHVlfWApO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBEaWNlIHtcclxuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyO1xyXG5cclxuICAvLyBDb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fdmFsdWUgPSAwO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0dGVyXHJcbiAgcHVibGljIGdldF92YWx1ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIENoYW5nZWQgdGhlIHZhbHVlIG9mIHRoZSBkaWNlIHRvIGEgbnVtYmVyIGJldHdlZW4gMSBhbmQgNlxyXG4gIHB1YmxpYyB0aHJvdyA9ICgpID0+IHtcclxuICAgIHRoaXMuX3ZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNiArIDEpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEN1cCB9IGZyb20gJy4vY3VwJztcclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3Njb3JlOiBudW1iZXI7XHJcblxyXG4gIC8vIENvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3Njb3JlID0gMDtcclxuICB9XHJcblxyXG4gIC8vIEdldHRlcnNcclxuICBnZXRfbmFtZSA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0X3Njb3JlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xyXG4gIH1cclxuXHJcbiAgLy8gTGV0IHRoZSBwbGF5ZXIgdGhyb3cgdGhlIGN1cCwgYWRkIHRoZSB2YWx1ZSBvZiB0aGUgY3VwIHRvIGl0cyBzY29yZSBhbmQgc2hvd3MgaXRzIHNjb3JlXHJcbiAgcGxheSA9IChjdXA6IEN1cCkgPT4ge1xyXG4gICAgY3VwLnRocm93KCk7XHJcbiAgICB0aGlzLl9zY29yZSArPSBjdXAuZ2V0X3ZhbHVlKCk7XHJcblxyXG4gICAgdGhpcy5zaG93X3Njb3JlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBTaG93IGN1cnJlbnQgc2NvcmUgb2YgdGhlIHBsYXllclxyXG4gIHNob3dfc2NvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLl9uYW1lfSBoYXMgJHt0aGlzLl9zY29yZX0gcG9pbnRzLmApO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=