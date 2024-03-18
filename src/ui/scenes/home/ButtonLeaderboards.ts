import { Sprite, Texture } from "pixi.js";
import { Button } from "../../common/Button";

export class ButtonLeaderboards extends Button {
  constructor() {
    const defaultView = new Sprite(Texture.from("leadboard_button_active"));
    defaultView.anchor.x = 0.5;
    const hoverView = new Sprite(Texture.from("leadboard_button_hover"));
    hoverView.anchor.x = 0.5;
    const pressedView = new Sprite(Texture.from("leadboard_button_press"));
    pressedView.anchor.x = 0.5;

    super({ defaultView, hoverView, pressedView });
  }
}
