# 종료점(exit point) 유형

> 함수가 "결과를 밖으로 내보내는 방식"에 따라 테스트 전략이 달라진다. 크게 3가지.

## 무엇인가

**종료점(exit point)** 은 함수가 일을 끝내고 그 효과를 외부로 드러내는 지점이다.
함수를 테스트한다는 건 결국 이 종료점을 검증하는 것이라, 종료점의 종류를 알면
"무엇을 어떻게 검증할지"가 정해진다. 크게 세 가지 유형이 있다.

| 유형 | 효과가 드러나는 곳 | 테스트 난이도 | 검증 방법 |
| --- | --- | --- | --- |
| ① 반환값 | 호출자에게 돌려주는 값 | 쉬움 | 반환값 비교 |
| ② 상태 변경 | 실행 전후 시스템/객체 상태 | 중간 | 실행 후 상태 비교 |
| ③ 서드파티 호출 | 외부 시스템으로의 호출 | 어려움 | mock으로 호출 여부·인자 검증 |

## 왜 필요한가 / 왜 그런가

검증 대상이 다르면 assertion도 달라지기 때문이다.
반환값은 값을 비교하면 되지만, 상태 변경은 "실행 후"의 상태를 봐야 하고,
서드파티 호출은 우리가 제어할 수 없는 외부라 **호출 그 자체**를 가로채서 봐야 한다.
종료점 유형을 먼저 구분해야 올바른 검증 방식을 고를 수 있다.

## ① 반환값 (난이도: 쉬움)

입력을 받아 연산한 결과를 호출자에게 직접 돌려준다. 반환값만 비교하면 되므로 가장 테스트하기 쉽다.

```javascript
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
expect(result).toBe(5); // 반환값이 5인지 검증
```

## ② 상태 변경 (난이도: 중간)

반환값은 없지만 시스템 내부의 데이터가 실행 전후로 달라진다. 실행 후의 상태를 비교해 검증한다.

```javascript
const user = { name: "민수", role: "USER" };

function promoteToAdmin(userObj) {
  userObj.role = "ADMIN"; // 반환 없이 상태만 변경
}

promoteToAdmin(user);
expect(user.role).toBe("ADMIN"); // 실행 후의 상태를 검증
```

## ③ 서드파티 호출 (난이도: 어려움)

값을 반환하거나 상태를 바꾸는 대신, 외부 시스템에 작업을 위임한다.
외부를 제어할 수 없어 가장 까다롭다. **mock/spy**로 호출을 가로채, 올바른 인자로 호출됐는지 검증한다.

```javascript
const mockEmailService = {
  send: jest.fn(), // 호출 여부를 기억하는 스파이 함수
};

function registerUser(email, emailService) {
  // ... 회원가입 로직 ...
  emailService.send(email, "가입을 환영합니다!"); // 서드파티 호출
}

registerUser("test@example.com", mockEmailService);

// 실제 메일 발송 여부가 아니라, send가 올바른 인자로 1번 호출됐는지 검증
expect(mockEmailService.send).toHaveBeenCalledTimes(1);
expect(mockEmailService.send).toHaveBeenCalledWith(
  "test@example.com",
  "가입을 환영합니다!"
);
```

## 코드와의 연결

- 이 레포의 `01-from-scratch/number-parser.js`의 `sum`은 **① 반환값** 종료점이다.
  그래서 `custom-test-phase3.js`에서 `assertEquals(3, sum('1, 2'))`처럼 값만 비교하면 됐다.
- ②·③ 유형은 아직 이 레포에 코드가 없다. mock이 필요한 ③은 이후 단계에서 다룬다.

## 정리

- 종료점은 **반환값 / 상태 변경 / 서드파티 호출** 3가지.
- 유형에 따라 검증 대상(값 / 상태 / 호출)이 다르고, 그래서 필요한 assertion도 달라진다.
- 이 레포의 `sum`은 가장 쉬운 반환값 유형이라 맨손 테스트가 바로 가능했다.

## 참고

- 관련: [assertion vs runner](./assertion-vs-runner.md), [phase1 학습 노트](../journal/phase1.md)
