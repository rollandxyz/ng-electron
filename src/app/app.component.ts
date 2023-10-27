import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  localError() {
    this.dataService.localError();
  }

  failingRequest() {
    this.dataService.failingRequest();
  }

  successfulRequest() {
    this.dataService.successfulRequest();
  }
}

