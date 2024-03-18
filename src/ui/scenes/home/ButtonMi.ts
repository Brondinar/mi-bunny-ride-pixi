import { Sprite, Texture } from "pixi.js";
import { Button } from "../../common/Button";

export class ButtonMi extends Button {
  constructor() {
    // todo: move boilerplate to the Button or different component
    const defaultView = new Sprite(Texture.from("login_button_active"));
    defaultView.anchor.x = 0.5;
    const hoverView = new Sprite(Texture.from("login_button_hover"));
    hoverView.anchor.x = 0.5;
    const pressedView = new Sprite(Texture.from("login_button_press"));
    pressedView.anchor.x = 0.5;

    super({ defaultView, hoverView, pressedView });
  }
}
