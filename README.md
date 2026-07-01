# js-testing-from-scratch

테스트 프레임워크 없이 **맨손으로 테스트를 작성하는 것부터 시작**해,
단계적으로 assert → 미니 러너 → 실제 프레임워크(Vitest)까지 올라가며
"테스트란 무엇인가"를 바닥부터 이해하는 학습 레포.

## 왜 이렇게 시작하나

Jest·Vitest 같은 프레임워크를 바로 쓰면 `describe`/`it`/`expect`가
내부에서 무엇을 해주는지 모른 채 사용하게 된다.
이 레포는 그 마법을 하나씩 손으로 재현하며 발전시킨다.

## 학습 단계 (era 분리)

폴더 이름 앞의 숫자가 학습 순서이자 "테스트 도구의 진화 단계"다.

### `01-from-scratch/` — 프레임워크 없는 시대

| 파일 | 단계 | 핵심 |
| --- | --- | --- |
| `phase1-manual-log.js` | 원시적 시작 | 조건문 + `console.log('PASSED')`. 통과 여부를 눈으로 확인 |
| `phase2-assert.js` | 자동 판정 | `node:assert`로 통과/실패를 자동 판정 (예정) |
| `phase3-tiny-runner.js` | 미니 러너 | 테스트를 등록·실행하고 결과를 집계하는 러너 자작 (예정) |

실행:

```bash
node 01-from-scratch/phase1-manual-log.js
```

### `02-with-vitest/` — 프레임워크 시대 (예정)

3주차 이후 Vitest를 도입한다.
`01-from-scratch/`에서 손으로 만든 미니 러너가 사실상 Vitest의 축소판이었음을
`describe`/`it`/`expect`와 대응시키며 확인한다.

> ⚠️ Vitest 설정 시 `01-from-scratch/`는 반드시 `exclude` 한다.
> 맨손 테스트 파일에는 `describe`/`it`가 없어 Vitest가 주워 실행하면 깨진다.
> era 폴더를 격리하는 것이 이 레포의 핵심 규칙.

## 진행 계획 (약 1개월)

- 1주차: `01-from-scratch/` phase1 → phase2 → phase3
- 2주차: 미니 러너 고도화 (before/after, 중첩 그룹 등)
- 3주차: `02-with-vitest/` 도입, 미니 러너와 대응 비교
- 4주차: 회고 — 프레임워크가 감춰주는 것들 정리
