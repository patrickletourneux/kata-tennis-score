class TennisScore {
    P1name
    P2name
    game
    score = [0,0]
    constructor(P1name, P2name, game){
        this.P1name = P1name
        this.P2name = P2name
        this.game = game
    }

    log(){
        console.log('OK class importée')
        return 'OK'
    }
    showData(){
        // console.log('data ',[this.P1name , this.P2name , this.game ])
        return [this.P1name , this.P2name , this.game ]
    }
    Equality(){
        if (this.score[0] === 1){
            return '15a';
        }
        if (this.score[0] === 2){
            return '30a';
        }
        if (this.score[0] >= 3){
            return '40a';
        }
    }
    avantageOrWins(){
        if (this.score[0]>=4 && (this.score[0]-this.score[1]) ===1){
            return `${this.P1name} avantage`;
        }
        if (this.score[1]>=4 && (this.score[1]-this.score[0]) ===1){
            return `${this.P2name} avantage`;
        }
        if (this.score[0]>=4 && (this.score[0]-this.score[1]) > 1){
            return `${this.P1name} wins`;
        }
        if (this.score[1]>=4 && (this.score[1]-this.score[0]) > 1){
            return `${this.P2name} wins`;
        }
    }
    
    result(){
        this.calculScore()
        // console.log('this.score ',this.score)

        if (this.score[0]===this.score[1]){
            return this.Equality();
        } 
        else if (this.score[0]>=4 ||  this.score[1]>=4)
        {
           return this.avantageOrWins();
        }
        else {            
            let P1score;
            let P2score;
            if (this.score[0]===1){
                P1score = 15;
            }
            if (this.score[1]===1){
                P2score = 15;
            }
            if (this.score[0]===2){
                P1score = 30;
            }
            if (this.score[1]===2){
                P2score = 30;
            }
            if (this.score[0]===3){
                P1score = 40;
            }
            if (this.score[1]===3){
                P2score = 40;
            }
            
            
            return `${this.P1name} ${P1score} ${this.P2name} ${P2score}`
        }
    }
    calculScore(){
        this.score = [0,0];
        this.game.forEach(element => {
            if (element === this.P1name){
                this.score[0]++
            } else {
                this.score[1]++
            }
        });
    }
    
}

module.exports = TennisScore;