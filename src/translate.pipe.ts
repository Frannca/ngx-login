import { Inject, Pipe, PipeTransform } from '@angular/core';
import { NgxLoginToken } from './ngx-login-config';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  locale: string;

  constructor(@Inject(NgxLoginToken) token) {
    this.locale = token.config.locale;
  }

  transform(value: any, args?: any): any {
    switch (this.locale) {
      case 'pt': {
        if (TRANSLATION.pt[value]) {
          value = TRANSLATION.pt[value];
        }
        break;
      }
    }
    return value;
  }

}

const TRANSLATION = {
  'pt' : {
    'Email is required': 'Email é obrigatório',
    'Email is invalid': 'Email é inválido',
    'Password is required': 'Senha é obrigatória',
    'Password': 'Senha',
  }
};
