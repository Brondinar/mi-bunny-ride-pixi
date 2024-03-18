import { Container, Text, TextStyle } from "pixi.js";

const defaultLabelStyle: Partial<TextStyle> = {
  fontFamily: "ZubiloBlack",
  align: "center",
};

export class Label extends Container {
  private text: Text;
  private shadow?: Text;

  constructor(
    label?: string | number,
    textStyle?: Partial<TextStyle>,
    shadowStyle?: Partial<TextStyle> & Partial<{ x: number; y: number }>
  ) {
    super();

    if (shadowStyle) {
      this.shadow = new Text({
        text: label,
        style: {
          ...defaultLabelStyle,
          fontSize: textStyle?.fontSize,
          ...shadowStyle,
        },
      });
      shadowStyle.x && (this.shadow.x = shadowStyle.x);
      shadowStyle.y && (this.shadow.y = shadowStyle.y);
      this.addChild(this.shadow);
    }

    this.text = new Text({
      text: label,
      style: { ...defaultLabelStyle, ...textStyle },
    });
    this.addChild(this.text);

    // Label is always centered, but this can be changed in instance afterwards
    this.setAnchor(0.5);
  }

  setAnchor(val: number) {
    this.setAnchorX(val);
    this.setAnchorY(val);
  }

  setAnchorX(x: number) {
    this.text.anchor.x = x;
    this.shadow && (this.shadow.anchor.x = x);
  }

  setAnchorY(y: number) {
    this.text.anchor.y = y;
    this.shadow && (this.shadow.anchor.y = y);
  }
}
