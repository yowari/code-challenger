import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from 'shared/models/challenge';

@Component({
  selector: 'challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.css']
})
export class ChallengeCardComponent implements OnInit {

  @Input('id')
  id: string;

  @Input('challenge')
  challenge: Challenge;

  constructor() { }

  ngOnInit() {
  }

}
