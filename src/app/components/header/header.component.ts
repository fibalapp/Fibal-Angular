import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  rootClassName: string = ''
  @Input()
  heading11: string = 'NOTUS PRO'
  @Input()
  heading1: string = 'FIBAL'
  constructor() {}
}
