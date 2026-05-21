import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../../atoms/button/button';
import { MoleculeInput } from '../../../molecules/input/input';
import { Auth, BodyAuth, FooterAuth } from '../../../templates/auth/auth';

@Component({
  selector: 'app-register',
  imports: [Auth, MoleculeInput, Button],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private router = inject(Router);

  footerAuth = {
    title: 'Do you already have an account?',
    subtitle: 'Entre agora mesmo',
    button: {
      action: () => this.router.navigate(['login']),
      title: 'Access account',
    },
  } as FooterAuth;

  bodyAuth = {
    title: 'Create your account',
    subtitle: 'Please enter your name, email address, and password.',
  } as BodyAuth;
}
