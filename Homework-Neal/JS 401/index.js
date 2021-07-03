// Base Classes
class Hunter {
  constructor(outsideName) {
    this.hitPoints = 100;
    this.baseAttack = outsideValue; //Base attack power - damage per attack.
    this.baseDefense = outsideValue; //Base Defense
    this.attackPool = outsideValue; //number of possible attacks per turn
    this.name = outsideName;
  }
}

class Devil {
  constructor(outsideName) {
    this.hitPoints = 100;
    this.baseAttack = outsideValue;
    this.baseDefense = outsideValue;
    this.attackPool = outsideValue; //number of possible attacks per turn
    this.name = outsideName;
  }
}

//find attack power
function findAttack(
attackPower = this.baseAttack * this.attackPool)

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
    }
}


class Blaster extends Hunter { //Blaster - high attack, low defense
    constructor() {
        super();
        this.baseAttack = 10
        this.attackPool = 3
        this.baseDefense = 5
    }
}
//Gunner - low attack, high attack pool, low defense
class Gunner extends Hunter {
    constructor() {
        super();
        this.baseAttack = 2
        this.attackPool = 12
        this.baseDefense = 5
    }
}

//Devil Classes

class Toad extends Devil {
    constructor() {
        super();
        this.baseAttack = 10
        this.attackPool = 3
        this.baseDefense = 30
    }
}

class Manticore extends Devil {
    constructor() {
        super();
        this.baseAttack = 5
        this.attackPool = 10
        this.baseDefense = 5
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

//Basic Attack/Defense
attack(target); {
    findAttack();
target.hitPoints = (target.hitPoints - this.attackPower);
console.log(`${this.name} attacks ${target.name}!`);
}
//Basic melee attack. Tale as old as time.

defend(target); {
target.attackPower = (target.attackPower - this.baseDefense);
console.log(`${this.name} puts up their guard against ${target.name}!`);
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