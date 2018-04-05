import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxLoginService } from './ngx-login.service';
import { NgxLoginConfig, NgxLoginToken} from './ngx-login-config';
import { ToastrService } from 'ngx-toastr';

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
  @Input() logo: string;

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
   * ngx-login configuration
   */
  ngxLoginConfig: NgxLoginConfig;

  /**
   * Constructor
   *
   * @param {FormBuilder} fb
   * @param {NgxLoginService} service
   */
  constructor(
    @Inject(NgxLoginToken) token,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public service: NgxLoginService
  ) {
    const defaultConfig = new token.defaults;
    this.ngxLoginConfig = { ...defaultConfig, ...token.config };
    this.logo = this.ngxLoginConfig.logo;

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
      this.service.login(
        this.loginForm.value.email,
        this.loginForm.value.password,
        this.ngxLoginConfig.fieldOne,
        this.ngxLoginConfig.fieldTwo,
        this.ngxLoginConfig.apiUrl,
        this.ngxLoginConfig.prefix
      ).subscribe(
        data => {
          const body: any = data;
          this.toastr.success(body.message, this.ngxLoginConfig.messageSuccess);
          setTimeout(() => {
            this.router.navigate([this.ngxLoginConfig.redirect]).then(() => {
              if (this.ngxLoginConfig.redirectExternal) {
                window.location.href = this.ngxLoginConfig.redirectExternal;
              }
            });
            this.loading = false;
          }, 1500);
        },
        error => {
          const body = error.json();
          this.toastr.error(body.message, this.ngxLoginConfig.messageError);
          this.loading = false;
        }
      );
    } else {
      this.loading = false;
    }
  }

}
