import { sound } from "@pixi/sound";
import { Application } from "pixi.js";
import { HomeScene } from "./scenes/HomeScene";
import { LoadScene } from "./scenes/LoadScene";
import { PreloadBackground } from "./ui/scenes/preload/Background";
import { initAssets } from "./utils/assets";
import { navigation } from "./utils/navigation";

export const app = new Application();

globalThis.__PIXI_APP__ = app;

/** Set up a resize function for the app */
function resize() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const minWidth = 375;
  const minHeight = 700;

  // Calculate renderer and canvas sizes based on current dimensions
  const scaleX = windowWidth < minWidth ? minWidth / windowWidth : 1;
  const scaleY = windowHeight < minHeight ? minHeight / windowHeight : 1;
  const scale = scaleX > scaleY ? scaleX : scaleY;
  const width = windowWidth * scale;
  const height = windowHeight * scale;

  // Update canvas style dimensions and scroll window up to avoid issues on mobile resize
  app.renderer.canvas.style.width = `${windowWidth}px`;
  app.renderer.canvas.style.height = `${windowHeight}px`;
  window.scrollTo(0, 0);

  // Update renderer  and navigation screens dimensions
  app.renderer.resize(width, height);
  navigation.resize(width, height);
}

/** Fire when document visibility changes - lose or regain focus */
function visibilityChange() {
  if (document.hidden) {
    sound.pauseAll();
    navigation.blur();
  } else {
    sound.resumeAll();
    navigation.focus();
  }
}

const init = async () => {
  await app.init({
    resolution: Math.max(window.devicePixelRatio, 2),
    backgroundColor: 0xffffff,
  });

  document.body.appendChild(app.canvas);

  // Whenever the window resizes, call the 'resize' function
  window.addEventListener("resize", resize);

  // Trigger the first resize
  resize();

  // Add a visibility listener, so the app can pause sounds and screens
  document.addEventListener("visibilitychange", visibilityChange);

  await initAssets();

  navigation.setBackground(PreloadBackground);

  await navigation.showScreen(LoadScene);

  await navigation.showScreen(HomeScene);
};

init();
