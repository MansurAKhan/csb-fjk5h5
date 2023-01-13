/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Banner extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("red", "./Banner/costumes/red.svg", {
        x: 278.4999999999997,
        y: 50
      }),
      new Costume("yellow", "./Banner/costumes/yellow.svg", {
        x: 278.4999999999997,
        y: 50
      }),
      new Costume("green", "./Banner/costumes/green.svg", {
        x: 278.4999999999997,
        y: 50
      }),
      new Costume("blue", "./Banner/costumes/blue.svg", {
        x: 278.4999999999997,
        y: 50
      }),
      new Costume("purple", "./Banner/costumes/purple.svg", {
        x: 278.4999999999997,
        y: 50
      })
    ];

    this.sounds = [new Sound("pop", "./Banner/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = false;
    while (true) {
      while (!(new Date().getSeconds() == 0)) {
        yield;
      }
      this.visible = true;
      this.costume = this.stage.vars.colour;
      yield;
    }
  }
}
