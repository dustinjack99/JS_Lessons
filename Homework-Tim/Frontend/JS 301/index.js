class Hero {
  constructor(outsideName) {
    this.HP = 200;
    this.attack = 5;
    this.heal = 3;
    this.mask = "nice mask";
    this.name = outsideName;
  }
  help(target) {
    target.HP = target.HP + this.heal;
  }
  punch(target) {
    target.HP = target.HP - this.attack;
  }
}
class SuperNormi extends Hero {
  constructor(SuperNormiName) {
    super();
    this.name = SuperNormiName;
  }
}

class SuperVillian extends Hero {
  constructor(SuperVillianName) {
    super();
    this.name = SuperVillianName;
  }
}

const greenLanternAction = document.getElementById("GreenLanternAction");
const greenLanternMenu = document.getElementById("GreenLanternMenu");

greenLanternAction.addEventListener("click", (e) => {
  console.log(e);
  console.log(greenLanternMenu.selected);
});
const Rahs = new SuperVillian("Rahs");
const Sinestro = new SuperVillian("Sinestro");
const GreenLantern = new Hero("GreenLantern");
const Batman = new Hero("Batman");
const Alfred = new SuperNormi("Alfred");
const Lois = new SuperNormi("Lois");

GreenLanternHP = Hero.HP;

console.log(GreenLantern);
console.log(Batman);
Batman.punch(Alfred);
