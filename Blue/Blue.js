/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Blue extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Blue/costumes/1.svg", { x: 50, y: 50 }),
      new Costume("2", "./Blue/costumes/2.svg", { x: 50, y: 50 }),
      new Costume("3", "./Blue/costumes/3.svg", { x: 50, y: 50 }),
      new Costume("4", "./Blue/costumes/4.svg", { x: 50, y: 50 }),
      new Costume("5", "./Blue/costumes/5.svg", { x: 35, y: 35 }),
      new Costume("6", "./Blue/costumes/6.svg", { x: 50, y: 50 }),
      new Costume("7", "./Blue/costumes/7.svg", { x: 50, y: 50 }),
      new Costume("8", "./Blue/costumes/8.svg", { x: 50, y: 50 }),
      new Costume("9", "./Blue/costumes/9.svg", { x: 50, y: 50 }),
      new Costume("10", "./Blue/costumes/10.svg", { x: 116, y: 116 })
    ];

    this.sounds = [new Sound("Meow", "./Blue/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "loadtiles" },
        this.whenIReceiveLoadtiles
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "movetiles" },
        this.whenIReceiveMovetiles
      )
    ];

    this.vars.isClone4 = 0;
    this.vars.cloneRow4 = 6;
    this.vars.cloneColumn4 = 7;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.vars.isClone4 = 0;
  }

  *startAsClone() {
    this.costume = this.random(1, 10);
    this.visible = true;
  }

  *whenIReceiveLoadtiles() {
    yield* this.loadTiles();
    if (this.stage.vars.colour == 4) {
      for (let i = 0; i < 60; i++) {
        yield* this.tick();
        while (!(new Date().getSeconds() > this.stage.vars.lastSecond)) {
          yield;
        }
        yield;
      }
    }
  }

  *loadTiles() {
    if (1 == 1) {
      this.deleteThisClone();
    }
    if (this.vars.isClone4 == 0 && this.stage.vars.colour == 4) {
      this.vars.isClone4 = 1;
      this.vars.cloneRow4 = 1;
      this.stage.vars.lastSecond = 0;
      this.goto(-250, 200);
      for (let i = 0; i < 5; i++) {
        this.vars.cloneColumn4 = 1;
        for (let i = 0; i < 6; i++) {
          this.createClone();
          this.x += 100;
          this.vars.cloneColumn4 += 1;
        }
        this.x = -250;
        this.y += -100;
        this.vars.cloneRow4 += 1;
      }
      this.vars.isClone4 = 0;
    }
  }

  *tick() {
    this.stage.vars.lastSecond = new Date().getSeconds();
    this.stage.vars.movementType = this.random(1, 4);
    if (
      this.stage.vars.movementType == 1 ||
      this.stage.vars.movementType == 3
    ) {
      this.stage.vars.movementColumn = this.random(2, 5);
    } else {
      this.stage.vars.movementRow = this.random(2, 3);
      if (this.stage.vars.movementRow == 3) {
        this.stage.vars.movementRow = 4;
      }
    }
    this.broadcast("movetiles");
  }

  *whenIReceiveMovetiles() {
    if (this.stage.vars.movementType == 1) {
      if (this.vars.cloneColumn4 == this.stage.vars.movementColumn) {
        if (this.vars.cloneRow4 == 1) {
          this.y = -200;
          this.costume = this.random(1, 10);
          this.vars.cloneRow4 = 5;
        } else {
          yield* this.glide(0.15, this.x, this.y + 100);
          this.vars.cloneRow4 += -1;
        }
      }
    }
    if (this.stage.vars.movementType == 2) {
      if (this.vars.cloneRow4 == this.stage.vars.movementRow) {
        if (this.vars.cloneColumn4 == 6) {
          this.x = -250;
          this.costume = this.random(1, 10);
          this.vars.cloneColumn4 = 1;
        } else {
          yield* this.glide(0.15, this.x + 100, this.y);
          this.vars.cloneColumn4 += 1;
        }
      }
    }
    if (this.stage.vars.movementType == 3) {
      if (this.vars.cloneColumn4 == this.stage.vars.movementColumn) {
        if (this.vars.cloneRow4 == 5) {
          this.y = 200;
          this.costume = this.random(1, 10);
          this.vars.cloneRow4 = 1;
        } else {
          yield* this.glide(0.15, this.x, this.y - 100);
          this.vars.cloneRow4 += 1;
        }
      }
    }
    if (this.stage.vars.movementType == 4) {
      if (this.vars.cloneRow4 == this.stage.vars.movementRow) {
        if (this.vars.cloneColumn4 == 1) {
          this.x = 250;
          this.costume = this.random(1, 10);
          this.vars.cloneColumn4 = 6;
        } else {
          yield* this.glide(0.15, this.x - 100, this.y);
          this.vars.cloneColumn4 += -1;
        }
      }
    }
  }
}
