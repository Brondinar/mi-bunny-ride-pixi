import { Container, Texture, TilingSprite } from "pixi.js";
import { app } from "../main";
import { HomePopup } from "../ui/scenes/home/HomePopup";
import { navigation } from "../utils/navigation";

export class HomeScene extends Container {
  public static assetBundles = ["UI", "Environment", "Fonts"];

  private bg: TilingSprite;

  constructor() {
    super();

    this.bg = new TilingSprite({
      texture: Texture.from("bg_gradient"),
      width: app.screen.width,
      height: app.screen.height,
    });
    this.addChild(this.bg);
  }

  async show() {
    await navigation.presentPopup(HomePopup);
  }

  async hide() {
    navigation.dismissPopup();
  }
}
