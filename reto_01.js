function wrapping(gifts) {

    const envoler = (cantCaracteres) => {
    let text = ""
    for (let i = 0; i < cantCaracteres; i++) {
      text = text + "*"
    }

    return text
  }

  let newGifts = gifts.map(e => {
    let cantLetras = e.length

    let envoltura = envoler(cantLetras+2)

    return envoltura + "\n*" + e + "*\n" + envoltura

  })

  return newGifts
}

