import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLightbulb, lucideLogOut, lucideUsers } from '@ng-icons/lucide';

@Component({
  selector: 'organism-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  viewProviders: [provideIcons({ lucideLightbulb, lucideUsers, lucideLogOut })],
})
export class Navbar {
  user = {
    id: 'abcd',
    name: 'lucas carinhanha',
    email: 'lucascarinhanha4@gmail.com',
  };
}
