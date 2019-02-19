export class Character {
  constructor() {
    this.health = 100;
    this.level = 1;
  }
}

export class Undead extends Character {
  constructor() {
    super();
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Magician extends Character {
  constructor() {
    super();
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

export class Bowman extends Character {
  constructor() {
    super();
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor() {
    super();
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Zombie extends Character {
  constructor() {
    super();
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor() {
    super();
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
