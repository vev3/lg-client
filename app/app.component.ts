import { Component } from "@angular/core";
import { HttpService } from "~/src/services/http.service";

@Component({
  selector: "app-main",
  templateUrl: "app.component.html",
  styles: [
    `
      button {
        width: 100rem;
        height: 50rem;
      }
    `
  ]
})
export class AppComponent {
  constructor(private httpService: HttpService, private db: AngularFire) {}
  onTap() {
    console.log("tapped");
    console.log(
      this.httpService
        .get()
        .subscribe(data => console.log(data))
    );
  }
}
