# CLAUDE.md

이 파일은 이 저장소에서 작업하는 Claude Code에 대한 안내다.

## 프로젝트 개요

`js-testing-from-scratch` — 테스트 프레임워크 없이 **맨손으로 테스트를 작성하는 것부터 시작**해,
단계적으로 assert → 미니 러너 → 실제 프레임워크(Vitest)까지 올라가며
"테스트란 무엇인가"를 바닥부터 이해하는 **학습용 레포**다.

프로덕션 코드가 아니라 **공부 과정 자체가 결과물**이다. 따라서:
- 코드는 "정답"보다 "그 단계에서 이해한 만큼"을 반영한다. 과하게 리팩터링하지 않는다.
- 배운 내용은 `docs/` 위키에 글로 남긴다 (아래 참고).

## 실행

```bash
npm test                                   # 현재 package.json이 가리키는 테스트 실행
node 01-from-scratch/custom-test-phase1.js # 특정 파일 직접 실행
node 01-from-scratch/custom-test-phase3.js
```

- 런타임: Node.js, **CommonJS** (`require` / `module.exports`). `package.json`의 `"type": "commonjs"`.
- 외부 의존성 없음. 테스트 프레임워크도 (아직) 없다.

## 디렉토리 구조와 핵심 규칙

### `01-from-scratch/` — 프레임워크 없는 시대

폴더 이름 앞 숫자가 **학습 순서이자 테스트 도구의 진화 단계(era)**다.

- `number-parser.js` — 테스트 대상 코드(SUT). `sum(input)`을 export.
- `custom-test-phase1.js` — 원시적 시작. 조건문 + `console.log`로 통과 여부를 눈으로 확인.
- `custom-test-phase3.js` — `assertEquals(expected, actual)`(검증) + `check(name, fn)`(러너) 자작.

> ⚠️ **era 폴더 격리 규칙 (이 레포의 핵심)**
> 나중에 `02-with-vitest/`를 도입할 때, Vitest 설정에서 `01-from-scratch/`는 **반드시 `exclude`** 한다.
> 맨손 테스트 파일에는 `describe`/`it`가 없어 Vitest가 주워 실행하면 깨진다.
> era 폴더를 섞지 않는 것이 이 레포의 근본 규칙이다.

### `docs/` — 학습 위키

공부한 내용을 글로 정리하는 공간. 코드(예시)와 분리한다.

```
_raw/YYYY-MM-DD.md   (매일 날것으로 메모)  →  정리  →  concepts/ · journal/  (위키 본문)
```

- `docs/_raw/` — 날것의 일일 메모. 형식 자유, **지우지 않고 원자재로 보관**. `_daily-template.md`를 `YYYY-MM-DD.md`로 복사해 사용.
- `docs/concepts/` — 재사용 가능한 개념 정리. "무엇인가 / 왜 필요한가 / 코드와의 연결" 순서. `_template.md` 사용.
- `docs/journal/` — phase별 학습 노트. 시간순 흐름·막힌 점·깨달음.
- `docs/README.md` — 위키 인덱스. 문서를 옮기면 여기 목록의 "(작성 예정)"을 실제 링크로 갱신한다.

> 💡 "오늘 `_raw` 메모 정리해서 위키에 반영해줘"라고 요청하면:
> `_raw/` 메모를 읽고 → 개념은 `concepts/`, phase 진행은 `journal/`로 옮기고 → `docs/README.md` 인덱스를 갱신한다.

> ✍️ **문서 내용을 작성·개선할 때는 항상 `/technical-writing` 스킬 절차를 적용한다**
> (문서 유형 분류 → 구조 검토 5원칙 → 문장 다듬기 5원칙). `_raw`의 날것 메모는 예외 — 원자재이므로 그대로 둔다.

## 코드 컨벤션

- **함수는 함수 표현식으로**: `const fn = function (...) { ... }` 또는 화살표 함수. (VS Code 스니펫 `fe` 있음: `.vscode/javascript.code-snippets`)
- 문자열은 상황에 따라 작은따옴표. 기존 파일 스타일을 따른다.
- 검증 함수 네이밍은 `assert*` (예: `assertEquals`), 러너는 `check` — 실제 프레임워크(`expect`/`test`)와 헷갈리지 않도록 의도적으로 다르게 지었다.
- 새 검증 방식(관계)이 필요하면 새 `assert*` 함수를 추가한다. 케이스만 늘 땐 `check(...)` 호출만 추가한다.

## 커밋 규칙

- 커밋 메시지는 **한국어**, **Conventional Commit** 형식 (`feat:`, `fix:`, `chore:`, `docs:` 등).
- `Co-Authored-By`를 포함하지 않는다.
- 커밋/푸시는 사용자가 요청할 때만 한다.

## 진행 계획 (약 1개월)

- 1주차: `01-from-scratch/` phase1 → phase2 → phase3
- 2주차: 미니 러너 고도화 (before/after, 중첩 그룹 등)
- 3주차: `02-with-vitest/` 도입, 미니 러너와 대응 비교
- 4주차: 회고 — 프레임워크가 감춰주는 것들 정리
