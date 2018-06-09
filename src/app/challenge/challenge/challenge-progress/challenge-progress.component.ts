import { Component, OnInit, Input } from '@angular/core';
import { TestResult } from 'shared/models/test-result';

@Component({
  selector: 'challenge-progress',
  templateUrl: './challenge-progress.component.html',
  styleUrls: ['./challenge-progress.component.css']
})
export class ChallengeProgressComponent implements OnInit {

  @Input('result')
  result: TestResult;

  constructor() { }

  ngOnInit() {
  }

}
