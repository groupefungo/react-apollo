# react-apollo

Boilerplate pour react apollo

## Installation

* `git clone git@github.com:groupefungo/react-apollo.git`
* cd react-apollo
* npm install

* cd packages/core
* npm install
* #make changes
* npm build

## test example app that references packages/core container from within, check packages/core/src/index.tsx

* npm start
* visite `http://localhost:8080/`

## publish core

* #update version in packages/core/package.json
* #push modifs
* npm publish

## test example app that references packages/core container from without

* cd to/project/root
* npm install @groupefungo/react-apollo.core #make sure core is up to date
* npm start
* visite `http://localhost:8080/`

## install on client

* npm install @groupefungo/react-apollo.core #make sure core is up to date
