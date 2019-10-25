var Letter = require("./Letter");

function Word(word){
    word = word.toLowerCase()
    this.letters = [];
    this.getLetters = function(){
        console.log(this.letters);
    }
    this.generateLetters = function(){
        word = word.split("")
        for(var i = 0; i < word.length; i++){
            this.letters.push(new Letter(word[i]));
        }
    }
    this.generateString = function(command){
        var myWord = ""
        for(var i = 0; i < this.letters.length; i++){
            myWord += this.letters[i].display();
        }
        if(!command){
        console.log(myWord.split("").join(" "));
    } else{
        return(myWord);
    }
    }
    this.checkChar = function(char){
        for(var i = 0; i < this.letters.length; i++){
            this.letters[i].checkLetter(char)
        }
    }
    
}

// var hey = new Word("hello")
// hey.generateLetters();
// hey.getLetters();
// hey.checkChar('o')
// hey.generateString()

module.exports = Word;



