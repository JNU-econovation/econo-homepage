# Award

[수상기록](https://econovation.kr/)를 수정하는 페이지입니다.  
파일 구조에 따라서 화면의 구성이 달라집니다.  
여러명 일 경우 순서대로 이름이 출력됩니다.

## 파일 구조는 다음과 같습니다.

```ts
const AWARDS = {
  YEAR: string, // 해당 년도입니다.
  DATA: {
    TITLE: string, // 대회 이름입니다.
    AWARDS: string[], // 상 이름입니다.
    PEOPLE: string[] // 수상자 이름입니다.
  }[]
}[]
```
