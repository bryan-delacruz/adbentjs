function distributeGifts(packOfGifts, reindeers) {

  let pesoMax = reindeers.join("").length * 2;
  let pesoCaja = packOfGifts.join("").length;
  
  return (pesoMax / pesoCaja) >> 0;
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

distributeGifts(packOfGifts, reindeers);
