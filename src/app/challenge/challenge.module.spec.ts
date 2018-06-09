import { ChallengeModule } from './challenge.module';

describe('ChallengeModule', () => {
  let challengeModule: ChallengeModule;

  beforeEach(() => {
    challengeModule = new ChallengeModule();
  });

  it('should create an instance', () => {
    expect(challengeModule).toBeTruthy();
  });
});
