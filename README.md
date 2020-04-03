# econo-website

전남대 에코노베이션 개발 동아리 홍보 웹사이트 제작

- http://econovation.kr



### Installation

```bash
>> npm install
>> node app.js
```



### Deploy

```
>> ssh <이름>@<IP> -p 222
>> password
>> cd /var/node/econo-website
>> npm install -g forever (처음)
>> forever stopall (백드라운드에 실행중인 프로세스 종료)
>> npm install
>> forever start app.js 
```

> 접근 권한에 따라 sudo 명령어가 필요할 수 있음



### 파일 구성

- express 소스 코드 -> app.js

- view 폴더

  - page
    - 화면 출력되는 페이지
    - content, include(navigation, footer 등)을 포함하고 있다.
  - content
    - 내용이 들어가는 곳
  - include
    - 내용이 중복되는 것들
    - navigation
    - footer

  
