import { Component, Input } from '@angular/core'

@Component({
  selector: 'service-card',
  templateUrl: 'service-card.component.html',
  styleUrls: ['service-card.component.css'],
})
export class ServiceCard {
  @Input()
  text: string =
    'At the moment we only have one developer but we would be thrilled to hear about what we can add to improve your experience.'
  @Input()
  heading: string = 'Suggest ideas'
  constructor() {}
}
