import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Challenge } from 'shared/models/challenge';
import { ChallengeService } from 'shared/services/challenge.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChallengeComponent implements OnInit {

  editorOptions = {
    language: 'javascript'
  };

  id: string;
  source: string = "";
  challenge: Challenge | any = {};

  result = {
    total: 0,
    passed: 0,
    failed: 0
  };

  constructor(
    private route: ActivatedRoute,
    private challengeService: ChallengeService
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (!this.id) {
      return;
    }

    this.challengeService.get(this.id)
      .pipe(take(1))
      .subscribe(c => {
        this.challenge = c;
        this.run();
      });
  }

  run(): void {
    this.challengeService.run({
      name: this.challenge.name,
      src: this.source,
      spec: this.challenge.spec
    })
    .pipe(take(1))
    .subscribe(r => this.result = r);
  }

}
