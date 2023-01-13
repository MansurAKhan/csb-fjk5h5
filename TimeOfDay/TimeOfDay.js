/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TimeOfDay extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("am", "./TimeOfDay/costumes/am.svg", {
        x: 15,
        y: 6.925000000000011
      }),
      new Costume("pm", "./TimeOfDay/costumes/pm.svg", {
        x: 13.669999999999987,
        y: 6.926195925643242
      })
    ];

    this.sounds = [new Sound("pop", "./TimeOfDay/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -18);
    while (true) {
      if (this.stage.vars.format == 0) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      if (new Date().getHours() < 12) {
        this.costume = "am";
      } else {
        this.costume = "pm";
      }
      yield;
    }
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
    while (true) {
      if (this.stage.vars.night == 1) {
        this.effects.clear();
      } else {
        this.effects.brightness = 100;
      }
      while (!(new Date().getSeconds() == 0)) {
        yield;
      }
      yield;
    }
  }
}
