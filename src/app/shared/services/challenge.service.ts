import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Challenge, ChallengeList } from 'shared/models/challenge';
import { Test } from 'shared/models/test';
import { TestResult } from 'shared/models/test-result';
import { AuthService } from 'shared/services/auth.service';

@Injectable()
export class ChallengeService {

  constructor(
    private authService: AuthService,
    private db: AngularFireDatabase,
    private http: HttpClient) {
  }

  create(challenge: Challenge, userId: string) {
    if (!userId) {
      return;
    }

    return this.db.list<Challenge>('/challenges').push({
        owner: userId,
        ...challenge
      })
      .then(ref => {
        this.db.object(`/users/${userId}/challenges/${ref.key}`).update({
          name: challenge.name,
          description: challenge.description
        });

        return ref;
      });
  }

  getAll(): Observable<ChallengeList> {
    return this.db.object<ChallengeList>('/challenges').valueChanges();
  }

  get(id: string): Observable<Challenge> {
    return this.db.object<Challenge>(`/challenges/${id}`).valueChanges();
  }

  update(id: string, challenge: Challenge): Promise<void> {
    return this.db.object<Challenge>(`/challenges/${id}`).update(challenge);
  }

  delete(id: string): Promise<void> {
    return this.db.object<Challenge>(`/challenges/${id}`).remove();
  }

  run(test: Test): Observable<TestResult> {
    return this.http.post<TestResult>(environment.testRunnerBaseUrl, test);
      // .pipe(
      //   map(result => {
      //     this.db.object(`/users/${userId}/scores/${id}`).update(result);
      //     return result;
      //   })
      // );
  }

}
