'use strict';

// 테스트 대상 코드(SUT, System Under Test).
// "1,2" 처럼 쉼표로 구분된 문자열을 받아 각 숫자의 합을 반환한다.
const sum = (input) => {
  if (input === '') return 0;
  return input
    .split(',')
    .map(Number)
    .reduce((acc, n) => acc + n, 0);
};

module.exports = { sum };
