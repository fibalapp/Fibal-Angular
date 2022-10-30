import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Footer } from './footer/footer.component'
import { Label } from './label/label.component'
import { PostReaction } from './post-reaction/post-reaction.component'
import { Counter } from './counter/counter.component'
import { SecondaryButton } from './secondary-button/secondary-button.component'
import { PrimaryButton } from './primary-button/primary-button.component'
import { MemberDetails } from './member-details/member-details.component'
import { ServiceCard } from './service-card/service-card.component'
import { UserDetails } from './user-details/user-details.component'
import { ArticleCard } from './article-card/article-card.component'
import { Header } from './header/header.component'

@NgModule({
  declarations: [
    Footer,
    Label,
    PostReaction,
    Counter,
    SecondaryButton,
    PrimaryButton,
    MemberDetails,
    ServiceCard,
    UserDetails,
    ArticleCard,
    Header,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Footer,
    Label,
    PostReaction,
    Counter,
    SecondaryButton,
    PrimaryButton,
    MemberDetails,
    ServiceCard,
    UserDetails,
    ArticleCard,
    Header,
  ],
})
export class ComponentsModule {}
