import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { wsUrl } from "~/src/assets/constants";
import { Question } from "~/src/assets/models/question";
import { QuestionService } from "~/src/services/question.service";
require('nativescript-websockets');
// const WebSocket = require("ws");
// (global as any).WebSocket = require('ws');
@Component({
  moduleId: module.id,
  selector: "lg-homepage",
  templateUrl: "homepage.component.html",
  styleUrls: ["homepage.component.scss"]
})
export class HomepageComponent implements OnInit, OnDestroy {
  questions: Question[] = [];
  subscriptions: Subscription[] = [];
  constructor(private questionService: QuestionService) {}
  label = "";
  ws;
  ngOnInit() {
    this.subscriptions.push(
      this.questionService.fetchQuestions().subscribe(questions => {
        this.questions = questions;
      })
    );
    this.ws = new WebSocket(wsUrl);

    this.ws.onopen = () => {
      // Web Socket is connected, send data using send()
      // protocol web socket
      // this.ws.send("Message to send");
      console.log("Connected...");
      this.ws.send("test from client");
    };
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
