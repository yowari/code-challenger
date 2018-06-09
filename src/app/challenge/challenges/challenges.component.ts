import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChallengeList } from 'shared/models/challenge';
import { ChallengeService } from 'shared/services/challenge.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit, OnDestroy {

  challenges: ChallengeList;
  subscription: Subscription;

  constructor(private challengeService: ChallengeService) {
  }

  ngOnInit(): void {
    this.subscription = this.challengeService.getAll()
      .subscribe(challenges => this.challenges = challenges);
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
