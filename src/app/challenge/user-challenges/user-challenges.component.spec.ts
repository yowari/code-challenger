import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChallengesComponent } from './user-challenges.component';

describe('UserChallengeComponent', () => {
  let component: UserChallengesComponent;
  let fixture: ComponentFixture<UserChallengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChallengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
