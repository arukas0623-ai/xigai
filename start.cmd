@echo off
chcp 65001 >nul
title 析概 · 知识图书馆
cd /d %~dp0
echo 正在启动析概知识图书馆...
start "" http://127.0.0.1:8765
node server.js
pause
