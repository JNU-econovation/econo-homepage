#!/bin/bash

sudo PORT=80 forever --minUpTime=1000 start /var/node/econo-website/app.js
