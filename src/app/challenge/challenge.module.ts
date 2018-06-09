import { ChallengeProgressComponent } from './challenge/challenge-progress/challenge-progress.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { ChallengeFormComponent } from './challenge-form/challenge-form.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengeCardComponent } from './challenge-card/challenge-card.component';
import { UserChallengesComponent } from './user-challenges/user-challenges.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'challenges/new', component: ChallengeFormComponent, canActivate: [AuthGuard] },
      { path: 'challenges/:id/edit', component: ChallengeFormComponent, canActivate: [AuthGuard] },
      { path: 'challenges/:id', component: ChallengeComponent },
      { path: 'challenges', component: ChallengesComponent },
      { path: 'my/challenges', component: UserChallengesComponent, canActivate: [AuthGuard] }
    ])
  ],
  declarations: [
    ChallengeProgressComponent,
    ChallengeComponent,
    ChallengeCardComponent,
    ChallengeFormComponent,
    ChallengesComponent,
    UserChallengesComponent
  ]
})
export class ChallengeModule { }
