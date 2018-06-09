import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { ChallengeList } from 'shared/models/challenge';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-challenges',
  templateUrl: './user-challenges.component.html',
  styleUrls: ['./user-challenges.component.css']
})
export class UserChallengesComponent implements OnInit, OnDestroy {

  challenges: ChallengeList;
  subscription: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.subscription = this.authService.appUser$
      .subscribe(user => this.challenges = user.challenges);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ids(): string[] {
    if (!this.challenges) {
      return [];
    }

    return Object.keys(this.challenges);
  }

}
