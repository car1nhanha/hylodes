import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideLightbulb, lucideMessageSquare, lucideThumbsUp } from '@ng-icons/lucide';
import { Tag } from '../../atoms/tag/tag';
import { Title } from '../../atoms/title/title';
import { Default } from '../../templates/default/default';

@Component({
  selector: 'app-ideas',
  imports: [Default, Title, Tag],
  templateUrl: './ideas.html',
  styleUrl: './ideas.scss',
  viewProviders: [provideIcons({ lucideLightbulb, lucideMessageSquare, lucideThumbsUp })],
})
export class Ideas {}
