import kaplay from "kaplay";
import { gameUtils } from "./assets.js";
import { big } from "./objFunc";
import { JUMP_FORCE,FALL_DEATH, LEVELS, MOVE_SPEED, levelConf } from "./stages.js";

kaplay({
  background: [141, 183, 255],
});

//game stage and gravity
gameUtils.loadAssets();
gameUtils.setGameGravity();








scene("win", () => {
  add([text("You Win")]);
  onKeyPress(() => go("game"));
});

go("game");
