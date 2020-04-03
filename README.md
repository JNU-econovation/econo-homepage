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



