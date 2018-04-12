# Technical-Assessment

This application for rendering Expedia offers that called from Expedia API https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel

## Prerequisite

* npm installed along with NodeJS

## Getting Started

1. Clone repo

```console
$ git clone https://github.com/EXPEakhasawneh/Technical-Assessment.git
```

2. Install dependencies

```console
$ npm install
```

3. Build App locally (-w will let you see changes instantaneously)

```console
$ webpack -w
```

4. Start the server (use nodemon instead to monitor changes on server.js)

```console
$ node server.js
```

### Testing

```console
npm test
```

I tried to test GET Method it works locally but it fails when Travis build it, I comment that case.

## Built with

* [NodeJS](https://github.com/nodejs) - Server-Side
* [React](https://github.com/facebook/react) - Front-End
* [webpack](https://github.com/webpack) - Bundles & packaging resources, used Babel transpiler to transform ES6 >> ES5
* [Travis](https://github.com/travis-ci) - Continuous Integration, deploy on Heroku
* [Jest](https://github.com/facebook/jest) - For Testing

## Live site

https://technical-assessment1.herokuapp.com/
