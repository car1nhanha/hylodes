import { Component, Input } from '@angular/core';
import { Button } from '../../atoms/button/button';

export interface FooterAuth {
  title: string;
  subtitle: string;
  button: {
    title: string;
    action: () => {};
  };
}

export interface BodyAuth {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'template-auth',
  imports: [Button],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {
  @Input('body') body!: BodyAuth;
  @Input('footer') footer!: FooterAuth;
}
