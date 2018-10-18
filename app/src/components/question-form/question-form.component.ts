import { Component, OnDestroy, OnInit } from "@angular/core";
import { QuestionService } from "~/src/services/question.service";
import { Question } from "~/src/assets/models/question";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  moduleId: module.id,
  selector: "lg-question-form",
  templateUrl: "question-form.component.html",
  styleUrls: ["question-form.component.scss"]
})
export class QuestionFormComponent {
  question: Question = {
    title: "",
    body: "",
    date: null
  };
  constructor(
    private questionService: QuestionService,
    private routerExtensions: RouterExtensions
  ) {}
  onSubmit() {
    this.question.date = new Date();
    this.questionService.save(this.question).subscribe(question => {
      console.log(JSON.stringify(question));
      let options = {
        title: "Nice!",
        message: "Question sent successfully!",
        okButtonText: "OK"
      };
      alert(options)['then'](() => {
        this.routerExtensions.navigateByUrl("");
      });
    });
  }
}
