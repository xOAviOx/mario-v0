import kaplay from "kaplay";
import { gameUtils } from "./assets.js";

import { JUMP_FORCE,FALL_DEATH, LEVELS, MOVE_SPEED, levelConf } from "./stages.js";

kaplay({
  background: [141, 183, 255],
});

gameUtils.loadAssets();
gameUtils.setGameGravity();




// custom component that makes stuff grow big
function big() {
  let timer = 0;
  let isBig = false;
  let destScale = 1;
  return {
    // component id / name
    id: "big",
    // it requires the scale component
    require: ["scale"],
    // this runs every frame
    update() {
      if (isBig) {
        timer -= dt();
        if (timer <= 0) {
          this.smallify();
        }
      }
      this.scale = this.scale.lerp(vec2(destScale), dt() * 6);
    },
    // custom methods
    isBig() {
      return isBig;
    },
    smallify() {
      destScale = 1;
      timer = 0;
      isBig = false;
    },
    biggify(time) {
      destScale = 2;
      timer = time;
      isBig = true;
    },
  };
}

scene("game", ({ levelId, coins } = { levelId: 0, coins: 0 }) => {
  // add level to scene
  const level = addLevel(LEVELS[levelId ?? 0], levelConf);

  // define player object
  const player = add([
    sprite("bean"),
    pos(0, 0),
    area(),
    scale(1),
    // makes it fall to gravity and jumpable
    body(),
    // the custom component we defined above
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

  // if player onCollide with any obj with "danger" tag, lose
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

  // grow an apple if player's head bumps into an obj with "prize" tag
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
    // as we defined in the big() component
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
    // these 2 functions are provided by body() component
    if (player.isGrounded()) {
      player.jump(JUMP_FORCE);
    }
  }

  // jump with space
  onKeyPress("space", jump);

  onKeyDown("left", () => {
    player.move(-MOVE_SPEED, 0);
  });

  onKeyDown("right", () => {
    player.move(MOVE_SPEED, 0);
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
  add([text("You Lose")]);
  onKeyPress(() => go("game"));
});

scene("win", () => {
  add([text("You Win")]);
  onKeyPress(() => go("game"));
});

go("game");
