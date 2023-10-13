//Factory Pattern for Game Characters
//Problem: In a game, you need to create various game characters (e.g., heroes, enemies, NPCs) without knowing their specific types in advance. 
//The Factory Pattern allows you to create game characters dynamically.


class Character {
    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      return `I am ${this.name}, a game character.`;
    }
  }
  
  class CharacterFactory {
    createCharacter(type, name) {
      if (type === "hero") {
        return new Hero(name);
      } else if (type === "enemy") {
        return new Enemy(name);
      } else {
        return new NPC(name);
      }
    }
  }
  
  class Hero extends Character {
    introduce() {
      return `I am ${this.name}, a hero.`;
    }
  }
  
  class Enemy extends Character {
    introduce() {
      return `I am ${this.name}, an enemy.`;
    }
  }
  
  class NPC extends Character {
    introduce() {
      return `I am ${this.name}, an NPC.`;
    }
  }
  
  const factory = new CharacterFactory();
  const gameCharacter1 = factory.createCharacter("hero", "Dovakin");
  const gameCharacter2 = factory.createCharacter("enemy", "Dragon");
  
  console.log(gameCharacter1.introduce());
  console.log(gameCharacter2.introduce());
  

