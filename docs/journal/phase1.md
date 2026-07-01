# phase1 — 원시적 수동 테스트

> 프레임워크 없이 조건문과 `console.log`만으로 통과 여부를 눈으로 확인한 단계.

## 이 단계에서 한 것

- `01-from-scratch/number-parser.js` — 테스트 대상 `sum(input)` 구현 (쉼표로 구분된 문자열의 합).
- `01-from-scratch/custom-test-phase1.js` — `if (result === 3)` 조건문으로 비교하고, 통과 시 `console.log`, 실패·예외 시 메시지를 출력.

## 배운 것 / 깨달은 점

- **종료점 유형**을 먼저 구분해야 검증 방식이 정해진다 → [종료점 유형](../concepts/exit-point-types.md).
  `sum`은 반환값 유형이라 값 비교만으로 테스트가 가능했다.
- 판정을 사람이 로그로 확인해야 한다. 테스트가 늘면 무엇이 통과·실패했는지 추적하기 어렵다.

## 막혔던 지점

<!-- 필요 시 기록 -->

## 다음 단계로

- 통과/실패 판정과 결과 집계를 코드로 자동화할 필요가 생긴다 → [phase3](./phase3.md)에서 `assertEquals`와 `check` 러너로 발전.
