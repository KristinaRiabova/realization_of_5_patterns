
//  Observer pattern for Witcher
// Problem: We want to notify multiple Witcher objects when a monster event occurs without tightly coupling the GameEvent and Witcher classes.

class GameEvent {
    constructor(name) {
      this.name = name;
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers() {
      for (const observer of this.observers) {
        observer.notify(this.name);
      }
    }
  }
  
  class Witcher {
    constructor(name) {
      this.name = name;
    }
  
    notify(event) {
      console.log(`${this.name} received notification about the event: ${event}`);
    }
  }
  

  const monsterEvent = new GameEvent("Monster Appeared");
  

  const geralt = new Witcher("Geralt");
  const yennefer = new Witcher("Yennefer");
  const triss = new Witcher("Triss");
  

  monsterEvent.addObserver(geralt);
  monsterEvent.addObserver(yennefer);
  monsterEvent.addObserver(triss);
  

  monsterEvent.notifyObservers();
  