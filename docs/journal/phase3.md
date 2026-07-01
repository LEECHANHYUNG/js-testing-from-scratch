# phase3 — assertEquals와 check 러너

> 판정과 결과 집계를 코드로 옮겨, 자작 단언 함수와 러너로 테스트 형태를 갖춘 단계.

## 이 단계에서 한 것

- `01-from-scratch/custom-test-phase3.js` 작성:
  - `assertEquals(expected, actual)` — 기대값과 결과값이 다르면 에러를 던지는 단언 함수.
  - `check(name, implementation)` — 테스트를 `try-catch`로 실행하고 통과/실패를 출력하는 러너.
- `check('sum of "1, 2" is 3', () => assertEquals(3, sum('1, 2')))`로 검증.

## 배운 것 / 깨달은 점

- **검증과 실행은 다른 역할**이다 → [assertion vs runner](../concepts/assertion-vs-runner.md).
  `assertEquals`만으로는 실패 시 `throw`에서 멈춰 다음 테스트가 실행되지 않는다.
  `check`가 각 테스트를 `try-catch`로 감싸주어야 나머지 테스트가 계속 돌고 결과를 모아 볼 수 있다.
- 러너 이름을 `check`로 지어 실제 프레임워크의 `test`/`it`와 구분했다.
- 이 구조가 Jest·Vitest의 `test()`가 하는 일의 가장 단순한 형태다.

## 막혔던 지점

<!-- 필요 시 기록 -->

## 다음 단계로

- 케이스가 아니라 검증 방식(관계)이 바뀌면 새 `assert*` 함수가 필요하다.
- 러너 고도화(before/after, 중첩 그룹)와 이후 `02-with-vitest/`로 이어진다.
