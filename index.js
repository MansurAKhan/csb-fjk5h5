import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Red from "./Red/Red.js";
import Yellow from "./Yellow/Yellow.js";
import Green from "./Green/Green.js";
import Blue from "./Blue/Blue.js";
import Purple from "./Purple/Purple.js";
import Clock from "./Clock/Clock.js";
import TimeOfDay from "./TimeOfDay/TimeOfDay.js";
import Banner from "./Banner/Banner.js";
import Frame from "./Frame/Frame.js";
import Mode from "./Mode/Mode.js";
import Warnings from "./Warnings/Warnings.js";
import Thumbnail from "./Thumbnail/Thumbnail.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Red: new Red({
    x: -250,
    y: -215,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Yellow: new Yellow({
    x: -250,
    y: -215,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Green: new Green({
    x: -250,
    y: -215,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Blue: new Blue({
    x: -250,
    y: -215,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Purple: new Purple({
    x: -250,
    y: -215,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Clock: new Clock({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 62,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  TimeOfDay: new TimeOfDay({
    x: 0,
    y: -18,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Banner: new Banner({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Frame: new Frame({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  Mode: new Mode({
    x: 0,
    y: -165,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Warnings: new Warnings({
    x: 0,
    y: -140,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Thumbnail: new Thumbnail({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
