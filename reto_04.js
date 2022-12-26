function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => {
      return b.l + b.w + b.h - (a.l + a.w + a.h);
    })
    .slice(1)
    .every((e, i) => {
      return e.l < boxes[i].l && e.w < boxes[i].w && e.h < boxes[i].h;
    });
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];

fitsInOneBox(boxes);
