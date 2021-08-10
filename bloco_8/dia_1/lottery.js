const loterry = (bet, callback) => {
  const result = Math.floor(Math.random() * 5 + 1);
  return callback(bet, result);
};

loterry(5, (bet, result) => {
  bet === result
    ? console.log("Parabéns você ganhou")
    : console.log("Tente novamente");
});
