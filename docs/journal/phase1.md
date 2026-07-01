# phase1 — 원시적 수동 테스트

> 프레임워크 없이 조건문·로그, 그리고 자작 assert/러너로 테스트를 흉내 낸 단계.

## 이 단계에서 한 것

- `01-from-scratch/number-parser.js` — 테스트 대상 `sum(input)` 구현 (쉼표 구분 문자열의 합).
- `01-from-scratch/custom-test-phase1.js` — 조건문 + `console.log`로 통과 여부를 눈으로 확인하는 원시적 테스트.
- `01-from-scratch/custom-test-phase3.js` — `assertEquals`(단언) + `check`(러너)를 자작해 형태를 갖춘 테스트.

## 배운 것 / 깨달은 점

- **종료점 유형**을 먼저 구분해야 검증 방식이 정해진다 → [종료점 유형](../concepts/exit-point-types.md).
  `sum`은 반환값 유형이라 값 비교만으로 테스트가 가능했다.
- **검증과 실행은 다른 역할**이다 → [assertion vs runner](../concepts/assertion-vs-runner.md).
  `assertEquals`(검증)만으로는 실패 시 멈춰버려서, `check`(러너)로 감싸 결과를 집계한다.
- 출력 값이 명확한 함수는 **프레임워크 없이도** 충분히 테스트할 수 있다.

## 막혔던 지점

<!-- 필요 시 기록 -->

## 다음 단계로

- ②(상태 변경)·③(서드파티 호출) 종료점은 값 비교만으로 안 된다.
  특히 ③은 mock/spy가 필요해 맨손 테스트의 다음 과제가 된다.
- 러너 고도화(before/after, 중첩 그룹)로 이어진다.
