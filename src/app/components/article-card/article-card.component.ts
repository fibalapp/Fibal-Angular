import { Component, Input } from '@angular/core'

@Component({
  selector: 'article-card',
  templateUrl: 'article-card.component.html',
  styleUrls: ['article-card.component.css'],
})
export class ArticleCard {
  @Input()
  avatar_src: string = '15958451-f790-4024-a70e-cc38b82637f2'
  @Input()
  name: string = 'Laura Hanks'
  @Input()
  new_prop: string = 'Portofino one of the best for remote working'
  @Input()
  image_src: string = '/assets/playground_assets/city-1-1400w.jpg'
  @Input()
  time: string = 'Published 3 days ago'
  @Input()
  avatar_alt: string = 'avatar'
  @Input()
  description: string =
    "Finding temporary housing should be as easy as renting an Airbnb. That's th e idea behinf portofino, which raised $65 million to expand its pet sitting businesses. This come as the right move for the investment while the planet is moving on work from home..."
  @Input()
  image_alt: string = 'image'
  constructor() {}
}
