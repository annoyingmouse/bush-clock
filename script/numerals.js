import { sketch } from "https://cdn.skypack.dev/p5js-wrapper";

let topHalf, verticalMiddle, bottomHalf;

sketch.preload = function () {
  topHalf = loadImage("../image/top-half.png");
  verticalMiddle = loadImage("../image/vertical-middle.png");
  bottomHalf = loadImage("../image/bottom-half.png");
}

export function drawOne (x, y, rustle) {
  // if(proper === 0){
  image(topHalf, x + 16, y);
  image(verticalMiddle, x + 16, y + 16);
  // } else {
  // 	image(top, x + 16, y);
  // }
  image(verticalMiddle, x + 16, y + 32);
  image(verticalMiddle, x + 16, y + 48);
  image(verticalMiddle, x + 16, y + 64);
  image(verticalMiddle, x + 16, y + 80);

  // switch (proper) {
  // 	case 0:
  // 		image(bottom, x + 16, y + 96);
  // 		break;
  // 	case 1:
  image(verticalMiddle, x + 16, y + 96);
  image(bottomHalf, x + 16, y + 112);
// 		break;
// 	case 2:
// 		image(bottomProper, x + 16, y + 96);
// 		break;
// }
}