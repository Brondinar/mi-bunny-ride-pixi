import { Container, Sprite, Texture } from "pixi.js";
import { Label } from "./Label";

export class Popup extends Container {
  protected bg: Sprite;
  protected panel: Container;
  protected panelBase: Sprite;
  protected panelHeader: Sprite;

  constructor(header: string) {
    super();

    this.bg = Sprite.from(Texture.WHITE);
    this.bg.tint = 0x0a0025;
    this.addChild(this.bg);

    this.panel = new Container();
    this.addChild(this.panel);

    this.panelBase = new Sprite({ texture: Texture.from("info_plate_big") });
    this.panelBase.anchor.x = 0.5;
    this.panelBase.anchor.y = 0.5;
    this.panel.addChild(this.panelBase);

    this.panelHeader = new Sprite(Texture.from("header_info_plate"));
    this.panelHeader.anchor.x = 0.5;
    this.panelHeader.y = -this.panel.height * 0.5 + 10;
    this.panel.addChild(this.panelHeader);

    const headerTitle = new Label(header, {
      fontSize: 64,
      fill: 0x163c6d,
    });
    headerTitle.y = 30;
    this.panelHeader.addChild(headerTitle);
  }

  resize(width: number, height: number) {
    this.bg.width = width;
    this.bg.height = height;
    this.panel.x = width * 0.5;
    this.panel.y = height * 0.5;
    this.panel.height = height * 0.9;
    this.panel.scale.x = this.panel.scale.y;
  }

  async show() {
    this.bg.alpha = 0.3;
  }
}
