import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePenBox, lucideThumbsUp, lucideTrash, lucideX } from '@ng-icons/lucide';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'organism-side-idea',
  imports: [Button, NgIcon],
  templateUrl: './side-idea.html',
  styleUrl: './side-idea.scss',
  viewProviders: [provideIcons({ lucideX, lucideThumbsUp, lucideTrash, lucidePenBox })],
})
export class SideIdea {}
