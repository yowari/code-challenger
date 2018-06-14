import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.service';
import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

class AuthServiceMock {
  mockUser: BehaviorSubject<any>;
  user$: Observable<any>;

  constructor() {
    this.mockUser = new BehaviorSubject(null);
    this.user$ = this.mockUser.asObservable();
  }
}

const router =  {
  navigate: jasmine
    .createSpy('navigate')
}

describe('AuthGuardService', () => {
  let service;
  let auth;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: Router, useValue: router }
      ]
    });

    service = TestBed.get(AuthGuard);
    auth = TestBed.get(AuthService);
  });

  it('should be created', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));

  it('should activate the route if user is authenticated', done => {
    auth.mockUser.next({});

    service.canActivate(null, null)
      .subscribe(isActivated => {
        expect(isActivated).toBeTruthy();
        done();
      });
  });

  it('should desactivate the route if user is NOT authenticated and redirect him to login page', done => {
    const state = {
      url: 'current-url'
    }

    auth.mockUser.next(null);

    service.canActivate(null, state)
      .subscribe(isActivated => {
        expect(router.navigate).toHaveBeenCalledWith(['/login'], {
          queryParams: {
            returnUrl: state.url
          }
        });
        expect(isActivated).toBeFalsy();
        done();
      });
  });

});
