/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Warnings extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "turbowarp-warning",
        "./Warnings/costumes/turbowarp-warning.svg",
        { x: 184.92397234645404, y: 6.0076911728012306 }
      ),
      new Costume("animation-note", "./Warnings/costumes/animation-note.svg", {
        x: 162.91257242555162,
        y: 6.1237626194144354
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 140);
    this.costume = "animation-note";
    if (undefined == 0) {
      this.createClone();
    }
    this.goto(0, -140);
    this.visible = true;
    while (!(new Date().getSeconds() == 0)) {
      yield;
    }
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (!(new Date().getSeconds() == 0)) {
      if (this.stage.vars.night == 1) {
        this.effects.clear();
      } else {
        this.effects.brightness = 100;
      }
      yield;
    }
  }

  *startAsClone() {
    this.costume = "turbowarp-warning";
    this.visible = true;
    while (!(new Date().getSeconds() == 0)) {
      if (this.stage.vars.night == 1) {
        this.effects.clear();
      } else {
        this.effects.brightness = 100;
      }
      yield;
    }
    this.deleteThisClone();
  }
}
