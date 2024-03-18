import { Container, Sprite, Texture } from "pixi.js";
import { Label } from "../../common/Label";
import { List } from "../../common/List";
import { TextInput } from "../../common/TextInput";
import { ButtonLeaderboards } from "./ButtonLeaderboards";
import { ButtonMi } from "./ButtonMi";
import { ButtonPlay } from "./ButtonPlay";

export class HomePopup extends Container {
  private bg: Sprite;
  private panel: Container;

  constructor() {
    super();

    this.bg = Sprite.from(Texture.WHITE);
    this.bg.tint = 0x0a0025;
    this.addChild(this.bg);

    this.panel = new Container();
    this.addChild(this.panel);

    const panelBase = new Sprite({ texture: Texture.from("info_plate_big") });
    panelBase.anchor.x = 0.5;
    panelBase.anchor.y = 0.5;
    this.panel.addChild(panelBase);

    const panelHeader = new Sprite(Texture.from("header_info_plate"));
    panelHeader.anchor.x = 0.5;
    panelHeader.y = -this.panel.height * 0.5 + 10;
    this.panel.addChild(panelHeader);

    // todo: use i18n
    const headerTitle = new Label("Твои рекорды:", {
      fontSize: 64,
      fill: 0x163c6d,
    });
    headerTitle.y = 30;
    panelHeader.addChild(headerTitle);

    const layout = new List({ type: "vertical", elementsMargin: 20 });
    layout.y = -350;
    this.panel.addChild(layout);

    // todo: use i18n
    const recordsTitle = new Label(
      "Рекорд:\n0",
      {
        fontSize: 72,
        fill: 0x74f94f,
      },
      { fill: 0x163c6d, y: 6.5 }
    );
    recordsTitle.setAnchorY(0);
    layout.addChild(recordsTitle);

    const loginButton = new ButtonMi();
    layout.addChild(loginButton);

    const nameInput = new TextInput("Guest_10931");
    layout.addChild(nameInput);

    const bottomButtonsList = new List({ type: "horizontal" });
    layout.addChild(bottomButtonsList);

    const leadboardsButton = new ButtonLeaderboards();
    bottomButtonsList.addChild(leadboardsButton);

    const playButton = new ButtonPlay();
    bottomButtonsList.addChild(playButton);

    bottomButtonsList.x = -bottomButtonsList.width / 4;
    bottomButtonsList.y += 30;
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
