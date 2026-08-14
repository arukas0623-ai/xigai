@echo off
chcp 65001 >nul
cd /d D:\析概
set GH=D:\析概\tools\gh\bin\gh.exe
set GIT=git

echo [1/6] 检查 GitHub 登录...
%GH% auth status >nul 2>&1 || (echo [错误] 请先完成 GitHub 授权: gh auth login & pause & exit /b 1)

echo [2/6] 获取账号名...
for /f "delims=" %%U in ('%GH% api user --jq .login') do set OWNER=%%U
echo    账号: %OWNER%

echo [3/6] 配置 git 身份并创建仓库...
%GIT% config user.name "Xigai Bot"
%GIT% config user.email "xigai-bot@users.noreply.github.com"
%GIT% init -q 2>nul
%GIT% add -A
%GIT% commit -q -m "析概 v2: 知识图书馆" 2>nul
%GH% repo create xigai --public --source . --push 2>nul || (%GIT% remote add origin https://github.com/%OWNER%/xigai.git 2>nul & %GIT% push -q -u origin main)

echo [4/6] 启用 GitHub Pages...
%GH% api -X POST repos/%OWNER%/xigai/pages -f "source[branch]=main" -f "source[path]=/" >nul 2>&1 || echo    Pages 可能已启用

echo [5/6] 添加 CNAME (xigai.js.org) 并推送...
echo xigai.js.org> CNAME
%GIT% add CNAME
%GIT% commit -q -m "add CNAME for xigai.js.org"
%GIT% push -q

echo [6/6] 向 js-org/js.org 提交 PR 申请子域...
if not exist D:\析概\.jsorg (
  %GIT% clone -q https://github.com/js-org/js.org.git D:\析概\.jsorg
)
cd /d D:\析概\.jsorg
%GIT% checkout -q -b add-xigai
powershell -Command "$p='cnames_active.js'; $t=[IO.File]::ReadAllText($p); if($t -notmatch 'xigai'){ $t = $t -replace '\n\};', "\n  \"xigai\": \"%OWNER%.github.io/xigai\",\n\};" ; [IO.File]::WriteAllText($p,$t) }"
%GIT% add cnames_active.js
%GIT% commit -q -m "add xigai.js.org"
%GH% pr create --repo js-org/js.org --title "Add xigai.js.org" --body "析概知识图书馆 GitHub Pages: https://%OWNER%.github.io/xigai/" --head add-xigai 2>nul || (
  %GIT% push -q -u origin add-xigai
  %GH% pr create --repo js-org/js.org --title "Add xigai.js.org" --body "析概知识图书馆 GitHub Pages: https://%OWNER%.github.io/xigai/" --head add-xigai
)
cd /d D:\析概
echo.
echo ============================================
echo  完成！
echo  仓库:  https://github.com/%OWNER%/xigai
echo  Pages: https://%OWNER%.github.io/xigai/
echo  js.org: https://xigai.js.org （PR 审核通过后生效）
echo ============================================
pause
