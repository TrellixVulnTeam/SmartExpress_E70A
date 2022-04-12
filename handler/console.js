var chalk = require("chalk");
var Console = (function () {
    function Console() {
    }
    Console.prototype.success = function (arg) {
        console.log(chalk.green("[+]"), arg);
    };
    Console.prototype.err = function (arg) {
        console.log(chalk.red("[-]"), arg);
    };
    Console.prototype.info = function (arg) {
        console.log(chalk.blue("[?]"), arg);
    };
    Console.prototype.warn = function (arg) {
        console.log(chalk.yellow("[!]"), arg);
    };
    return Console;
}());
