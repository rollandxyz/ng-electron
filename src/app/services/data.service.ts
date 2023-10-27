import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  localError() {
    throw Error('The app component has thrown an error!');
  }

  failingRequest() {
    this.http.get('https://httpstat.us/404?sleep=2000').subscribe(x => { });
  }

  successfulRequest() {
    this.http.get('https://httpstat.us/200?sleep=2000').subscribe(x => { });
  }
}