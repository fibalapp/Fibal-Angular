import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Profile } from './profile.component'

const routes = [
  {
    path: '',
    component: Profile,
  },
]

@NgModule({
  declarations: [Profile],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Profile],
})
export class ProfileModule {}
