// Chain of Responsibility Pattern for Mortal Kombat Events

// Problem: In a game like Mortal Kombat, you have various in-game events that need to be handled by different event handlers. 
//The Chain of Responsibility pattern allows you to pass events along a chain of handlers,
// where each handler decides whether to process the event or pass it to the next handler.


class MKEventHandler {
    constructor(successor) {
      this.successor = successor;
    }
  
    handleEvent(event) {
      if (this.successor) {
        this.successor.handleEvent(event);
      }
    }
  }
  
  class CharacterSelectHandler extends MKEventHandler {
    handleEvent(event) {
      if (event === "character_select") {
        console.log("Character selection event handled by CharacterSelectHandler.");
      } else {
        super.handleEvent(event);
      }
    }
  }
  
  class FightHandler extends MKEventHandler {
    handleEvent(event) {
      if (event === "fight") {
        console.log("Fight event handled by FightHandler.");
      } else {
        super.handleEvent(event);
      }
    }
  }
  
  class FatalityHandler extends MKEventHandler {
    handleEvent(event) {
      if (event === "fatality") {
        console.log("Fatality event handled by FatalityHandler.");
      } else {
        super.handleEvent(event);
      }
    }
  }
  

  const characterSelectHandler = new CharacterSelectHandler();
  const fightHandler = new FightHandler(characterSelectHandler);
  const fatalityHandler = new FatalityHandler(fightHandler);
  

  fatalityHandler.handleEvent("character_select"); 
  fatalityHandler.handleEvent("fight"); 
  fatalityHandler.handleEvent("fatality"); 
  fatalityHandler.handleEvent("finish_him"); 
  