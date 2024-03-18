import { Container } from "pixi.js";
import { Button } from "../../common/Button";
import { List } from "../../common/List";
import { Popup } from "../../common/Popup";
import { ShadowedLabel } from "../../common/ShadowedLabel";

export class LeaderboardsPopup extends Popup {
  constructor() {
    // todo: use i18n
    super("Таблица рекордов");

    const layout = new List({ type: "vertical", elementsMargin: 20 });
    layout.y = -350;
    this.panel.addChild(layout);

    const sectionHeader = new Container();
    layout.addChild(sectionHeader);

    const prevButton = Button.create("arrow_btn");
    prevButton.innerView.scale.x = -1;
    // todo: remove hardcoded values
    prevButton.innerView.x -= 280;
    sectionHeader.addChild(prevButton);

    const sectionHeaderTitle = new ShadowedLabel("Все время", {
      fontSize: 72,
      fill: 0xed712e,
    });
    sectionHeaderTitle.y += 26;
    sectionHeader.addChild(sectionHeaderTitle);

    const nextButton = Button.create("arrow_btn");
    nextButton.innerView.x += 280;
    sectionHeader.addChild(nextButton);
  }
}
