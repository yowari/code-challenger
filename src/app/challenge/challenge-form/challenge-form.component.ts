import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ChallengeService } from 'shared/services/challenge.service';
import { AuthService } from 'shared/services/auth.service';
import { Challenge } from 'shared/models/challenge';

@Component({
  selector: 'app-challenge-form',
  templateUrl: './challenge-form.component.html',
  styleUrls: ['./challenge-form.component.css']
})
export class ChallengeFormComponent {

  editorOptions = {
    language: 'javascript'
  };

  challenge: Challenge = {
    name: '',
    description: '',
    readme: '',
    spec: `describe('Your exercise', function () {
  it('should work', function () {
  });
});
`,
    owner: ''
};

  id: string;
  userId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private challengeService: ChallengeService,
    private authService: AuthService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.challengeService.get(this.id)
        .pipe(take(1))
        .subscribe(c => this.challenge = c);
    }

    this.authService.user$
      .pipe(take(1))
      .subscribe(user => this.userId = user.uid);
  }

  save(challenge: any): void {
    if (this.id) {
      this.challengeService.update(this.id, challenge);
    }
    else {
      this.challengeService.create(challenge, this.userId);
    }

    this.router.navigate(['/my/challenges']);
  }

  delete(): void {
    if (!confirm("Are you sure to delete this challenge?")) {
      return;
    }

    this.challengeService.delete(this.id);
    this.router.navigate(['/my/challenges']);
  }

}
