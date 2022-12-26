function distributeGifts(packOfGifts, reindeers) {
    let sizePack = 0
    packOfGifts.forEach(e => {
      sizePack = sizePack + e.length
    })
  
    let reindeerLoadSize = 0
    reindeers.forEach(e => {
      reindeerLoadSize = reindeerLoadSize + e.length*2
    })
  
    return Math.floor(reindeerLoadSize / sizePack)
  }