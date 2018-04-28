import { DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { ReactiveFormsModule, } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { NgxLoginComponent } from './ngx-login.component';
import { NgxLoginModule } from './ngx-login.module';
import { NgxLoginService } from './ngx-login.service';

describe('NgxLoginComponent', () => {
  let component: NgxLoginComponent;
  let fixture: ComponentFixture<NgxLoginComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NgxLoginModule.forRoot(),
        RouterTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        NgxLoginService,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NgxLoginComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have one text input', () => {
    const loginElement: HTMLInputElement = debugElement.nativeElement;
    const input = loginElement.querySelector('input[type="text"]');
    expect(input).toBeTruthy();
  });

  it('should have one password input', () => {
    const loginElement: HTMLInputElement = debugElement.nativeElement;
    const input = loginElement.querySelector('input[type="password"]');
    expect(input).toBeTruthy();
  });

  it('should have one submit button', () => {
    const loginElement: HTMLButtonElement = debugElement.nativeElement;
    const button = loginElement.querySelector('button[type="submit"]');
    expect(button).toBeTruthy();
  });

});
