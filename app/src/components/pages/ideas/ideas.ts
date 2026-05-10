import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLightbulb, lucideMessageSquare, lucidePlus, lucideThumbsUp } from '@ng-icons/lucide';
import { Button } from '../../atoms/button/button';
import { Option, Select } from '../../atoms/select/select';
import { Separator } from '../../atoms/separator/separator';
import { Tag } from '../../atoms/tag/tag';
import { Title } from '../../atoms/title/title';
import { Default } from '../../templates/default/default';

@Component({
  selector: 'app-ideas',
  imports: [Default, Title, Tag, Select, Button, NgIcon, Separator],
  templateUrl: './ideas.html',
  styleUrl: './ideas.scss',
  viewProviders: [
    provideIcons({ lucideLightbulb, lucideMessageSquare, lucideThumbsUp, lucidePlus }),
  ],
})
export class Ideas {
  options = [
    { id: 'aaa', title: 'aaaaa' },
    { id: 'bbb', title: 'bbbbb' },
    { id: 'ccc', title: 'ccccc' },
  ] as Option[];
}
