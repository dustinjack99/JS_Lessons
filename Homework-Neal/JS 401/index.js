class Hunter {
  constructor(outsideName) {
    this.hitPoints = 100;
    this.attackPower = 5;
    this.attackPool = outsideValue; //number of possible attacks per turn - shouldn't be any higher than 4
    this.name = outsideName;
  }
}

class Gunner {
  constructor(outsideName) {
    this.hitpoints = 100;
    this.attackPower = 2;
    this.attackPool = outsideValue; //number of possible attacks per turn - shouldn't be higher than 12
    this.name = outsideName;
  }
}

class Devil {
  constructor(outsideName) {
    this.hitPoints = 100;
    this.attackPower = 10;
    this.attackPool = outsideValue; //number of possible attacks per turn - shouldn't be higher than 2
    this.name = outsideName;
  }
}

//Fighter Classes
