import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class Profile {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Profile - Making personal finance social')
    this.meta.addTags([
      {
        name: 'description',
        content: 'share your personal finance goals with like minded people',
      },
      {
        property: 'og:title',
        content: 'Profile - Making personal finance social',
      },
      {
        property: 'og:description',
        content:
          'Fibal is a finance-focused online community where users communicate about investing, spending,  saving, and everything related to personal finances',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/94dcab4a-78d3-4aff-9ad1-714d3d4fd3e3/ad44e06c-c0b2-4aa2-9dc0-0c86ad9a226d?org_if_sml=1',
      },
    ])
  }
}
