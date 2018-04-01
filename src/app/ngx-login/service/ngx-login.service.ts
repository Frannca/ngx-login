import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NgxLoginService {

  /**
   * Constructor
   *
   * @param config
   */
  constructor(
    private http: Http
  ) { }

  /**
   * Performs the login
   */
  login(email: string, password: string, fieldOne: string, fieldTwo: string, apiUrl: string, prefix: string) {
    const body = new URLSearchParams();
    body.set(fieldOne, email);
    body.set(fieldTwo, password);
    return this.http.post(apiUrl, body)
      .map((response: Response) => {
        const user = response.json();
        if (user && user.token) {
          localStorage.setItem(`${prefix}_token`, JSON.stringify(user.token));
          localStorage.setItem(`${prefix}_id`, JSON.stringify(user.id));
          localStorage.setItem(`${prefix}_name`, JSON.stringify(user.name));
          localStorage.setItem(`${prefix}_email`, JSON.stringify(user.email));
        }

        return user;
      });
  }

}
