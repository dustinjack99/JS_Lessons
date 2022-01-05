import { Howl, Howler } from "howler";
import "../../../../assets/sounds";

const dexLoad = new Howl({
  src: ["/SFX_DEX_PAGE_ADDED.wav"],
  volume: 0.8,
});

const typeSound = new Howl({
  srs: ["SFX_PRESS_AB.wav"],
  volume: 0.8,
});

export function Sounds()
