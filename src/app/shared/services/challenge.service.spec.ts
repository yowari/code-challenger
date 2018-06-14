import { TestResult } from 'shared/models/test-result';
import { TestBed, inject } from '@angular/core/testing';

import { ChallengeService } from './challenge.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from 'shared/services/auth.service';
import { environment } from './../../../environments/environment';
import { Test } from 'shared/models/test';

class AngularFireDatabaseMock {
}

class AuthServiceMock {
}

describe('ChallengeService', () => {
  let service: ChallengeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ChallengeService,
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: AngularFireDatabase, useClass: AngularFireDatabaseMock }
      ]
    });

    service = TestBed.get(ChallengeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ChallengeService], (service: ChallengeService) => {
    expect(service).toBeTruthy();
  }));

  it('should call Jasmine REST API', (done) => {
    const testMock: Test = {
      name: 'mock-test',
      src: '',
      spec: ''
    }

    const testResultMock: TestResult = {
      total: 0,
      passed: 0,
      failed: 0
    };

    service.run(testMock).subscribe(testResult => {
      expect(testResult).toEqual(testResultMock);
      done();
    });

    httpMock.expectOne(environment.testRunnerBaseUrl)
      .flush(testResultMock);
    httpMock.verify();
  });
});
