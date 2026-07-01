const { sum } = require('./number-parser');

const parserTest = function (params) {
  try {
    const result = sum("1, 2");
    if (result === 3) {
      console.log("Test passed");
    } else {
      console.log("Test failed: expected 3 but got " + result);
    }
  } catch (error) {
    console.log("Test failed with error: " + error.message);
  }
};

parserTest();
