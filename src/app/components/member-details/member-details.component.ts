import { Component, Input } from '@angular/core'

@Component({
  selector: 'member-details',
  templateUrl: 'member-details.component.html',
  styleUrls: ['member-details.component.css'],
})
export class MemberDetails {
  @Input()
  image_src1: string = '8ee63216-6582-43aa-b68a-254c519087c0'
  @Input()
  heading11: string = 'CEO, DEVELOPER'
  @Input()
  image_alt2: string = 'image'
  @Input()
  image_src2: string = '/assets/playground_assets/headshot2022-200w.jpg'
  @Input()
  heading1: string = 'Ryan Tompson'
  @Input()
  image_alt1: string = 'image'
  @Input()
  image_alt: string = 'image'
  @Input()
  image_src: string =
    'https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg'
  constructor() {}
}
