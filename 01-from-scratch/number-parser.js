const sum = function (input) {
  return input
    .split(",")
    .reduce((acc, n) => acc + Number(n.trim()), 0);
};

module.exports = { sum };
