"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var Console = (function () {
    function Console() {
    }
    Console.prototype.log = function (arg) {
        console.log(arg);
    };
    Console.prototype.success = function (arg) {
        console.log(chalk_1["default"].green("[+]"), arg);
    };
    Console.prototype.err = function (arg) {
        console.log(chalk_1["default"].red("[-]"), arg);
    };
    Console.prototype.info = function (arg) {
        console.log(chalk_1["default"].blue("[?]"), arg);
    };
    Console.prototype.warn = function (arg) {
        console.log(chalk_1["default"].yellow("[!]"), arg);
    };
    return Console;
}());
module.exports = new Console();
