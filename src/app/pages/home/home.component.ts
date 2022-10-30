import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw6omh: string = ' '
  raw1lhx: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Fibal')
    this.meta.addTags([
      {
        name: 'description',
        content: 'share your personal finance goals with like minded people',
      },
      {
        property: 'og:title',
        content: 'Fibal',
      },
      {
        property: 'og:description',
        content: 'share your personal finance goals with like minded people',
      },
    ])
  }
}
