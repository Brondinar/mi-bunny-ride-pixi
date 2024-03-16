import { Container, Sprite, Texture } from "pixi.js";
import { app } from "../../../main";

export class PreloadBackground extends Container {
  private sprite: Sprite;

  constructor() {
    super();

    this.sprite = new Sprite({
      texture: Texture.from("bg_preloader"),
      width: app.screen.width,
      height: app.screen.height,
    });

    this.addChild(this.sprite);
  }

  resize(width: number, height: number) {
    this.sprite.width = width;
    this.sprite.height = height;
  }
}
