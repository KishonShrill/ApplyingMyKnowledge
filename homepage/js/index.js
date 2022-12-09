import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Character from "./Character/Character.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Character: new Character({
    x: -18,
    y: -97.0344096161276,
    direction: -90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;