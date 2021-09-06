# econo-website

전남대 에코노베이션 개발 동아리 홍보 웹사이트 제작

- http://econovation.kr



### Installation

```bash
>> npm install
>> npm start
```



### Deploy

```bash
>> ssh <이름>@<IP> -p <포트명>
>> <비밀번호>

(최초 github에서 소스코드 클론하기)
>> git clone https://github.com/JNU-econovation/econo-homepage/ 

(업데이트 시 수정된 소스코드 반영하기)
>> cd ~/econo-website
>> git pull origin master (업데이트 시)
>> npm install
>> ./build.sh
```

> 접근 권한에 따라 sudo 명령어가 필요할 수 있음



### 파일 구성

- React 기반의 프론트엔드

- src 폴더
  - components
    - 각 페이지를 이루는 세부 컴포넌트
  - page
    - 출력할 페이지를 완성하는 부분
    - router에서 직접 접근하는 컴포넌트
  - content
    - 내용이 들어가는 곳
  - app.js
    - Router 구조를 가진 곳
- public 폴더
  - assets, images 등 필요한 정적 파일이 저장된 곳

  