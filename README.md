# MediaCentral UX Starter Kit

Starter kit for creating apps in MediaCentral

## Getting started

To proceed, run these commands in order:

- ```npm install```
- ```npm start```

Then load [https://localhost:8080/](https://localhost:8080/) in your browser. Your new starter app is listed at top.  Its icon is a box.

## Customizing

To change the icon, overwrite the **svg** file in the [src/images](src/images) folder.

To change starter kit port check [proxyPort](src/project.act).

For more information on building apps for Cloud UX see [Avid's developer portal](http://developer.avid.com/).

## Publishing
For publishing to Avid marketplace use out ready to go [tool](https://www.npmjs.com/package/mediacentral-publish).

WARNING!

Remember to set your [alias](src/package.json) and [secret](src/package.json). You can get them from [Avid Page](http://www.avid.com/)

## Setup
If you want to change name/host/port of the app just type ```npm run setup``` in your project's directory and proceed.

