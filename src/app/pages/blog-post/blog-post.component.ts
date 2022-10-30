import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'blog-post',
  templateUrl: 'blog-post.component.html',
  styleUrls: ['blog-post.component.css'],
})
export class BlogPost {
  rawdvbp: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('BlogPost - Fibal')
    this.meta.addTags([
      {
        name: 'description',
        content: 'share your personal finance goals with like minded people',
      },
      {
        property: 'og:title',
        content: 'BlogPost - Fibal',
      },
      {
        property: 'og:description',
        content: 'share your personal finance goals with like minded people',
      },
    ])
  }
}
