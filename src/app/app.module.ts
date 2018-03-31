// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxLoginModule } from './ngx-login/ngx-login.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxLoginModule.forRoot({
      test: 'A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
