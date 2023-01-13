/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Yellow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Yellow/costumes/1.svg", { x: 50, y: 50 }),
      new Costume("2", "./Yellow/costumes/2.svg", { x: 50, y: 50 }),
      new Costume("3", "./Yellow/costumes/3.svg", { x: 50, y: 50 }),
      new Costume("4", "./Yellow/costumes/4.svg", { x: 50, y: 50 }),
      new Costume("5", "./Yellow/costumes/5.svg", { x: 35, y: 35 }),
      new Costume("6", "./Yellow/costumes/6.svg", { x: 50, y: 50 }),
      new Costume("7", "./Yellow/costumes/7.svg", { x: 50, y: 50 }),
      new Costume("8", "./Yellow/costumes/8.svg", { x: 50, y: 50 }),
      new Costume("9", "./Yellow/costumes/9.svg", { x: 50, y: 50 }),
      new Costume("10", "./Yellow/costumes/10.svg", { x: 116, y: 116 })
    ];

    this.sounds = [new Sound("Meow", "./Yellow/sounds/Meow.wav")];

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

    this.vars.isClone2 = 0;
    this.vars.cloneRow2 = 6;
    this.vars.cloneColumn2 = 7;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.vars.isClone2 = 0;
  }

  *startAsClone() {
    this.costume = this.random(1, 10);
    this.visible = true;
  }

  *whenIReceiveLoadtiles() {
    yield* this.loadTiles();
    if (this.stage.vars.colour == 2) {
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
    if (this.vars.isClone2 == 0 && this.stage.vars.colour == 2) {
      this.vars.isClone2 = 1;
      this.vars.cloneRow2 = 1;
      this.stage.vars.lastSecond = 0;
      this.goto(-250, 200);
      for (let i = 0; i < 5; i++) {
        this.vars.cloneColumn2 = 1;
        for (let i = 0; i < 6; i++) {
          this.createClone();
          this.x += 100;
          this.vars.cloneColumn2 += 1;
        }
        this.x = -250;
        this.y += -100;
        this.vars.cloneRow2 += 1;
      }
      this.vars.isClone2 = 0;
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
      if (this.vars.cloneColumn2 == this.stage.vars.movementColumn) {
        if (this.vars.cloneRow2 == 1) {
          this.y = -200;
          this.costume = this.random(1, 10);
          this.vars.cloneRow2 = 5;
        } else {
          yield* this.glide(0.15, this.x, this.y + 100);
          this.vars.cloneRow2 += -1;
        }
      }
    }
    if (this.stage.vars.movementType == 2) {
      if (this.vars.cloneRow2 == this.stage.vars.movementRow) {
        if (this.vars.cloneColumn2 == 6) {
          this.x = -250;
          this.costume = this.random(1, 10);
          this.vars.cloneColumn2 = 1;
        } else {
          yield* this.glide(0.15, this.x + 100, this.y);
          this.vars.cloneColumn2 += 1;
        }
      }
    }
    if (this.stage.vars.movementType == 3) {
      if (this.vars.cloneColumn2 == this.stage.vars.movementColumn) {
        if (this.vars.cloneRow2 == 5) {
          this.y = 200;
          this.costume = this.random(1, 10);
          this.vars.cloneRow2 = 1;
        } else {
          yield* this.glide(0.15, this.x, this.y - 100);
          this.vars.cloneRow2 += 1;
        }
      }
    }
    if (this.stage.vars.movementType == 4) {
      if (this.vars.cloneRow2 == this.stage.vars.movementRow) {
        if (this.vars.cloneColumn2 == 1) {
          this.x = 250;
          this.costume = this.random(1, 10);
          this.vars.cloneColumn2 = 6;
        } else {
          yield* this.glide(0.15, this.x - 100, this.y);
          this.vars.cloneColumn2 += -1;
        }
      }
    }
  }
}
