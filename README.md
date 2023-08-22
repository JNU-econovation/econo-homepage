# ECONO-HOMEPAGE

[전남대 에코노베이션 개발 동아리 홍보 웹사이트](http://econovation.kr)입니다.

![next](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![typescirpt](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![website](https://img.shields.io/website-up-down-green-red/https/econovation.kr.svg)

## 수정하는 방법

본 프로젝트는 maintainer와 contributor로 나누어져 있습니다.  
Maintainer은 홈페이지 관리자이며 홈페이지에 대해서 전체적으로 관리합니다. 현재는 22기 임채승 @loopy-lim 님께서 맡아주시고 계십니다.  
Contributor는 모든 에코노 회원이며 홈페이지의 대한 내용을 수정하거나 오류가 있으면 Pull을 이용하여 요청합니다.

## 프로젝트 설치 및 수정

### Installation

```bash
pnpm install
pnpm run build && pnpm run start
```

### Deply

```bash
ssh <이름>@<IP> -p <포트명>

git clone https://github.com/JNU-econovation/econo-homepage/
cd ~/econo-website
git pull origin master

pnpm install
pnpm run build && pnpm run start
```

> 접근 권한에 따라서 sudo 명령어가 필요할 수 있습니다.

### 데이터를 수정하는 방법

모든 데이터는 `constants`폴더 안에 있는 데이터로 변경 할 수 있습니다.  
자세한 내용은 docs에서 각각 서술하도록 하겠습니다.

### static데이터를 넣는 방법

이미지들을 Next에서 관리하여 가장 적당한 이미 크기 전달 가능합니다.  
그렇기 때문에 가장 좋은 화질의 이미지를 전달하면 좋습니다.  
dev별로, 해커톤 별로, 리크루트 별로 사진을 나누어 저장하면 됩니다.

### Database

Sqlite를 이용하여 간단한 서버 역활도 합니다.  
질문이나 구독을 하기 위해서 사용합니다.
