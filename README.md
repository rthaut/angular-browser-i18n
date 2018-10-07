# angular-browser-i18n v2.0.0

> AngularJS directives for utilizing native internationalization (i18n) functionality within browser extensions

Please see the [MDN article on Internationalization for Browser Extensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Internationalization) to understand how and why to internationalize browser extensions. This Angular directive is simply meant to make it easier to access the native browser internationalization functionality within an Angular app on a custom page of extensions.

* * *

[![Build status][travis-image]][travis-url] [![Dependencies status][david-image]][david-url] [![NPM version][npm-image]][npm-url]

## Installation

Install `angular-browser-i18n` via npm.

### NPM

```sh
npm install angular-browser-i18n
```

## Usage

Include `angular-browser-i18n.min.js` (or the un-minified `angular-browser-i18n.js`) file in your HTML page(s) within your extension:

```html
<script src="angular-browser-i18n.min.js"></script>
```

**Note:** You cannot reference files from `node_modules` within your extension, so you need to copy the file to an accessible location.

Add `'browser.i18n'` as an Angular dependency in your application module:

```js
var app = angular.module('myApp', [..., 'browser.i18n']);
```

Then use the directive either as an attribute or an element:

### Attribute

```html
<ANY get-message="msgName"></ANY>
<!-- OR -->
<ANY get-message="msgName" substitutions="['sub1', 'sub2']"></ANY>
```

### Element

```html
<i18n message="msgName"></i18n>
<!-- OR -->
<i18n message="msgName" substitutions="['sub1', 'sub2']"></i18n>
```

## Example Browser Extension

See the [extension in the test directory](/test/extension) for a complete working example. This example extension demonstrates how to implement this directive within an extension, including how both the name of the message and the substitutions can be dynamic.

To build/run the extension, run `npm install` first to install all dependencies, then run `npm build` to generate the compiled directive scripts, then run `npm test` to copy the necessary files to the extension directory and launch Firefox (if it is installed) automatically.

[travis-url]: http://travis-ci.com/rthaut/angular-browser-i18n
[travis-image]: https://travis-ci.com/rthaut/angular-browser-i18n.svg?branch=master
[npm-url]: https://npmjs.org/package/angular-browser-i18n
[npm-image]: https://badge.fury.io/js/angular-browser-i18n.svg
[david-url]: https://david-dm.org/rthaut/angular-browser-i18n
[david-image]: https://david-dm.org/rthaut/angular-browser-i18n/dev-status.svg
