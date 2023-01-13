/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mode extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("auto-dark", "./Mode/costumes/auto-dark.svg", {
        x: 230.02,
        y: 8.210000000000008
      }),
      new Costume("auto-light", "./Mode/costumes/auto-light.svg", {
        x: 230.02,
        y: 8.210000000000008
      }),
      new Costume("day", "./Mode/costumes/day.svg", {
        x: 230.02,
        y: 8.22999999999999
      }),
      new Costume("night", "./Mode/costumes/night.svg", {
        x: 230.01389926028173,
        y: 8.246025937084084
      }),
      new Costume("auto-next-dark", "./Mode/costumes/auto-next-dark.svg", {
        x: 240,
        y: 180
      }),
      new Costume("auto-next-light", "./Mode/costumes/auto-next-light.svg", {
        x: 230.02,
        y: 8.225798324341724
      }),
      new Costume("day-next-dark", "./Mode/costumes/day-next-dark.svg", {
        x: 240,
        y: 180
      }),
      new Costume("day-next-light", "./Mode/costumes/day-next-light.svg", {
        x: 230.02,
        y: 8.22999999999999
      }),
      new Costume("night-next-dark", "./Mode/costumes/night-next-dark.svg", {
        x: 240,
        y: 180
      }),
      new Costume("night-next-light", "./Mode/costumes/night-next-light.svg", {
        x: 230.01390065867565,
        y: 8.246025937084084
      }),
      new Costume("12-dark", "./Mode/costumes/12-dark.svg", { x: 240, y: 180 }),
      new Costume("12-light", "./Mode/costumes/12-light.svg", {
        x: 230.02,
        y: 6.320816634375262
      }),
      new Costume("24-dark", "./Mode/costumes/24-dark.svg", { x: 240, y: 180 }),
      new Costume("24-light", "./Mode/costumes/24-light.svg", {
        x: 230.02,
        y: 6.320861946559177
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "autotext" },
        this.whenIReceiveAutotext
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "daytext" },
        this.whenIReceiveDaytext
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "nighttext" },
        this.whenIReceiveNighttext
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "autotext-next" },
        this.whenIReceiveAutotextNext
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "daytext-next" },
        this.whenIReceiveDaytextNext
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "nighttext-next" },
        this.whenIReceiveNighttextNext
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "12text" },
        this.whenIReceive12text
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "24text" },
        this.whenIReceive24text
      )
    ];
  }

  *whenIReceiveAutotext() {
    this.moveAhead();
    /* TODO: Implement stop other scripts in sprite */ null;
    this.effects.clear();
    if (new Date().getHours() > 20 || new Date().getHours() < 7) {
      this.costume = "auto-light";
    } else {
      this.costume = "auto-dark";
    }
    this.visible = true;
    yield* this.wait(1.5);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
    this.effects.clear();
  }

  *whenIReceiveDaytext() {
    this.moveAhead();
    /* TODO: Implement stop other scripts in sprite */ null;
    this.effects.clear();
    this.costume = "day";
    this.visible = true;
    yield* this.wait(1.5);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
    this.effects.clear();
  }

  *whenIReceiveNighttext() {
    this.moveAhead();
    /* TODO: Implement stop other scripts in sprite */ null;
    this.effects.clear();
    this.costume = "night";
    this.visible = true;
    yield* this.wait(1.5);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
    this.effects.clear();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, -165);
  }

  *whenIReceiveAutotextNext() {
    this.moveAhead();
    /* TODO: Implement stop other scripts in sprite */ null;
    this.effects.clear();
    if (this.sprites["Frame"].costumeNumber == 1) {
      this.costume = "auto-next-dark";
    } else {
      this.costume = "auto-next-light";
    }
    this.visible = true;
    yield* this.wait(1.5);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
    this.effects.clear();
  }

  *whenIReceiveDaytextNext() {
    this.moveAhead();
    /* TODO: Implement stop other scripts in sprite */ null;
    this.effects.clear();
    if (this.sprites["Frame"].costumeNumber == 1) {
      this.costume = "day-next-dark";
    } else {
      this.costume = "day-next-light";
    }
    this.visible = true;
    yield* this.wait(1.5);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
    this.effects.clear();
  }

  *whenIReceiveNighttextNext() {
    this.moveAhead();
    /* TODO: Implement stop other scripts in sprite */ null;
    this.effects.clear();
    if (this.sprites["Frame"].costumeNumber == 1) {
      this.costume = "night-next-dark";
    } else {
      this.costume = "night-next-light";
    }
    this.visible = true;
    yield* this.wait(1.5);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
    this.effects.clear();
  }

  *whenIReceive12text() {
    this.moveAhead();
    /* TODO: Implement stop other scripts in sprite */ null;
    this.effects.clear();
    if (this.sprites["Frame"].costumeNumber == 1) {
      this.costume = "12-dark";
    } else {
      this.costume = "12-light";
    }
    this.visible = true;
    yield* this.wait(1.5);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
    this.effects.clear();
  }

  *whenIReceive24text() {
    this.moveAhead();
    /* TODO: Implement stop other scripts in sprite */ null;
    this.effects.clear();
    if (this.sprites["Frame"].costumeNumber == 1) {
      this.costume = "24-dark";
    } else {
      this.costume = "24-light";
    }
    this.visible = true;
    yield* this.wait(1.5);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
    this.effects.clear();
  }
}
