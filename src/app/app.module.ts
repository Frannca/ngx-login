import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxLoginModule } from './ngx-login/ngx-login.module';
import { AppRouting } from './app.routing';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRouting,
    BrowserModule,
    BrowserAnimationsModule,
    NgxLoginModule.forRoot({
      apiUrl: 'http://guiagaranhuns.localhost/autenticar',
      prefix: 'ngx_login_',
      fieldTwo: 'senha'
    }),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
