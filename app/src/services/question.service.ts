import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpService } from "~/src/services/http.service";
import { questionRoute } from "~/src/assets/constants";
import { Observable } from "rxjs";
import { Question } from "~/src/assets/models/question";

@Injectable()
export class QuestionService {
  constructor(private httpService: HttpService) {}

  fetchQuestions() {
    return this.httpService.get<Question[]>(questionRoute);
  }
}
