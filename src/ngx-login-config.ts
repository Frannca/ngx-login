import { InjectionToken } from '@angular/core';
import { NGX_LOGIN_LOGO } from './base64-logo';

export const NgxLoginToken = new InjectionToken<NgxLoginConfig>('NgxLoginToken');

export class NgxLoginConfig {
  apiUrl: string;
  fieldOne: string;
  fieldTwo: string;
  locale: string;
  logo: string;
  messageError: string;
  messageSuccess: string;
  prefix: string;
  redirect: string;
  redirectExternal: string;
}

export class NgxLoginDefaultConfig implements NgxLoginConfig {
  apiUrl = 'NGX_LOGIN_API_URL';
  fieldOne = 'email';
  fieldTwo = 'password';
  locale = 'en';
  logo = NGX_LOGIN_LOGO;
  messageError = 'Error!';
  messageSuccess = 'Success!';
  prefix = 'ngx_login_';
  redirect = '/';
  redirectExternal = null;
}
