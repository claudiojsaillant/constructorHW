function Letter(letter) {
    this.letter = letter
    this.blank = "_";
    this.guessed = false;
    this.display = function(){
        if(this.guessed){
            return letter
        } else {
            return this.blank
        }
    }
    this.checkLetter = function(myletter) {
        if(this.letter === myletter){
            this.guessed = true;
        }
    }
  }

  module.exports = Letter;