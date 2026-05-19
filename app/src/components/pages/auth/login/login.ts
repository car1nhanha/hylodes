import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../../atoms/button/button';
import { Auth, BodyAuth, FooterAuth } from '../../../templates/auth/auth';

@Component({
  selector: 'app-login',
  imports: [Auth, Button],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private router = inject(Router);

  footerAuth = {
    title: "Don't have an account yet?",
    subtitle: 'Register now!',
    button: {
      action: () => this.router.navigate(['register']),
      title: 'Create account',
    },
  } as FooterAuth;

  bodyAuth = {
    title: 'Access the platform',
    subtitle: 'Log in using your registered email and password.',
  } as BodyAuth;
}
