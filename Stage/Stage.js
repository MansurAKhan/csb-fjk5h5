/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("day", "./Stage/costumes/day.png", { x: 0, y: 0 }),
      new Costume("night", "./Stage/costumes/night.png", { x: 480, y: 360 }),
      new Costume("red", "./Stage/costumes/red.png", { x: 480, y: 360 }),
      new Costume("yellow", "./Stage/costumes/yellow.png", { x: 480, y: 360 }),
      new Costume("green", "./Stage/costumes/green.png", { x: 480, y: 360 }),
      new Costume("blue", "./Stage/costumes/blue.png", { x: 480, y: 360 }),
      new Costume("purple", "./Stage/costumes/purple.png", { x: 480, y: 360 })
    ];

    this.sounds = [
      new Sound("sound0", "./Stage/sounds/sound0.mp3"),
      new Sound("sound1", "./Stage/sounds/sound1.mp3"),
      new Sound("sound2", "./Stage/sounds/sound2.mp3"),
      new Sound("sound3", "./Stage/sounds/sound3.mp3"),
      new Sound("sound4", "./Stage/sounds/sound4.mp3"),
      new Sound("sound5", "./Stage/sounds/sound5.mp3"),
      new Sound("sound6", "./Stage/sounds/sound6.mp3"),
      new Sound("sound7", "./Stage/sounds/sound7.mp3"),
      new Sound("sound8", "./Stage/sounds/sound8.mp3"),
      new Sound("sound9", "./Stage/sounds/sound9.mp3"),
      new Sound("sound10", "./Stage/sounds/sound10.mp3"),
      new Sound("sound11", "./Stage/sounds/sound11.mp3"),
      new Sound("sound12", "./Stage/sounds/sound12.mp3"),
      new Sound("sound13", "./Stage/sounds/sound13.mp3"),
      new Sound("soundHour", "./Stage/sounds/soundHour.mp3"),
      new Sound("soundHourDay2", "./Stage/sounds/soundHourDay2.mp3"),
      new Sound("soundHourMidNight", "./Stage/sounds/soundHourMidNight.mp3"),
      new Sound("soundHourNight", "./Stage/sounds/soundHourNight.mp3"),
      new Sound("soundNight", "./Stage/sounds/soundNight.mp3"),
      new Sound("soundNight2", "./Stage/sounds/soundNight2.mp3"),
      new Sound("soundNight3", "./Stage/sounds/soundNight3.mp3"),
      new Sound("soundNight4", "./Stage/sounds/soundNight4.mp3"),
      new Sound("soundNight5", "./Stage/sounds/soundNight5.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "modecheck" },
        this.whenIReceiveModecheck
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6)
    ];

    this.vars.colour = 4;
    this.vars.movementType = 4;
    this.vars.movementRow = 2;
    this.vars.movementColumn = 3;
    this.vars.movementX = 0;
    this.vars.movementY = 100;
    this.vars.lastSecond = 9;
    this.vars.mode = 0;
    this.vars.night = 0;
    this.vars.format = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.moveAhead();
    this.costume = this.random(3, 7);
    while (!(new Date().getSeconds() == 0)) {
      yield;
    }
    while (true) {
      if (this.vars.night == 1) {
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

  *whenGreenFlagClicked2() {
    while (true) {
      this.vars.colour = this.random(1, 5);
      while (!(new Date().getSeconds() == 0)) {
        yield;
      }
      this.broadcast("loadtiles");
      while (!(new Date().getSeconds() > 0)) {
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      while (!(new Date().getSeconds() == 0)) {
        yield;
      }
      yield* this.playMusic();
      while (!(new Date().getSeconds() > 0)) {
        yield;
      }
      yield;
    }
  }

  *playMusic() {
    this.stopAllSounds();
    yield* this.broadcastAndWait("modecheck");
    if (this.vars.night == 1) {
      if (new Date().getMinutes() == 0) {
        if (new Date().getHours() == 0) {
          yield* this.startSound("soundHourMidNight");
        } else {
          yield* this.startSound("soundHourNight");
        }
      } else {
        yield* this.startSound(this.random(19, 23));
      }
    } else {
      if (new Date().getMinutes() == 0) {
        yield* this.startSound(this.random(15, 16));
      } else {
        yield* this.startSound(this.random(1, 14));
      }
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      this.broadcast("modecheck");
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    this.vars.mode = 0;
    while (!(new Date().getSeconds() == 0)) {
      if (this.keyPressed("z") || this.keyPressed("y")) {
        while (!!(this.keyPressed("z") || this.keyPressed("y"))) {
          yield;
        }
        if (!(this.vars.mode == 1)) {
          this.vars.mode = 1;
          this.broadcast("daytext");
        } else {
          this.vars.mode = 0;
          this.broadcast("autotext");
        }
      }
      if (this.keyPressed("x")) {
        while (!!this.keyPressed("x")) {
          yield;
        }
        if (!(this.vars.mode == 2)) {
          this.vars.mode = 2;
          this.broadcast("nighttext");
        } else {
          this.vars.mode = 0;
          this.broadcast("autotext");
        }
      }
      yield;
    }
    while (true) {
      if (this.keyPressed("z") || this.keyPressed("y")) {
        while (!!(this.keyPressed("z") || this.keyPressed("y"))) {
          yield;
        }
        if (!(this.vars.mode == 1)) {
          this.vars.mode = 1;
          this.broadcast("daytext-next");
        } else {
          this.vars.mode = 0;
          this.broadcast("autotext-next");
        }
      }
      if (this.keyPressed("x")) {
        while (!!this.keyPressed("x")) {
          yield;
        }
        if (!(this.vars.mode == 2)) {
          this.vars.mode = 2;
          this.broadcast("nighttext-next");
        } else {
          this.vars.mode = 0;
          this.broadcast("autotext-next");
        }
      }
      yield;
    }
  }

  *whenIReceiveModecheck() {
    if (this.vars.mode == 0) {
      if (new Date().getHours() > 20 || new Date().getHours() < 7) {
        this.vars.night = 1;
      } else {
        this.vars.night = 0;
      }
    }
    if (this.vars.mode == 1) {
      this.vars.night = 0;
    }
    if (this.vars.mode == 2) {
      this.vars.night = 1;
    }
  }

  *whenGreenFlagClicked6() {
    this.vars.format = 0;
    while (true) {
      if (this.keyPressed("m")) {
        while (!!this.keyPressed("m")) {
          yield;
        }
        if (!(this.vars.format == 1)) {
          this.vars.format = 1;
          this.broadcast("12text");
        } else {
          this.vars.format = 0;
          this.broadcast("24text");
        }
      }
      yield;
    }
  }
}
