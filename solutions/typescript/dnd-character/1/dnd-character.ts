export class DnDCharacter {

public strength: number = DnDCharacter.generateAbilityScore();
public dexterity: number = DnDCharacter.generateAbilityScore();
public constitution: number = DnDCharacter.generateAbilityScore();
public intelligence: number = DnDCharacter.generateAbilityScore();
public wisdom: number = DnDCharacter.generateAbilityScore();
public charisma: number = DnDCharacter.generateAbilityScore();

public hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution);
  
  public static generateAbilityScore(): number {
    const noofdice : number = 4;
    const rolls = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
  ];
  rolls.sort((a, b) => a - b);
    return rolls[1] + rolls[2] + rolls[3];
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}

