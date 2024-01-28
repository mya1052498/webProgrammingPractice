@echo off
chcp 65001 > nul

set "sourcePath=%USERPROFILE%\Downloads\vscode常用插件快速安裝\data"
set "destinationPath=%USERPROFILE%\.vscode"

if not exist "%sourcePath%\" (
    echo Error: Source file does not exist.
    echo 錯誤：源資料夾不存在。
    pause
    exit /b 1
)

xcopy /s /e /y "%sourcePath%" "%destinationPath%" > nul

if errorlevel 1 (
    echo Error copying file.
    echo 錯誤：複製資料夾失敗。
    pause
    exit /b 2
)

echo File copied successfully.
echo 資料夾複製成功。
pause
exit /b 0
