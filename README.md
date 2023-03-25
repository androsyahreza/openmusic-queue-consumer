# openmusic-queue-consumer
[![Generic badge](https://img.shields.io/badge/npm-v14.16.1-blue.svg)](https://shields.io/) [![Generic badge](https://img.shields.io/badge/node-6.14.12-green.svg)](https://shields.io/)

Program that consumes playlist export messages produced by [OpenMusic API](https://github.com/androsyahreza/openmusic-api)


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
OpenMusic Queue Consumer is a program that consumes playlist export messages produced by OpenMusic API from a message broker and performs some action based on their contents.

## Technologies
Project is created with:
* node : 14.16.1
* postgres : 8.10.0
* amqplib : 0.10.3
* nodemailer : 6.9.1

## Setup
To run this application, install it locally using npm:
```
$ cd openmusic-queue-consumer
$ npm install
$ npm start 
```
