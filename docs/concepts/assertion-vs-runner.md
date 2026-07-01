# assertion vs runner

> 검증(assertion)과 실행/집계(runner)의 역할 분리. 맨손 테스트의 두 축.

## 무엇인가

테스트 프레임워크 없이 테스트를 만들 때, 두 가지 역할이 필요하다.

- **assertion (단언)** — 기대값과 결과값이 맞는지 **검증**하고, 틀리면 에러를 던진다.
  이 레포에서는 `assertEquals(expected, actual)`.
- **runner (러너)** — 테스트를 **실행**하고, 통과/실패를 잡아 결과를 통일된 형태로 출력한다.
  이 레포에서는 `check(name, implementation)`.

## 왜 필요한가 / 왜 그런가

`assertEquals`만 있으면, 검증 실패 시 `throw`가 발생해 **거기서 프로그램이 멈춘다.**
그러면 뒤따르는 다른 테스트는 실행조차 되지 않는다.

`check`가 각 테스트를 `try-catch`로 감싸주기 때문에:

- 한 테스트가 실패해도 **다음 테스트가 계속 실행**되고,
- 모든 테스트 결과를 **한눈에** 볼 수 있다.

이것이 Jest·Vitest의 `test()`/`it()`가 하는 일의 가장 단순한 형태다.

## 코드와의 연결

`01-from-scratch/custom-test-phase3.js`:

```javascript
const { sum } = require('./number-parser');

// assertion — 값의 일치 여부를 검증하는 단언 함수
const assertEquals = (expected, actual) => {
  if (actual !== expected) {
    throw new Error(`Expected ${expected} but was ${actual}`);
  }
};

// runner — 테스트를 실행하고 결과를 리포트하는 러너
// 이름을 'check'로 지어 실제 프레임워크(test/it)와 헷갈리지 않게 했다.
const check = (name, implementation) => {
  try {
    implementation();
    console.log(`${name} passed`);
  } catch (e) {
    console.error(`${name} FAILED`, e.stack);
  }
};

check('sum of "1, 2" is 3', () => {
  assertEquals(3, sum('1, 2'));
});
```

`sum`은 값을 반환하는 종료점([exit-point-types](./exit-point-types.md) ① 유형)이라,
"값의 일치 여부"만 검증하면 되고 그래서 `assertEquals` 하나로 충분했다.

## 값 vs 관계 — assertion이 언제 늘어나는가

- **케이스(입력·기대값)만 바뀜** → 같은 `assertEquals` 재사용, `check(...)` 호출만 추가.
- **검증하려는 관계가 바뀜**(참인지, 에러를 던지는지, 더 큰지 등) → 새 `assert*` 함수 추가.

Jest의 matcher(`toBe`, `toBeTruthy`, `toThrow`, `toBeGreaterThan`)가 이 "관계별 assertion"에 대응한다.

## 정리

- **assertion = 검증**(틀리면 throw), **runner = 실행 + 결과 집계**(try-catch로 감쌈).
- 러너가 있어야 한 테스트가 죽어도 나머지가 돌고, 결과를 모아 볼 수 있다.
- 출력 값이 명확한(반환값 유형) 테스트는 이 둘만으로 프레임워크 없이 충분히 가능하다.

## 참고

- 관련: [종료점 유형](./exit-point-types.md), [phase1 학습 노트](../journal/phase1.md)
