import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class HttpService {
  private serverUrl = "http://25.39.177.156:4000/";
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(this.serverUrl);
  }
}
