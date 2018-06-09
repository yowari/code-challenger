import { TestResult } from 'shared/models/test-result';
import { ChallengeList } from 'shared/models/challenge';

export interface AppUser {
  name: string;
  email: string;
  photoURL: string;
  challenges: ChallengeList;
  scores: Scores;
}

interface Scores {
  [challengeId: string]: TestResult;
}
