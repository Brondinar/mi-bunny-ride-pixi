import { Container, Sprite, Texture } from "pixi.js";

type State = "default" | "hover" | "pressed" | "disabled";

export class Button extends Container {
  private isDown = false;
  private state: State = "default";

  innerView: Container;

  constructor(
    protected options: {
      defaultView: Container;
      hoverView?: Container;
      pressedView?: Container;
      disabledView?: Container;
    }
  ) {
    super();

    this.innerView = new Container();
    this.addChild(this.innerView);

    this.addView(options.defaultView);
    this.options.hoverView && this.addView(this.options.hoverView);
    this.options.pressedView && this.addView(this.options.pressedView);
    this.options.disabledView && this.addView(this.options.disabledView);

    this.setState("default", true);
    this.initStateControl();
  }

  static create(textureName: string, ) {
    const defaultView = new Sprite(Texture.from(`${textureName}_active`));
    defaultView.anchor.x = 0.5;
    const hoverView = new Sprite(Texture.from(`${textureName}_hover`));
    hoverView.anchor.x = 0.5;
    const pressedView = new Sprite(Texture.from(`${textureName}_press`));
    pressedView.anchor.x = 0.5;

    return new Button({ defaultView, hoverView, pressedView })
  }

  /**
   * Returns active view for the state.
   */
  protected getStateView(state: State): Container | undefined {
    switch (state) {
      case "hover":
        return this.options.hoverView ?? this.options.defaultView;
      case "pressed":
        return (
          this.options.pressedView ??
          this.options.hoverView ??
          this.options.defaultView
        );
      case "disabled":
        return this.options.disabledView ?? this.options.defaultView;
      case "default":
        return this.options.defaultView;
      default:
        return undefined;
    }
  }

  protected setState(newState: State, force = false) {
    if (!force && this.state === newState) {
      return;
    }

    const currentView = this.getStateView(this.state);

    if (currentView) currentView.visible = false;

    this.state = newState;

    const activeView = this.getStateView(newState);

    if (activeView) {
      activeView.visible = true;
    }
  }

  addView(view: Container) {
    this.innerView.addChild(view);
    view.visible = false;
  }

  protected initStateControl() {
    this.on("pointerdown", () => {
      this.isDown = true;
      this.setState("pressed");
    });

    this.on("pointerup", () => {
      this.isDown = false;
      this.setState("hover");
    });

    this.on("pointerupoutside", () => {
      this.isDown = false;
      this.setState("default");
    });

    this.on("pointerout", () => {
      if (!this.isDown) {
        this.setState("default");
      }
    });

    this.on("pointerover", () => {
      if (!this.isDown) {
        this.setState("hover");
      }

      this.setState("hover");
    });

    this.eventMode = "static";
  }
}
