import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMessageSquare, lucideThumbsUp } from '@ng-icons/lucide';

@Component({
  selector: 'card-idea',
  imports: [NgIcon],
  templateUrl: './idea.html',
  styleUrl: './idea.scss',
  viewProviders: [provideIcons({ lucideMessageSquare, lucideThumbsUp })],
})
export class Idea {
  user = {
    id: '123456',
    slug: 'car1nhanha',
  };
}
