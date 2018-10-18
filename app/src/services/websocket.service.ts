import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { wsUrl } from "../assets/constants";

@Injectable()
export class WebsocketService {
  private socket;
  connect(): Subject<any> {
    this.socket = io(wsUrl);
    let observable = new Observable(observer => {
      this.socket.on("message", data => {
        console.log("received a message");
        observer.next(data);
      });
      return () => this.socket.disconnect();
    });

    let observer = {
      next: (data: Object) => {
        this.socket.emit("message", JSON.stringify(data));
      }
    };
    return Subject.create(observer, observable);
  }
}
