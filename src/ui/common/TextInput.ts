import { Container, Sprite, Texture } from "pixi.js";
import { Label } from "./Label";

export class TextInput extends Container {
  constructor(defaultText: string) {
    super();

    const nameInput = new Sprite(Texture.from("user_name_bar"));
    nameInput.anchor.x = 0.5;
    this.addChild(nameInput);

    const text = new Label(defaultText, { fontSize: 64, fill: 0xffffff });
    text.setAnchorX(0);
    text.x = -nameInput.width / 2 + 30;
    text.y = nameInput.height / 2;

    this.addChild(text);
  }
}
