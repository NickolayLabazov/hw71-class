import {
  Undead, Bowman, Swordsman, Zombie, Daemon, Magician,
} from '../src/function';

test('Undead', () => {
  const expected = {
    type: 'Undead', level: 1, health: 100, attack: 25, defence: 25,
  };

  const received = new Undead();
  expect(received).toEqual(expected);
});

test('Bowman', () => {
  const expected = {
    type: 'Bowman', level: 1, health: 100, attack: 25, defence: 25,
  };

  const received = new Bowman();
  expect(received).toEqual(expected);
});

test('Swordsman', () => {
  const expected = {
    type: 'Swordsman', level: 1, health: 100, attack: 40, defence: 10,
  };
  const received = new Swordsman();
  expect(received).toEqual(expected);
});

test('Zombie', () => {
  const expected = {
    type: 'Zombie', level: 1, health: 100, attack: 40, defence: 10,
  };
  const received = new Zombie();
  expect(received).toEqual(expected);
});

test('Daemon', () => {
  const expected = {
    type: 'Daemon', level: 1, health: 100, attack: 10, defence: 40,
  };
  const received = new Daemon();
  expect(received).toEqual(expected);
});

test('Magician', () => {
  const expected = {
    type: 'Magician', level: 1, health: 100, attack: 10, defence: 40,
  };
  const received = new Magician();
  expect(received).toEqual(expected);
});
