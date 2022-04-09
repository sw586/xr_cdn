@echo off
 
Cd /d %~dp0
 
If not "%1" == "" cd /d %1
 
Echo Current directory: %cd%
 
Pause
 
For /f "delims=" %%a in ('dir . /b /ad /s ^|sort /r' ) do rd /q "%%a" 2>nul