function loadAssets() {
  loadSprite("bigyoshi", "/examples/sprites/YOSHI.png");
  loadSprite("bean", "/sprites/bean.png");
  loadSprite("bag", "/sprites/bag.png");
  loadSprite("ghosty", "/sprites/ghosty.png");
  loadSprite("spike", "/sprites/spike.png");
  loadSprite("grass", "/sprites/grass.png");
  loadSprite("steel", "/sprites/steel.png");
  loadSprite("prize", "/sprites/toolbox.png");
  loadSprite("apple", "/sprites/apple.png");
  loadSprite("portal", "/sprites/portal.png");
  loadSprite("coin", "/sprites/coin.png");
  loadSprite("car", "/sprites/car3.png");
  loadSound("coin", "/examples/sounds/score.mp3");
  loadSound("powerup", "/examples/sounds/powerup.mp3");
  loadSound("blip", "/examples/sounds/blip.mp3");
  loadSound("hit", "/examples/sounds/hit.mp3");
  loadSound("portal", "/examples/sounds/portal.mp3");
  loadSprite("pineapple", "/sprites/pineapple.png");
}
//gravity

function setGameGravity() {
  setGravity(3200);
}
//exporting
export const gameUtils = {
  loadAssets,
  setGameGravity,
};
