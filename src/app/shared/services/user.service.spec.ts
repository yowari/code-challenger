import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { of, Observable } from 'rxjs';

const objectStub = {
  update: jasmine
    .createSpy('update'),
  valueChanges: jasmine
    .createSpy('valueChanges')
    .and
    .callFake(() => of({}))
};

class AngularFireDatabaseMock {

  object = jasmine
    .createSpy('object')
    .and
    .callFake((pathOrRef: string, opts?: Object) => {
      return objectStub;
    })

}

describe('UserService', () => {
  let db: AngularFireDatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: AngularFireDatabase, useClass: AngularFireDatabaseMock }
      ]
    });

    db = TestBed.get(AngularFireDatabase);
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should save user data', inject([UserService], (service: UserService) => {
    const userMock = {
      uid: '1234',
      displayName: 'user',
      email: 'user@example',
      photoURL: 'userPhotoUrl'
    };

    // @ts-ignore
    service.save(userMock);

    expect(db.object).toHaveBeenCalledWith(`/users/${userMock.uid}`)
    expect(objectStub.update).toHaveBeenCalledWith({
      name: userMock.displayName,
      email: userMock.email,
      photoURL: userMock.photoURL
    });
  }));
});
