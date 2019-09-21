/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor(globalAttr) {
    this.createdAt = globalAttr.createdAt;
    this.name = globalAttr.name;
    this.dimensions = globalAttr.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
  constructor(statsAttr) {
    super(statsAttr);
    this.healthPoints = statsAttr.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage`;
  }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
  constructor(charAttr) {
    super(charAttr);
    this.team = charAttr.team;
    this.weapons = charAttr.weapons;
    this.language = charAttr.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

class Villain extends Humanoid {
  constructor(evilAttr) {
    super(evilAttr);
  }
  pencilTrick() {
    return `How about a magic trick? I'm gonna make this ${this.weapons} disappear`;
  }
}

class Hero extends Humanoid {
  constructor(goodAttr) {
    super(goodAttr);
  }
  batThrow() {
    return `WHERE IS SHE?!?! *throws* ${this.weapons} `;
  }
}
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 3,
    height: 5
  },
  healthPoints: 20,
  name: "Batman",
  team: "Justice League",
  weapons: ["Batarang"],
  language: "Sore Throat"
});

const villain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 2,
    height: 4
  },
  healthPoints: 20,
  name: "Joker",
  team: "Suicide Squad",
  weapons: ["Pencil"],
  language: "Sarcasm"
});

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(villain.pencilTrick());
console.log(hero.batThrow());

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
