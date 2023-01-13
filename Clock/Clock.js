/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Clock extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("00", "./Clock/costumes/00.svg", {
        x: 25.278798013862115,
        y: 14.943517072197125
      }),
      new Costume("01", "./Clock/costumes/01.svg", {
        x: 20.069293640045174,
        y: 14.883439728453567
      }),
      new Costume("02", "./Clock/costumes/02.svg", {
        x: 24.069457855319968,
        y: 15.003258482688409
      }),
      new Costume("03", "./Clock/costumes/03.svg", {
        x: 24.676180912609652,
        y: 15.004637639684688
      }),
      new Costume("04", "./Clock/costumes/04.svg", {
        x: 25.174293640045164,
        y: 14.91268631675618
      }),
      new Costume("05", "./Clock/costumes/05.svg", {
        x: 24.449508892478548,
        y: 14.916192761788011
      }),
      new Costume("06", "./Clock/costumes/06.svg", {
        x: 24.735029345037617,
        y: 15.002045302515
      }),
      new Costume("07", "./Clock/costumes/07.svg", {
        x: 23.099162062084872,
        y: 14.895552949483687
      }),
      new Costume("08", "./Clock/costumes/08.svg", {
        x: 24.784307893112725,
        y: 14.998243912842696
      }),
      new Costume("09", "./Clock/costumes/09.svg", {
        x: 24.79055953502649,
        y: 14.9295520358082
      }),
      new Costume("10", "./Clock/costumes/10.svg", {
        x: 21.324280796164373,
        y: 14.901931554232078
      }),
      new Costume("11", "./Clock/costumes/11.svg", {
        x: 16.125,
        y: 14.405000000000001
      }),
      new Costume("12", "./Clock/costumes/12.svg", {
        x: 20.12500000000003,
        y: 14.616350147322606
      }),
      new Costume("13", "./Clock/costumes/13.svg", {
        x: 20.751727670176052,
        y: 14.817483426684134
      }),
      new Costume("14", "./Clock/costumes/14.svg", {
        x: 21.234999999999957,
        y: 14.444999999999993
      }),
      new Costume("15", "./Clock/costumes/15.svg", {
        x: 20.505051907141308,
        y: 14.641180318928548
      }),
      new Costume("16", "./Clock/costumes/16.svg", {
        x: 20.789828630388428,
        y: 14.784068549228977
      }),
      new Costume("17", "./Clock/costumes/17.svg", {
        x: 19.575000000000045,
        y: 14.409999999999997
      }),
      new Costume("18", "./Clock/costumes/18.svg", {
        x: 20.820022111186887,
        y: 14.793763345120169
      }),
      new Costume("19", "./Clock/costumes/19.svg", {
        x: 20.8464532960962,
        y: 14.78571823690379
      }),
      new Costume("20", "./Clock/costumes/20.svg", {
        x: 24.070679821418764,
        y: 14.928411211095579
      }),
      new Costume("21", "./Clock/costumes/21.svg", {
        x: 18.891235896246116,
        y: 14.611769338025482
      }),
      new Costume("22", "./Clock/costumes/22.svg", {
        x: 22.886648897253764,
        y: 14.611857958191706
      }),
      new Costume("23", "./Clock/costumes/23.svg", {
        x: 23.493876839406965,
        y: 14.808069583118566
      }),
      new Costume("24", "./Clock/costumes/24.svg", {
        x: 23.696648897253738,
        y: 14.636769338025488
      }),
      new Costume("25", "./Clock/costumes/25.svg", {
        x: 23.282868916108697,
        y: 14.824320996981555
      }),
      new Costume("26", "./Clock/costumes/26.svg", {
        x: 23.56718463328292,
        y: 14.814126318023057
      }),
      new Costume("27", "./Clock/costumes/27.svg", {
        x: 22.321235896246094,
        y: 14.597476488376856
      }),
      new Costume("28", "./Clock/costumes/28.svg", {
        x: 23.571355116258502,
        y: 14.813763345120151
      }),
      new Costume("29", "./Clock/costumes/29.svg", {
        x: 23.627992450008264,
        y: 14.8079555531109
      }),
      new Costume("30", "./Clock/costumes/30.svg", {
        x: 24.678802119535618,
        y: 15.024015317253856
      }),
      new Costume("31", "./Clock/costumes/31.svg", {
        x: 19.49999999999997,
        y: 14.81807214011522
      }),
      new Costume("32", "./Clock/costumes/32.svg", {
        x: 23.47999999999999,
        y: 14.828033740970255
      }),
      new Costume("33", "./Clock/costumes/33.svg", {
        x: 24.092082405004874,
        y: 14.832492619037339
      }),
      new Costume("34", "./Clock/costumes/34.svg", {
        x: 24.609999999999985,
        y: 14.812144306286314
      }),
      new Costume("35", "./Clock/costumes/35.svg", {
        x: 23.85155231887566,
        y: 14.823698461108307
      }),
      new Costume("36", "./Clock/costumes/36.svg", {
        x: 24.115754439392816,
        y: 14.82259925984377
      }),
      new Costume("37", "./Clock/costumes/37.svg", {
        x: 22.900009976814005,
        y: 14.812404508335248
      }),
      new Costume("38", "./Clock/costumes/38.svg", {
        x: 24.160022117122338,
        y: 14.816025826824955
      }),
      new Costume("39", "./Clock/costumes/39.svg", {
        x: 24.22126589498123,
        y: 14.809902084918122
      }),
      new Costume("40", "./Clock/costumes/40.svg", {
        x: 25.119418714296387,
        y: 14.895398304684136
      }),
      new Costume("41", "./Clock/costumes/41.svg", {
        x: 19.720000000000027,
        y: 14.400000000000006
      }),
      new Costume("42", "./Clock/costumes/42.svg", {
        x: 23.920000000000016,
        y: 14.616526371096796
      }),
      new Costume("43", "./Clock/costumes/43.svg", {
        x: 24.527082405004876,
        y: 14.802673429742839
      }),
      new Costume("44", "./Clock/costumes/44.svg", {
        x: 25.05000000000001,
        y: 14.414999999999992
      }),
      new Costume("45", "./Clock/costumes/45.svg", {
        x: 24.29631880558233,
        y: 14.606842632461962
      }),
      new Costume("46", "./Clock/costumes/46.svg", {
        x: 24.580756768523685,
        y: 14.784093160122296
      }),
      new Costume("47", "./Clock/costumes/47.svg", {
        x: 23.345000000000027,
        y: 14.439999999999998
      }),
      new Costume("48", "./Clock/costumes/48.svg", {
        x: 24.5952418550757,
        y: 14.82765613372996
      }),
      new Costume("49", "./Clock/costumes/49.svg", {
        x: 24.641265894981302,
        y: 14.807326698698148
      }),
      new Costume("50", "./Clock/costumes/50.svg", {
        x: 24.199049210517472,
        y: 14.998468320508266
      }),
      new Costume("51", "./Clock/costumes/51.svg", {
        x: 18.990000000000038,
        y: 14.631245000464219
      }),
      new Costume("52", "./Clock/costumes/52.svg", {
        x: 22.995000000000005,
        y: 14.813162764774717
      }),
      new Costume("53", "./Clock/costumes/53.svg", {
        x: 23.56384795599422,
        y: 14.812707858223376
      }),
      new Costume("54", "./Clock/costumes/54.svg", {
        x: 24.085000000000008,
        y: 14.63183942325449
      }),
      new Costume("55", "./Clock/costumes/55.svg", {
        x: 23.36504635446147,
        y: 14.630890746893272
      }),
      new Costume("56", "./Clock/costumes/56.svg", {
        x: 23.618495806431724,
        y: 14.78337952789883
      }),
      new Costume("57", "./Clock/costumes/57.svg", {
        x: 22.420000000000044,
        y: 14.630957307635867
      }),
      new Costume("58", "./Clock/costumes/58.svg", {
        x: 23.67502211118679,
        y: 14.802720808686104
      }),
      new Costume("59", "./Clock/costumes/59.svg", {
        x: 23.706453296096242,
        y: 14.808029517096031
      }),
      new Costume("separator", "./Clock/costumes/separator.svg", {
        x: 3.3864376591797622,
        y: 10.934665239182465
      }),
      new Costume("message", "./Clock/costumes/message.svg", {
        x: 168.44000000000005,
        y: 101.26736162419482
      }),
      new Costume("12h-1", "./Clock/costumes/12h-1.svg", {
        x: -7.209286359954859,
        y: 14.572989728453564
      }),
      new Costume("12h-2", "./Clock/costumes/12h-2.svg", {
        x: -3.256990352187728,
        y: 14.894557158739389
      }),
      new Costume("12h-3", "./Clock/costumes/12h-3.svg", {
        x: -2.651729087390322,
        y: 14.873104439986236
      }),
      new Costume("12h-4", "./Clock/costumes/12h-4.svg", {
        x: -1.9742863599548457,
        y: 14.63066631675619
      }),
      new Costume("12h-5", "./Clock/costumes/12h-5.svg", {
        x: -3.2694111075214494,
        y: 14.506962761787918
      }),
      new Costume("12h-6", "./Clock/costumes/12h-6.svg", {
        x: -2.417063991098985,
        y: 14.754803580067573
      }),
      new Costume("12h-7", "./Clock/costumes/12h-7.svg", {
        x: -2.8791579379151244,
        y: 14.581182949483718
      }),
      new Costume("12h-8", "./Clock/costumes/12h-8.svg", {
        x: -2.354000534623651,
        y: 14.838674304006872
      }),
      new Costume("12h-9", "./Clock/costumes/12h-9.svg", {
        x: -2.467382919890838,
        y: 14.929555998518254
      })
    ];

    this.sounds = [new Sound("BeepClock", "./Clock/sounds/BeepClock.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3)
    ];

    this.vars.clockSegment = 6;
  }

  *whenGreenFlagClicked() {
    yield* this.setupClock();
  }

  *setupClock() {
    this.visible = false;
    this.costume = "separator";
    this.goto(-70, 0);
    this.vars.clockSegment = 1;
    for (let i = 0; i < 5; i++) {
      this.createClone();
      this.x += 35;
      this.vars.clockSegment += 1;
    }
    this.goto(0, 0);
    this.costume = "message";
  }

  *startAsClone() {
    this.visible = true;
    if (this.vars.clockSegment == 1) {
      while (true) {
        if (this.stage.vars.format == 1) {
          if (new Date().getHours() == 0) {
            this.costume = 12;
          } else {
            if (new Date().getHours() > 12) {
              this.costume = new Date().getHours() - 11;
            } else {
              this.costume = new Date().getHours() + 1;
            }
          }
        } else {
          this.costume = new Date().getHours() + 1;
        }
        yield;
      }
    }
    if (this.vars.clockSegment == 3) {
      while (true) {
        this.costume = new Date().getMinutes() + 1;
        yield;
      }
    }
    if (this.vars.clockSegment == 5) {
      while (!(new Date().getSeconds() == 0)) {
        if (new Date().getSeconds() + 1 > this.costumeNumber) {
          yield* this.startSound("BeepClock");
        }
        this.costume = new Date().getSeconds() + 1;
        yield;
      }
      while (true) {
        this.costume = new Date().getSeconds() + 1;
        yield;
      }
    }
  }

  *startAsClone2() {
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

  *startAsClone3() {
    while (true) {
      if (this.stage.vars.format == 0) {
        this.y = 0;
      } else {
        this.y = 10;
      }
      yield;
    }
  }
}
