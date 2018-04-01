import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxLoginService } from '../service/ngx-login.service';
import { NGX_LOGIN_LOGO } from '../assets/base64-logo';

@Component({
  selector: 'app-ngx-login',
  templateUrl: './ngx-login.component.html',
  styleUrls: ['./ngx-login.component.scss'],
})
export class NgxLoginComponent {

  /**
   * ngx-login logo
   *
   * @type {string}
   */
  @Input() logo = NGX_LOGIN_LOGO;

  /**
   * Primary color
   *
   * @type {string}
   */
  @Input() color = 'frannca';

  /**
   * Form loader
   *
   * @type {boolean}
   */
  loading = false;

  /**
   * Login form
   */
  loginForm: FormGroup;

  /**
   * Form submitted boolean
   *
   * @type {boolean}
   */
  submitted = false;

  /**
   * Constructor
   *
   * @param {FormBuilder} fb
   * @param {NgxLoginService} service
   */
  constructor(
    private fb: FormBuilder,
    public service: NgxLoginService
  ) {
    this.createForm();
  }

  /**
   * Create the login form
   */
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', Validators.required]
    });
  }

  /**
   * Submit the login form
   */
  onSubmit() {
    this.submitted = true;
    this.loading = true;


    if (this.loginForm.valid === true) {
      this.service.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(
          data => {
            // this.router.navigate([this.returnUrl]);
            console.log('logged in');
          },
          error => {
            this.loading = false;
          }
        );
    }

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
