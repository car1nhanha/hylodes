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
import { SideIdea } from '../../organisms/side-idea/side-idea';
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
    SideIdea,
  ],
  templateUrl: './ideas.html',
  styleUrl: './ideas.scss',
  viewProviders: [
    provideIcons({ lucideLightbulb, lucideMessageSquare, lucideThumbsUp, lucidePlus }),
  ],
})
export class Ideas {
  isOpenNewIdea = false;
  isOpenIdeaDetail = false;

  options = [
    { id: 'aaa', title: 'aaaaa' },
    { id: 'bbb', title: 'bbbbb' },
    { id: 'ccc', title: 'ccccc' },
  ] as Option[];

  save() {
    alert('is saving');
  }

  openCreatePopup() {
    this.isOpenNewIdea = true;
  }
  closeCreatePopup() {
    this.isOpenNewIdea = false;
  }

  openIdeaDetail(id: string) {
    this.isOpenIdeaDetail = true;
    // passar o id na rota
    console.log({ id });
  }
  closeIdeaDetail(id: string) {
    this.isOpenIdeaDetail = true;
    console.log({ id });
  }
}
