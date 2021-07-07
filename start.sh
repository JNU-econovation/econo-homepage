#!/bin/bash

sudo PORT=8080 forever -m=100 --minUpTime=1000 --spinSleepTime=1000 start /var/node/econo-website/app.js
