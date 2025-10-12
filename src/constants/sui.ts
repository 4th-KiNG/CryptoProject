import { firstGif, secondGif, thirdGif } from "src/assets";
import type { InfoBlock } from "src/types/sui";

export const blocks: InfoBlock[] = [
  {
    title: "Ownership as you expect it",
    description:
      "Assets are stored securely onchain, evolving with the needs of users.",
    gif: firstGif,
  },
  {
    title: "Familiar user experience",
    description:
      "Using apps on Sui can be as easy as logging on with your web credentials",
    gif: secondGif,
  },
  {
    title: "Ownership as you expect it",
    description:
      "Network capacity expands to meet demand, growing with your business not against it",
    gif: thirdGif,
  },
  {
    title: "Players own assets, creators manage royalties",
    description:
      "Sui offers what games built on blockchain require: well-rounded functionality, abstraction, scalability, speed, and affordability. Dynamic assets increase engagement. Customizable transfer policies offer control.",
    buttons: ["Gaming", "Commerce", "Defi"],
  },
];
