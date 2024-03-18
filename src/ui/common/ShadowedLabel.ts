import { TextStyle } from "pixi.js";
import { Label } from "./Label";

export class ShadowedLabel extends Label {
  constructor(label?: string | number, textStyle?: Partial<TextStyle>) {
    super(label, textStyle, { fill: 0x163c6d, y: 6.5 });
  }
}
