@echo off
title AmosBuild Guide
@echo author ilex.h
@echo Starting front end initialization Wizard...
@echo *......................tips..............................*
@echo *                                                        *
@echo * front execute environment,please choose one            *
@echo *                                                        *
@echo * 1.Enable default NPM, server is webpack-dev-server     *
@echo * 2.webpack -w watch all(npm run watch)                  *
@echo * 3.Empty compile directory dist(npm run clean)          *
@echo * 4.Complied with webpack dev(npm run build:dev)         *
@echo * 5.webpack build with production(npm run build:pro)     *
@echo * 6.publish(clean build:pro copy to released)best choice *
@echo * 7.publish(clean build:dev copy to released)best choice *
@echo *                                                        *
@echo *........................................................*
@echo.
set switch=""
set /p switch=please choose:
if /I '%switch%'=='1' goto npm_start
if /I '%switch%'=='2' goto npm_run_watch
if /I '%switch%'=='3' goto npm_run_clean
if /I '%switch%'=='4' goto npm_run_buildDev
if /I '%switch%'=='5' goto npm_run_buildPro
if /I '%switch%'=='6' goto npm_run_publish
if /I '%switch%'=='7' goto npm_run_publish_dev
goto end

:npm_start
npm set registry http://172.16.11.26:9696 && npm update && npm start
goto end

:npm_run_watch
npm set registry http://172.16.11.26:9696 && npm update && npm run watch
goto end

:npm_run_clean
npm run clean
goto end

:npm_run_buildDev
npm set registry http://172.16.11.26:9696 && npm update && npm run build:dev
goto end

:npm_run_buildPro
npm set registry http://172.16.11.26:9696 && npm update && npm run build:pro
goto end

:npm_run_publish
npm set registry http://172.16.11.26:9696 && npm update && npm run pub
goto success

:npm_run_publish_dev
npm set registry http://172.16.11.26:9696 && npm update && npm run pub:dev
goto success

:success
@echo. success!
start .\released

:end
pause
