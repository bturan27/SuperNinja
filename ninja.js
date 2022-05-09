class Ninja{
    constructor(name, health=15){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
    console.log(`my name is ${this.name}`) ;
    }

    showStats() {
    console.log (`name ${this.name}`);
    console.log (`health ${this.health}`);
    console.log (`speed ${this.speed}`);
    console.log (`strength ${this.strength}`);
    }

    drinkSake() {
    this.health += 10;
    console.log(`ninja get ${this.health} power when they drink sake`)
    }

}
class Sensei extends Ninja{
    constructor(name) {
        super(name);
        this.health= 200;
        this.speed =10;
        this.strength = 10;
        this.wisdom = 10;

    }

    speakWisdom(){
        this.drinkSake();


    console.log(`what one programmer can do in one month,two programmer can do in two months`);
    }
}


const superSensei = new Sensei("Begum");

superSensei.speakWisdom();
superSensei.showStats();



