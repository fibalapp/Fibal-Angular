import { Component, Input } from '@angular/core'

@Component({
  selector: 'user-details',
  templateUrl: 'user-details.component.html',
  styleUrls: ['user-details.component.css'],
})
export class UserDetails {
  @Input()
  image_src: string = '/playground_assets/team4-200h.png'
  @Input()
  name: string = 'Laura Hanks'
  @Input()
  time: string = '3 days'
  @Input()
  image_alt: string = 'image'
  raw8jsv: string = ' '

  constructor() {}
}
