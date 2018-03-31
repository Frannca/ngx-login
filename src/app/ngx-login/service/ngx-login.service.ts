import { Inject, Injectable } from '@angular/core';
import { NgxLoginConfig } from '../ngx-login-config';

@Injectable()
export class NgxLoginService {

  /**
   * Constructor
   *
   * @param config
   */
  constructor(@Inject(NgxLoginConfig) config) {
    console.log(config);
  }

  /**
   * Performs the login
   */
  login() {
    console.log('login');
  }

}
