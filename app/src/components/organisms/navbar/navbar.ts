import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLightbulb, lucideUsers } from '@ng-icons/lucide';

@Component({
  selector: 'organism-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  viewProviders: [provideIcons({ lucideLightbulb, lucideUsers })],
})
export class Navbar {}
