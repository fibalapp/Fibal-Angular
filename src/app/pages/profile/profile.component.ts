import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class Profile {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Profile - Fibal')
    this.meta.addTags([
      {
        name: 'description',
        content: 'share your personal finance goals with like minded people',
      },
      {
        property: 'og:title',
        content: 'Profile - Fibal',
      },
      {
        property: 'og:description',
        content: 'share your personal finance goals with like minded people',
      },
    ])
  }
}
