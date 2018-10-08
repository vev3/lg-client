"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var question_service_1 = require("~/src/services/question.service");
var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(questionService) {
        this.questionService = questionService;
        this.questions = [
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
        this.label = "";
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService
            .fetchQuestions()
            .subscribe(function (questions) {
            _this.questions = questions;
        });
    };
    HomepageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "lg-homepage",
            templateUrl: "homepage.component.html",
            styleUrls: ["homepage.component.scss"]
        }),
        __metadata("design:paramtypes", [question_service_1.QuestionService])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELG9FQUFrRTtBQVFsRTtJQW9CRSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBbkJwRCxjQUFTLEdBQWU7WUFDdEI7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTthQUNqQjtZQUNEO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7YUFDakI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO2FBQ2pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTthQUNqQjtTQUNGLENBQUM7UUFHRixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBRDRDLENBQUM7SUFFeEQsb0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGVBQWU7YUFDakIsY0FBYyxFQUFFO2FBQ2hCLFNBQVMsQ0FBQyxVQUFBLFNBQVM7WUFDbEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUJVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzt5Q0FxQnFDLGtDQUFlO09BcEJ6QyxpQkFBaUIsQ0E2QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIn4vc3JjL3NlcnZpY2VzL2h0dHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJ+L3NyYy9hc3NldHMvbW9kZWxzL3F1ZXN0aW9uXCI7XHJcbmltcG9ydCB7IFF1ZXN0aW9uU2VydmljZSB9IGZyb20gXCJ+L3NyYy9zZXJ2aWNlcy9xdWVzdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiBcImxnLWhvbWVwYWdlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiaG9tZXBhZ2UuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcImhvbWVwYWdlLmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lcGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcXVlc3Rpb25zOiBRdWVzdGlvbltdID0gW1xyXG4gICAge1xyXG4gICAgICBib2R5OiBcInF1ZXN0aW9uMVwiLFxyXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBib2R5OiBcInF1ZXN0aW9uMlwiLFxyXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBib2R5OiBcInF1ZXN0aW9uM1wiLFxyXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBib2R5OiBcInF1ZXN0aW9uM1wiLFxyXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBxdWVzdGlvblNlcnZpY2U6IFF1ZXN0aW9uU2VydmljZSkge31cclxuICBsYWJlbCA9IFwiXCI7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnF1ZXN0aW9uU2VydmljZVxyXG4gICAgICAuZmV0Y2hRdWVzdGlvbnMoKVxyXG4gICAgICAuc3Vic2NyaWJlKHF1ZXN0aW9ucyA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBxdWVzdGlvbnM7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=