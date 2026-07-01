# 📚 Wiki — 맨손 테스트 학습 정리

이 폴더는 `js-testing-from-scratch` 스터디에서 **공부한 내용을 정리하는 위키**다.
코드(예시 케이스)는 루트의 `01-from-scratch/` 등에 있고, 여기에는 그 코드를 통해
**무엇을 배웠고 왜 그런지**를 글로 남긴다.

## 워크플로

```
_raw/YYYY-MM-DD.md  (매일 날것으로 메모)  →  정리  →  concepts/ · journal/  (위키 본문)
```

매일 [`_raw/`](./_raw/)에 학습 메모를 쌓고, 다듬어서 아래 위키 본문으로 옮긴다.
자세한 방법은 [`_raw/README.md`](./_raw/README.md) 참고.

## 문서 목록

### 개념 (concepts/)

테스트 도구를 만들며 알게 된 개념을 주제별로 정리한다.

- [종료점(exit point) 유형](./concepts/exit-point-types.md) — 반환값 / 상태 변경 / 서드파티 호출
- [assertion vs runner](./concepts/assertion-vs-runner.md) — 검증과 실행의 역할 분리
- (작성 예정) 함수 선언문 vs 함수 표현식
- (작성 예정) 호이스팅
- (작성 예정) 모듈 시스템 (CommonJS `require` / `module.exports`)

### 단계별 학습 노트 (journal/)

README의 학습 단계(phase)에 맞춰, 각 단계에서 배운 것을 시간순으로 남긴다.

- [phase1 — 원시적 수동 테스트](./journal/phase1.md) (phase3의 assertEquals + check 러너까지 포함)

## 작성 규칙

- **날것 메모(_raw)**: 형식 자유. 매일 쌓기만 하고 지우지 않는다. 정리의 원자재.
- **개념(concepts)**: "무엇인가 / 왜 필요한가 / 코드와의 연결" 순서. 재사용 가능한 지식.
- **학습 노트(journal)**: 그 phase에서 실제로 겪은 흐름·막힌 지점·깨달음. 시간순 기록.
- 새 문서는 [`_template.md`](./_template.md)를 복사해 시작한다.
- 코드를 인용할 땐 파일 경로(`01-from-scratch/custom-test-phase3.js`)를 함께 적어 추적 가능하게 한다.
