import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePenBox, lucideTrash } from '@ng-icons/lucide';

@Component({
  selector: 'card-users',
  imports: [NgIcon],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  viewProviders: [provideIcons({ lucideTrash, lucidePenBox })],
})
export class CardUsers {
  user = {
    id: 'abcd',
    name: 'lucas carinhanha',
    email: 'lucascarinhanha4@gmail.com',
  };
}
