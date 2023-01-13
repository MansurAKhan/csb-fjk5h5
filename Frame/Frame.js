/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Frame extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("day", "./Frame/costumes/day.svg", { x: 240, y: 180 }),
      new Costume("night", "./Frame/costumes/night.svg", { x: 240, y: 180 })
    ];

    this.sounds = [new Sound("pop", "./Frame/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.moveAhead();
    while (!(new Date().getSeconds() == 0)) {
      if (this.stage.vars.night == 1) {
        this.costume = "night";
      } else {
        this.costume = "day";
      }
      yield;
    }
    while (true) {
      if (this.stage.vars.night == 1) {
        this.costume = "night";
      } else {
        this.costume = "day";
      }
      while (!(new Date().getSeconds() == 0)) {
        yield;
      }
      yield;
    }
  }
}
