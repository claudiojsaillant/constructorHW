var inquirer = require("inquirer");
var Word = require("./Word");

var game = {
    canUse: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    chances: 10,
    wordsUsed: [],
    wordObj: {

    },
    actualWord: "",
    words: ["Jurasic", "Disco"],
    getRandomWord: function(){
        this.actualWord = this.words[Math.floor(Math.random() * this.words.length)];
    },
    askUser: function() {
            inquirer
                .prompt([
                    {
                        name: "answer",
                        type: "input",
                        message: "Try to guess!"
                    },
                ]).then(function (res) {
                     var word = game.wordObj.generateString("show")
                    if(game.canUse.includes(res.answer) && !game.wordsUsed.includes(res.answer) && res.answer.length === 1){

                    game.wordObj.checkChar(res.answer);

                    if(game.wordObj.generateString("show") === game.actualWord.toLowerCase()){
                        console.log("You won!")
                        return game.reset()

                    } else {
                        if(game.wordObj.generateString("show") === word){
                            game.chances -= 1;
                            if(game.chances === 0){
                                console.log("You lost");
                                return game.reset()
                            }
                            game.wordsUsed.push(res.answer);
                            console.log("Chances:", game.chances);
                            game.next();
                        } else {
                            game.wordsUsed.push(res.answer);
                            console.log("Nice! Can you keep going?!");

                            game.next();
                        }
                        
                    }
                } else {
                    console.log("Either you used this word / You didn't used just a character, try again");
                    game.next();
                }
                })
        },
    start: function(){
        this.getRandomWord();
        this.wordObj = new Word(this.actualWord);
        this.wordObj.generateLetters()
        this.wordObj.generateString()
        this.askUser();
    },
    next: function(){
        this.wordObj.generateString()
        this.askUser();
    },
    reset: function(){
        this.chances = 10,
        this.wordsUsed = []
        this.start();
    }

    }

    game.start();


    



