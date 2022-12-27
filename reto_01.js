function wrapping(gifts) {
  return gifts.map((gift) => {
    let envoltura = "*".repeat(gift.length + 2);
    return `${envoltura}\n*${gift}*\n${envoltura}`;
  });
}
