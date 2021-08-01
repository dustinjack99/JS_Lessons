// // Base Classes
class Hunter {
  constructor(outsideName) {
    this.hitPoints = 100;
    this.baseAttack = 1; //Base attack power - damage per attack.
    this.baseDefense = 1; //Base Defense
    this.attackPool = 1; //number of possible attacks per turn
    this.name = outsideName;
    this.isTired = false;
    this.isAlive = true;
    function checkAlive() {
      if ((this.hitPoints = 0)) {
        this.isAlive = false;
        console.log(`${this.name} is down!`);
      }
    }
    function checkTired() {
      if ((this.isTired = true)) {
        console.log(`${this.name} is tired!`);
      }
    }
    function restUp() {
      //toggles .isTired back to "false" and enables attacking - meant to slow down use of heavy damage attacks
      (this.isTired = false),
        console.log(`${this.name} is ready for another attack!`);
    }

    //Basic Attack/Defense
    attack(target);
    {
      findAttack(this);
      target.hitPoints =
        target.hitPoints - (this.attackPower - target.baseDefense);
      console.log(`${this.name} attacks ${target.name}!`);
    }

    defend();
    {
      this.baseDefense++;
      console.log(`${this.name} puts up their guard!`);
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
    this.isAlive = true;
  }

  findAttack() {
    //find attack power
    attackPower = this.baseAttack * this.attackPool;
  }

  attack(target) {
    //Basic Attack/Defense
    findAttack();
    target.hitPoints =
      target.hitPoints - (this.attackPower - target.baseDefense);
    console.log(`${this.name} attacks ${target.name}!`);
  }

  defend() {
    this.baseDefense++;
    console.log(`${this.name} puts up their guard!`);
  }
}

//Hunter Classes
//findAttack should add up to 30 tops

//Brawler - low attack, decent attack pool and defense
class Brawler extends Hunter {
  constructor() {
    super();
    this.baseAttack = 5;
    this.attackPool = 6;
    this.baseDefense = 20;

    dempseyRoll(target);
    {
      if ((this.isTired = true)) {
        console.log(
          `${this.name} says, "Can't do that yet, can I! Need a break!"`
        );
      } else {
        findAttack();
        target.hitPoints =
          target.hitPoints - (this.attackPower * 2 - target.baseDefense);
        this.attackPool--;
        this.isTired = true;
        console.log(
          `${this.name} lays into ${target.name} with a hail of punches!`
        );
      }
    }
  }
}
//Tank - high attack, high defense, low attack pool
class Tank extends Hunter {
  constructor() {
    super();
    this.baseAttack = 30;
    this.attackPool = 1;
    this.baseDefense = 30;

    bisect(target); //cuts enemy HP in half but lose ability to attack gain until "restUp" is used
    if ((this.isTired = false)) {
      (target.hitPoints = target.hitPoints / 2 - target.baseDefense),
        console.log(
          `${this.name} cuts ${target.name} down to size! Kah-CHUNK!`
        ),
        (this.isTired = true);
    } else
      console.log(`${this.name} says "What am I, a machine?! I need a break!"`);
    execution(target); //drop a big attack, but lose ability to attack again until "restUp" is used
    if ((this.isTired = false)) {
      (target.hitPoints = target.hitPoints - this.attackPower * 2),
        console.log(`${this.name} lands a brutal attack on ${target.name}!`),
        (this.isTired = true);
    } else
      console.log(
        `${this.name} says "Give me a second, will you?! I can't go that hard all the time!"`
      );
  }
}
//Blaster - high attack, low defense
class Blaster extends Hunter {
  constructor() {
    super();
    this.baseAttack = 10;
    this.attackPool = 3;
    this.baseDefense = 5;
    fireStorm(target);
    findAttack();
    target.hitPoints =
      target.hitPoints - (this.attackPower * 2 - target.baseDefense);
    this.attackPool--;
    console.log(
      `${this.name} converts the oxygen in the air around ${target.name} to hydrogen, and ignites it. Kaboom!`
    );

    chargeUp();
    this.attackPool++, console.log(`${this.name} gathers his strength!`);
  }
}
//Gunner - low attack, high attack pool, low defense
class Gunner extends Hunter {
  constructor() {
    super();
    this.baseAttack = 2;
    this.attackPool = 12;
    this.baseDefense = 5;
    function getRandom() {
      let random = Math.random() * (6 - 1) + 1;
    }

    fanHammer(target);
    getRandom();
    console.log(getRandom);
    (target.hitPoints =
      target.hitPoints -
      (this.attackPower + this.baseAttack * random) -
      target.baseDefense),
      console.log(
        `${this.name} fans the hammer and sends a hail of bullets at ${target.name}!`
      );
    russianRoulette(target);
    getRandom();
    console.log(`${this.name} loads a single round, and spins the cylinder!`);
    console.log(`${this.name} lines up a shot and pulls the trigger!`);
    console.log(getRandom);
    if ((random = 6)) {
      target.hitPoints = 0;
      console.log(
        `${this.name}'s shot lands dead in the center of ${target.name}'s weak spot. Bullseye.`
      );
    } else {
      console.log(`Click.`);
    }
  }
}

//Devil Classes

class Toad extends Devil {
  constructor() {
    super();
    this.baseAttack = 10;
    this.attackPool = 3;
    this.baseDefense = 30;
    this.isSwollen = false;
    tongueLash(target);
    {
      findAttack((attackPower = this.baseAttack * this.attackPool));
      target.hitPoints =
        target.hitPoints - (this.attackPower - target.baseDefense);
      console.log(`${this.name} whips its barbed tongue at ${target.name}`);
    }

    swellUp();
    {
      if ((this.isSwollen = false)) {
        this.baseDefense = this.baseDefense * 2;
        console.log(
          `${this.name}'s entire body swells as it fills with noxious bile!`
        );
      } else {
        console.log(`${this.name} is already about to burst!`);
      }
    }

    vomit(target);
    if ((this.isSwollen = true)) {
      target.hitPoints =
        target.hitPoints - (this.attackPower * 2 - target.baseDefense);
      this.isSwollen = false;
      console.log(`${this.name} spews a wave of bile at ${target.name}!`);
    }
  }
}

class Manticore extends Devil {
  constructor() {
    super();
    this.baseAttack = 2;
    this.attackPool = 10;
    this.baseDefense = 2;

    bristleUp();
    {
      console.log(
        `${this.name}'s hide bristles as long spines push through its flesh!`
      );
      this.baseAttack++;
      this.baseDefense++;
    }
    spineShot();
    {
      findAttack();
      console.log(`${this.name} fires a volley of spines at ${target.name}!`);
      target.hitPoints = target.hitPoints - this.attackPower * 2;
      this.baseAttack--;
      this.baseDefense--;
    }
  }
}

class Beelzebub extends Devil {
  constructor() {
    super();
    this.baseAttack = 2;
    this.attackPool = 15;
    this.baseDefense = 1;

    spit(target);
    {
      findAttack();
      console.log(
        `${this.name} spits a noxious stream of venom at ${target.name}!`
      ),
        (target.hitPoints =
          target.hitPoints - this.attackPower * this.baseAttack);
      this.baseAttack--;
    }
  }
}

//Hunters
const Osheen = new Brawler("Osheen Ferguson");
this.name = Osheen;
console.log(Osheen);

const Savannah = new Gunner("Savannah Smythe");
this.name = Savannah;
console.log(Savannah);

const Christopher = new Blaster("Christopher Laszaro");
this.name = Christopher;
console.log(Christopher);

const Columbina = new Tank("Columbina Laszaro");
this.name = Columbina;
console.log(Columbina);

//Devils
const toad = new Toad("Toad Demon");

const manticore = new Manticore("Manticore Demon");

const beelzebub = new Beelzebub("Bloatfly Demon");
