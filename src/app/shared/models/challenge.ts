export interface Challenge {
  name: string;
  description: string;
  readme: string;
  spec: string;
  owner: string;
}

export interface ChallengeList {
  [id: string]: Challenge;
}
