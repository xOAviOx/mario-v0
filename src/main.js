import kaplay from "kaplay";
import { gameUtils } from "./assets.js";
import { patrol, big } from "./objFunc.js";
import {
  JUMP_FORCE,
  FALL_DEATH,
  LEVELS,
  MOVE_SPEED,
  levelConf,
} from "./stages.js";

kaplay({
  background: [141, 183, 255],
});

gameUtils.loadAssets();
gameUtils.setGameGravity();

scene("game", ({ levelId, coins } = { levelId: 0, coins: 0 }) => {
  //  level to scene
  const level = addLevel(LEVELS[levelId ?? 0], levelConf);

  //  player object
  const player = add([
    sprite("bean"),
    pos(0, 0),
    area(),
    scale(1),
    //  gravity and jumpable
    body(),
    // the custom component
    big(),
    anchor("bot"),
  ]);

  // action() runs every frame
  player.onUpdate(() => {
    // center camera to player
    setCamPos(player.pos);
    // check fall death
    if (player.pos.y >= FALL_DEATH) {
      go("lose");
    }
  });

  player.onBeforePhysicsResolve((collision) => {
    if (collision.target.is(["platform", "soft"]) && player.isJumping()) {
      collision.preventResolution();
    }
  });

  player.onPhysicsResolve(() => {
    // Set the viewport center to player.pos
    setCamPos(player.pos);
  });

  //  player onCollide with any obj with "danger"
  player.onCollide("danger", () => {
    go("lose");
    play("hit");
  });

  player.onCollide("portal", () => {
    play("portal");
    if (levelId + 1 < LEVELS.length) {
      go("game", {
        levelId: levelId + 1,
        coins: coins,
      });
    } else {
      go("win");
    }
  });
//jump high 
  player.onGround((l) => {
    if (l.is("enemy")) {
      player.jump(JUMP_FORCE * 1.5);
      destroy(l);
      addKaboom(player.pos);
      play("powerup");
    }
  });

  player.onCollide("enemy", (e, col) => {
    // if it's not from the top, die
    if (!col?.isBottom()) {
      go("lose");
      play("hit");
    }
  });
  let hasApple = false;

  // grow an apple if player's head bumps into an obj
  player.onHeadbutt((obj) => {
    if (obj.is("prize") && !hasApple) {
      const apple = level.spawn("#", obj.tilePos.sub(0, 1));
      apple.jump();
      hasApple = true;
      play("blip");
    }
  });

  // player grows big onCollide with an "apple" obj
  player.onCollide("apple", (a) => {
    destroy(a);
    // as  defined in the big()
    player.biggify(3);
    hasApple = false;
    play("powerup");
  });

  let coinPitch = 0;

  onUpdate(() => {
    if (coinPitch > 0) {
      coinPitch = Math.max(0, coinPitch - dt() * 100);
    }
  });

  player.onCollide("coin", (c) => {
    destroy(c);
    play("coin", {
      detune: coinPitch,
    });
    coinPitch += 100;
    coins += 1;
    coinsLabel.text = coins;
  });

  const coinsLabel = add([text(coins), pos(24, 24), fixed()]);

  function jump() {
    // functions are provided by body() component
    if (player.isGrounded()) {
      player.jump(JUMP_FORCE);
    }
  }

  // jump with space
  onKeyPress("space", jump);

  onKeyDown("left", () => {
    player.move(-MOVE_SPEED, 0);
    player.flipX = true;
  });

  onKeyDown("right", () => {
    player.move(MOVE_SPEED, 0);
    player.flipX = false;
  });

  onKeyPress("down", () => {
    player.gravityScale = 3;
  });

  onKeyRelease("down", () => {
    player.gravityScale = 1;
  });

  onGamepadButtonPress("south", jump);

  onGamepadStick("left", (v) => {
    player.move(v.x * MOVE_SPEED, 0);
  });

  onKeyPress("f", () => {
    setFullscreen(!isFullscreen());
  });
});

scene("lose", () => {
  add([text("OH OH YOU LOST TRY AGAIN!! (Press any key to restart)")]);
  onKeyPress(() => go("game"));
});

scene("win", () => {
  add([text("YAYYY YOU WONNNN!!!! (Press any key to restart)")]);
  onKeyPress(() => go("game"));
});

go("game");
