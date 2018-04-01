import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoginComponent } from './component/ngx-login.component';
import { NgxLoginService } from './service/ngx-login.service';
import { NgxLoginConfig, NgxLoginDefaultConfig, NgxLoginToken } from './ngx-login-config';
import { ErrorPipe } from './pipe/error.pipe';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
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
