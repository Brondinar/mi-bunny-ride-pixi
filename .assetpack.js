import { compressJpg, compressPng } from "@assetpack/plugin-compress";
import { audio } from "@assetpack/plugin-ffmpeg";
import { pixiManifest } from "@assetpack/plugin-manifest";
import { pixiTexturePacker } from "@assetpack/plugin-texture-packer";
import { webfont } from "@assetpack/plugin-webfont";

export default {
  entry: "./raw-assets",
  output: "./public/assets/",
  cache: false,
  plugins: {
    webfont: webfont(),
    compressJpg: compressJpg(),
    compressPng: compressPng(),
    audio: audio(),
    texture: pixiTexturePacker({
      texturePacker: {
        removeFileExtension: true,
        extrude: 1,
      },
    }),
    manifest: pixiManifest({
      output: "./public/assets/assets-manifest.json",
      createShortcuts: true,
      trimExtensions: true,
    }),
  },
};
