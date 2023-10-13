//Decorator Pattern for Game Weapons
//Problem: In a game, you have weapons, and you want to enhance them with different properties and effects. 
//The Decorator Pattern allows you to dynamically add features to game weapons.

class Weapon {
    constructor(name, damage) {
      this.name = name;
      this.damage = damage;
    }
  
    attack() {
      return `Attacking with ${this.name}, dealing ${this.damage} damage.`;
    }
  }
  
  class WeaponDecorator {
    constructor(weapon, modifier) {
      this.weapon = weapon;
      this.modifier = modifier;
    }
  
    attack() {
      return `${this.weapon.attack()} ${this.modifier}`;
    }
  }
  
  const basicSword = new Weapon("Sword", 10);
  const fireEnchantment = new WeaponDecorator(basicSword, "and inflicting fire damage");
  const frostEnchantment = new WeaponDecorator(basicSword, "and freezing the target");
  
  console.log(basicSword.attack());
  console.log(fireEnchantment.attack());
  console.log(frostEnchantment.attack());
  