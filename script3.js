//Memento Pattern for Skyrim Character State
//Problem: In a game like Skyrim, you need to save and restore the player character's state. 
//This is important for saving progress or reverting to a previous state when needed. 
//The Memento Pattern allows you to capture and restore the character's state.


class PlayerCharacter {
    constructor(name, level, health) {
      this.name = name;
      this.level = level;
      this.health = health;
    }
  
    levelUp() {
      console.log(`${this.name} leveled up!`);
      this.level++;
      this.health += 10;
    }
  
    takeDamage(damage) {
      console.log(`${this.name} took ${damage} damage!`);
      this.health -= damage;
    }
  
    saveMemento() {
      return new CharacterMemento(this.name, this.level, this.health);
    }
  
    restoreMemento(memento) {
      this.name = memento.getName();
      this.level = memento.getLevel();
      this.health = memento.getHealth();
    }
  
    displayStatus() {
      console.log(`Name: ${this.name}, Level: ${this.level}, Health: ${this.health}`);
    }
  }
  

  class CharacterMemento {
    constructor(name, level, health) {
      this.name = name;
      this.level = level;
      this.health = health;
    }
  
    getName() {
      return this.name;
    }
  
    getLevel() {
      return this.level;
    }
  
    getHealth() {
      return this.health;
    }
  }
  
 
  class SaveManager {
    constructor() {
      this.mementos = [];
    }
  
    addMemento(memento) {
      this.mementos.push(memento);
    }
  
    getMemento(index) {
      return this.mementos[index];
    }
  }
  

  const dragonborn = new PlayerCharacter("Dragonborn", 1, 100);
  const saveManager = new SaveManager();
  
  console.log("Starting Skyrim adventure...");
  
  dragonborn.levelUp();
  dragonborn.takeDamage(20);
  dragonborn.displayStatus();
  
  saveManager.addMemento(dragonborn.saveMemento()); 
  
  dragonborn.levelUp();
  dragonborn.takeDamage(30);
  dragonborn.displayStatus();
  
  dragonborn.restoreMemento(saveManager.getMemento(0)); 
  console.log("Restored character's state:");
  dragonborn.displayStatus();
  