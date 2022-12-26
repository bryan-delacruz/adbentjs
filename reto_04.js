function fitsInOneBox(boxes) {
  for (let i = 0; i < boxes.length - 1; i++) {
    for (let j = 1; j < boxes.length; j++) {
      if (
        boxes[j - 1].l > boxes[j].l &&
        boxes[j - 1].w > boxes[j].w &&
        boxes[j - 1].h > boxes[j].h
      ) {
        let mayor = boxes[j - 1];
        boxes[j - 1] = boxes[j];
        boxes[j] = mayor;
      }
    }
  }

  for (let k = 0; k < boxes.length - 1; k++) {
    if (
      boxes[k].l >= boxes[k + 1].l ||
      boxes[k].w >= boxes[k + 1].w ||
      boxes[k].h >= boxes[k + 1].h
    ) {
      // console.log(false);
      return false;
    }
  }
  // console.log(true);
  return true;
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

fitsInOneBox(boxes);
