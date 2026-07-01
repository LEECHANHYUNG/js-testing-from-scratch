'use strict';

// Phase 1 — 가장 원시적인 형태의 테스트.
// 프레임워크도, assert 함수도 없다. 조건문으로 직접 비교하고,
// 통과하면 로그를 찍고 실패하면 예외를 던진다.
//
// 실행: node 01-from-scratch/phase1-manual-log.js
//
// 한계: 통과 여부를 "사람이 로그를 눈으로 확인"해야 한다.
// 테스트가 여러 개가 되면 무엇이 통과/실패했는지 추적하기 어렵다.
// → phase2에서 node:assert로 판정을 자동화한다.

const { sum } = require('./number-parser');

const parserTest = () => {
  try {
    const result = sum('1,2');
    if (result === 3) {
      console.log('parserTest example 1 PASSED');
    } else {
      throw new Error(`parserTest: expected 3 but was ${result}`);
    }
  } catch (e) {
    console.error(e.stack);
  }
};

parserTest();
