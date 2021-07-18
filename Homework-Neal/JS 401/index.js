// Base Classes
class Hunter {
  constructor(outsideName) {
    this.hitPoints = 100;
    this.baseAttack = outsideValue; //Base attack power - damage per attack.
    this.baseDefense = outsideValue; //Base Defense
    this.attackPool = outsideValue; //number of possible attacks per turn
    this.name = outsideName;
//find attack power
function findAttack(
    attackPower = this.baseAttack * this.attackPool)
//Basic Attack/Defense
attack(target); {
    findAttack();
target.hitPoints = (target.hitPoints - this.attackPower);
console.log(`${this.name} attacks ${target.name}!`);
}

defend(target); {
target.attackPower = (target.attackPower - this.baseDefense);
console.log(`${this.name} puts up their guard against ${target.name}!`);
}
  }
}

class Devil {
  constructor(outsideName) {
    this.hitPoints = 100;
    this.baseAttack = outsideValue;
    this.baseDefense = outsideValue;
    this.attackPool = outsideValue; //number of possible attacks per turn
    this.name = outsideName;
//find attack power
function findAttack(
    attackPower = this.baseAttack * this.attackPool)
//Basic Attack/Defense
attack(target); {
    findAttack();
target.hitPoints = target.hitPoints - (this.attackPower-target.baseDefense);
console.log(`${this.name} attacks ${target.name}!`);
}

defend(target); {
target.attackPower = (target.attackPower - this.baseDefense);
console.log(`${this.name} puts up their guard against ${target.name}!`);
}
  }
}

//Hunter Classes
//findAttack should add up to 30 tops

class Brawler extends Hunter { //Brawler - low attack, decent attack pool and defense
    constructor() {
      super();
      this.baseAttack = 5
      this.attackPool = 4
      this.baseDefense = 20
    }
}

class Tank extends Hunter { //Tank - high attack, high defense, low attack pool
    constructor() {
        super();
        this.baseAttack = 30
        this.attackPool = 1
        this.baseDefense = 30
        this.isTired = false

        if (this.isTired = true){
            console.log(`${this.name} is tired!`)
        }
    bisect(target) //cuts enemy HP in half but lose ability to attack gain until "restUp" is used
    if (this.isTired=false){
        target.hitPoints=(target.hitPoints/2)-target.baseDefense,
        console.log(`${this.name} cuts ${target.name} down to size! Kah-CHUNK!`),
        this.isTired=true;
    }   else
    console.log(`${this.name} says "What am I, a machine?! I need a break!"`)
    execution(target) //drop a big attack, but lose ability to attack again until "restUp" is used
        if (this.isTired=false){
            target.hitPoints=target.hitPoints - (this.attackPower*2), 
        console.log(`${this.name} lands a brutal attack on ${target.name}!`),
        this.isTired=true
        } else 
    console.log(`${this.name} says "Give me a second, will you?! I can't go that hard all the time!`)
    restUp( //toggles .isTired back to "false" and enables attacking
        this.isTired = false,
        console.log(`${this.name} gathers herself for another attack!`)
    )
    }
}


class Blaster extends Hunter { //Blaster - high attack, low defense
    constructor() {
        super();
        this.baseAttack = 10
        this.attackPool = 3
        this.baseDefense = 5
    fireStorm(target)
    findAttack();
        target.hitPoints=target.hitPoints-((this.attackPower*2)-target.baseDefense); 
        this.attackPool--;
        console.log(`${this.name} converts the oxygen in the air around ${target.name} to Hydrogen, and ignites it. Kaboom!`);
    
    chargeUp();
        this.attackPool++,
        console.log(`${this.name} gathers his strength!`)
    }
}
//Gunner - low attack, high attack pool, low defense
class Gunner extends Hunter {
    constructor() {
        super();
        this.baseAttack = 2
        this.attackPool = 12
        this.baseDefense = 5
        function getRandom() {
                return Math.random() * (6 - 1) + 1;}

    fanHammer(target);
    getRandom();
    console.log(getRandom)
        target.hitPoints=(target.hitPoints-(this.attackPower+this.baseAttack*Math.random)-target.baseDefense),
        console.log(`${this.name} fans the hammer and sends a hail of bullets at ${target.name}!`);
    russianRoulette(target);
    getRandom();
    console.log(`${this.name} loads a single round, and spins the cylinder!`)
    console.log(`${this.name} lines up a shot and pulls the trigger!`)
    console.log(getRandom)
    if getRandom.return=6 {
        target.hitPoints=0;
        console.log(`${this.name}'s shot lands dead in the center of `${target.name}'s weak spot. Bullseye.'.)

    } else {
        console.log(`Click.`)
    }

    }
}

//Devil Classes

class Toad extends Devil {
    constructor() {
        super();
        this.baseAttack = 10
        this.attackPool = 3
        this.baseDefense = 30
        this.isSwollen = false
    tongueLash(target);{
    findAttack(attackPower = this.baseAttack * this.attackPool);
    target.hitPoints = target.hitPoints-(this.attackPower-target.baseDefense);
    console.log(`${this.name} whips its barbed tongue at ${target.name}`)
        }

    swellUp(){
        if (this.isSwollen=false) {
            this.baseDefense= this.baseDefense*2;
            console.log(`${this.name}'s entire body swells as it fills with noxious bile!`)
        } else {
            console.log(`${this.name} is already about to burst!`)
            }
        }

    vomit(target)
        if (this.isSwollen=true){ 
        target.hitPoints = target.hitPoints-(this.attackPower*2-target.baseDefense);
        this.isSwollen=false;
        console.log(`${this.name} spews a wave of bile at ${target.name}!`)
        }

    
}
}

class Manticore extends Devil {
    constructor() {
        super();
        this.baseAttack = 5
        this.attackPool = 10
        this.baseDefense = 5
    
    bristleUp(); {
        console.log(`${this.name} bristles with long spines pushing through its flesh!`);
        this.baseAttack++;
    }
    maul(); {
        console.log(`${this.name} throws itself upon ${target.name}, biting and clawing!`)
        target.hitPoints = target.hitPoints-()
    }
    }
}

class Beelzebub extends Devil {
    constructor() {
        super();
        this.baseAttack = 2
        this.attackPool = 15
        this.baseDefense = 1
    }
}

//Hunters
const Osheen = new Brawler("Osheen Ferguson");
this.name = Osheen
console.log(Osheen)

const Savannah = new Gunner("Savannah Smythe")
this.name = Savannah
console.log(Savannah)

const Christopher = new Blaster("Christopher Laszaro");
this.name = Christopher
console.log(Christopher)

const Columbina = new Tank("Columbina Laszaro");
this.name = Columbina
console.log(Columbina)

//Devils
const Toad = new Toad("Toad Demon")

const Manticore = new Manticore("Manticore Demon")

const Beelzebub = new Beelzebub("Bloatfly Demon")