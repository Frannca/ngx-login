# ngx-login

Login library for Angular 4+

[![npm](https://img.shields.io/npm/v/%40frannca/ngx-login.svg?style=for-the-badge)](https://www.npmjs.com/package/@frannca/ngx-login)
[![Travis](https://img.shields.io/travis/Frannca/ngx-login.svg?style=for-the-badge)](https://travis-ci.org/Frannca/ngx-login)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge)](https://github.com/semantic-release/semantic-release)

This library is focused on Angular authentication and is part of [Frannca's Solutions](http://frannca.com) to save time on projects development.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Copyright and license](#copyright-and-license)

## Installation

You need npm to install the package. If you do not have npm installed, follow [this instructions](https://github.com/npm/npm).

**npm**

```
npm install @frannca/ngx-login --save
```

## Usage

The library is packed with everything you need to get login works.

**Import the module**

The first thing you have to do, is to import the `NgxLoginModule` in the AppModule:

```javascript
NgxLoginModule.forRoot({
  apiUrl: 'API_URL',
})
```

**Insert the component**

Now you just need to insert the component where you want the login to be displayed:

```html
<app-ngx-login></app-ngx-login>
```

## Configuration

The **ngx-login** comes with nice configuration options:

| Option           | Default Value | Description                               |
| ---------------- | ------------- | ----------------------------------------- |
| fieldOne         | 'email'       | Name of the first field used for the API  |
| fieldTwo         | 'password'    | Name of the second field used for the API |
| messageError     | 'Error!'      | Toastr error title                        |
| messageSuccess   | 'Success!'    | Toastr success title                      |
| prefix           | 'ngx_login_'  | Prefix used by the localStorage           |
| redirect         | '/'           | Angular internal redirect                 |
| redirectExternal | null          | Angular external redirect                 |

## Requirements

- Angular 4 or higher

## Copyright and license

Code copyright 2018 Frannca. Code released under the MIT license.
