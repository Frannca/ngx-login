import { Inject, Injectable } from '@angular/core';
import { NgxLoginConfig } from '../ngx-login-config';
import { Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NgxLoginService {

  apiUrl: string;

  /**
   * Constructor
   *
   * @param config
   */
  constructor(
    @Inject(NgxLoginConfig) config,
    private http: Http
  ) {
    this.apiUrl = config.apiUrl;
  }

  /**
   * Performs the login
   */
  login(email: string, password: string) {
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    return this.http.post(this.apiUrl, body)
      .map((response: Response) => {
        const user = response.json();
        if (user && user.token) {
          localStorage.setItem('token', JSON.stringify(user.token));
          localStorage.setItem('id', JSON.stringify(user.id));
          localStorage.setItem('name', JSON.stringify(user.name));
          localStorage.setItem('email', JSON.stringify(user.email));
        }

        return true;
      });
  }

}
