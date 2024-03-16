import { Container, Sprite, Texture } from "pixi.js";

export class Bunny extends Container {
  private sprite: Sprite;

  constructor() {
    super();

    this.sprite = new Sprite({
      texture: Texture.from("characters/mi_bunny_idle_03"),
    });

    this.sprite.anchor.set(0.5, 0.5);

    this.addChild(this.sprite);
  }
}
