@echo off
title UK Funds Selection Advisor
echo ==============================================================
echo        Starting UK Funds Selection Advisor Web App...
echo ==============================================================
echo.
cd /d "%~dp0"

echo Opening browser at http://localhost:8080 ...
python server.py

if errorlevel 1 (
    echo.
    echo Python not found directly. Attempting default browser launch on index.html...
    start "" "%~dp0index.html"
)
pause
