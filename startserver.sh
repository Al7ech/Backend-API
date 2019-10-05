#!/bin/sh

pm2 delete server
#pm2 start server.js --watch --ignore-watch="/routes/*" --no-daemon
pm2 start server.js
