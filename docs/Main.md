# Main

[메인화면](https://econovation.kr/)를 수정하는 페이지입니다.  
파일 구조에 따라서 화면의 구성이 달라집니다.

## 파일 구조는 다음과 같습니다.

```ts
const ECONOVATION = string; // 에코노베이션 string값입니다.

const JOBS = string[]; // 위에 움직이는 string 값들입니다.

const ABOUT = {
  IMAGE: require('path/to/image.png').default, // 맨 위에 나오는 이미지입니다.
  TITLE: string, // title 입니다.
  SUBTITLE: string, // subtitle 입니다.
  CONTENT: string // 소개 내용입니다.
}[]

const MISSION = {
  TITLE: string, // mission title 입니다.
  SUBTITLE: string, // mission subtitle 입니다.
  CONTENT: string // mission content 입니다.
}[]

const MAIN_NAV = {
  NAME: string, // navbar에 들어갈 이름입니다.
  LINK: string, // url.ko.ts에 들어간 내용입니다.
  POSITION: "left", "right" // nav에 들어갈 위치입니다.
}[]
```
