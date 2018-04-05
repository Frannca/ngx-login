import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoginComponent } from './ngx-login.component';
import { NgxLoginService } from './ngx-login.service';
import { NgxLoginConfig, NgxLoginDefaultConfig, NgxLoginToken } from './ngx-login-config';
import { ErrorPipe } from './error.pipe';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    ToastrModule
  ],
  declarations: [
    NgxLoginComponent,
    ErrorPipe,
  ],
  exports: [
    NgxLoginComponent,
    ErrorPipe
  ],
})

export class NgxLoginModule {

  /**
   * Constructor
   *
   * @param {NgxLoginModule} parentModule
   */
  constructor (@Optional() @SkipSelf() parentModule: NgxLoginModule) {
    if (parentModule) {
      throw new Error(
        'NgxLoginModule is already loaded.');
    }
  }

  /**
   * Define the providers and configuration options
   *
   * @param options
   * @returns {ModuleWithProviders}
   */
  static forRoot(config: Partial<NgxLoginConfig> = {}): ModuleWithProviders {
    return {
      ngModule: NgxLoginModule,
      providers: [
        NgxLoginService,
        { provide: NgxLoginToken, useValue: { config, defaults: NgxLoginDefaultConfig} }
        ]
    };
  }
}
