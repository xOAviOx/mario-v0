// custom component controlling enemy patrol movement
export function patrol(speed = 60, dir = 1) {
  return {
    id: "patrol",
    require: ["pos", "area"],
    add() {
      this.on("collide", (obj, col) => {
        if (col.isLeft() || col.isRight()) {
          dir = -dir;
        }
      });
    },
    update() {
      this.move(speed * dir, 0);
    },
  };
}


export 
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