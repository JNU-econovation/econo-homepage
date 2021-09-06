#!/bin/bash

npm run build

echo "빌드된 파일을 nginx로 복사합니다. sudo 인증 중..."
sudo rm -rf /usr/share/nginx/html/static
sudo rm -rf /usr/share/nginx/html/assets
sudo rm -rf /usr/share/nginx/html/images
echo "기존 파일 삭제 완료"
sudo cp -r ./build/* /usr/share/nginx/html/
echo "파일 복사 완료"