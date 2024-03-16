import { Container } from "pixi.js";
import { Bunny } from "../ui/scenes/preload/Bunny";

export class LoadScene extends Container {
  private bunny: Bunny;

  constructor() {
    super();

    this.bunny = new Bunny();
    this.addChild(this.bunny);
  }

  resize(width: number, height: number) {
    const bunnyMaxHeight = height / 4;
    this.bunny.scale = bunnyMaxHeight / this.bunny.height;
    this.bunny.x = width / 2;
    this.bunny.y = height / 2;
  }
}
