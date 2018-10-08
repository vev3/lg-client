import { Component, OnInit } from "@angular/core";
import { HttpService } from "~/src/services/http.service";
import { Question } from "~/src/assets/models/question";
import { QuestionService } from "~/src/services/question.service";

@Component({
  moduleId: module.id,
  selector: "lg-homepage",
  templateUrl: "homepage.component.html",
  styleUrls: ["homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  questions: Question[] = [
    {
      body: "question1",
      date: new Date()
    },
    {
      body: "question2",
      date: new Date()
    },
    {
      body: "question3",
      date: new Date()
    },
    {
      body: "question3",
      date: new Date()
    }
  ];

  constructor(private questionService: QuestionService) {}
  label = "";
  ngOnInit() {
    this.questionService
      .fetchQuestions()
      .subscribe(questions => {
        this.questions = questions;
      });
  }
}
