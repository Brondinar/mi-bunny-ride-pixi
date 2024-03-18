import { navigation } from "../../../utils/navigation";
import { Button } from "../../common/Button";
import { List } from "../../common/List";
import { Popup } from "../../common/Popup";
import { ShadowedLabel } from "../../common/ShadowedLabel";
import { TextInput } from "../../common/TextInput";
import { LeaderboardsPopup } from "./LeaderboardsPopup";

export class HomePopup extends Popup {
  constructor() {
    // todo: use i18n
    super("Твои рекорды:");

    const layout = new List({ type: "vertical", elementsMargin: 20 });
    layout.y = -350;
    this.panel.addChild(layout);

    // todo: use i18n
    const recordsTitle = new ShadowedLabel("Рекорд:\n0", {
      fontSize: 72,
      fill: 0x74f94f,
    });
    recordsTitle.setAnchorY(0);
    layout.addChild(recordsTitle);

    const loginButton = Button.create("login_button");
    layout.addChild(loginButton);

    const nameInput = new TextInput("Guest_10931");
    layout.addChild(nameInput);

    const bottomButtonsList = new List({ type: "horizontal" });
    layout.addChild(bottomButtonsList);

    const leadboardsButton = Button.create("leadboard_button");
    leadboardsButton.on("pointertap", () =>
      navigation.presentPopup(LeaderboardsPopup)
    );
    bottomButtonsList.addChild(leadboardsButton);

    const playButton = Button.create("play_button");
    bottomButtonsList.addChild(playButton);

    bottomButtonsList.x = -bottomButtonsList.width / 4;
    bottomButtonsList.y += 30;
  }
}
