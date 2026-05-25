import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLightbulb, lucideMessageSquare, lucidePlus, lucideThumbsUp } from '@ng-icons/lucide';
import { Button } from '../../atoms/button/button';
import { Option, Select } from '../../atoms/select/select';
import { Separator } from '../../atoms/separator/separator';
import { Tag } from '../../atoms/tag/tag';
import { Title } from '../../atoms/title/title';
import { MoleculeInput } from '../../molecules/input/input';
import { Idea } from '../../organisms/card/idea/idea';
import { OrganismPopup } from '../../organisms/card/popup/popup';
import { Default } from '../../templates/default/default';
import { Popup } from '../../templates/popup/popup';

@Component({
  selector: 'app-ideas',
  imports: [
    Default,
    Title,
    Tag,
    Select,
    Button,
    NgIcon,
    Separator,
    Idea,
    Popup,
    OrganismPopup,
    MoleculeInput,
  ],
  templateUrl: './ideas.html',
  styleUrl: './ideas.scss',
  viewProviders: [
    provideIcons({ lucideLightbulb, lucideMessageSquare, lucideThumbsUp, lucidePlus }),
  ],
})
export class Ideas {
  isOpen = false;
  options = [
    { id: 'aaa', title: 'aaaaa' },
    { id: 'bbb', title: 'bbbbb' },
    { id: 'ccc', title: 'ccccc' },
  ] as Option[];

  save() {
    alert('is saving');
  }
  close() {
    this.isOpen = false;
  }

  openCreatePopup() {
    this.isOpen = true;
  }
  closeCreatePopup() {
    this.isOpen = true;
  }
}
