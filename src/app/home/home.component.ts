import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  inicio: any;
  fim: any;

  constructor(public timer: TimerService) {
    this.timer.start(this.inicio);
  }

  ngOnInit() {}
}
