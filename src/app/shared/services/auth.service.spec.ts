import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UserService } from 'shared/services/user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const fakeAuthState = new BehaviorSubject(null);

class UserServiceMock {
}

const afAuthStub = {
  authState: fakeAuthState,
  auth: {
    signInWithRedirect: jasmine
      .createSpy('signInWithRedirect'),
    signOut: jasmine
      .createSpy('signOut'),
  },
};

const routeStub = {
  snapshot: {
    queryParamMap: {
      get: jasmine
      .createSpy('get')
      .and
      .returnValue(null)
    }
  }
};

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: UserService, useClass: UserServiceMock },
        { provide: AngularFireAuth, useValue: afAuthStub },
        { provide: ActivatedRoute, useValue: routeStub }
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should login with AngularFireAuth', inject([AuthService], (service: AuthService) => {
    service.login();
    expect(afAuthStub.auth.signInWithRedirect).toHaveBeenCalled();
  }));

  it('should logout using AngularFireAuth', inject([AuthService], (service: AuthService) => {
    service.logout();
    expect(afAuthStub.auth.signOut).toHaveBeenCalled();
  }));

});
