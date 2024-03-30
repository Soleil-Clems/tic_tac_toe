export default class Player{
    constructor(name, score=0, symbole){
        this.name=name
        this.score= score
        this.symbole = symbole
    }

    getSymbole(){
        return this.symbole
    }
    getScore(){
        return this.score
    }

    getName(){
        return this.name
    }
}