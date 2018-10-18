"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var question_service_1 = require("~/src/services/question.service");
var router_1 = require("nativescript-angular/router");
var QuestionFormComponent = /** @class */ (function () {
    function QuestionFormComponent(questionService, routerExtensions) {
        this.questionService = questionService;
        this.routerExtensions = routerExtensions;
        this.question = {
            title: "",
            body: "",
            date: null
        };
    }
    QuestionFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.question.date = new Date();
        this.questionService.save(this.question).subscribe(function (question) {
            console.log(JSON.stringify(question));
            var options = {
                title: "Nice!",
                message: "Question sent successfully!",
                okButtonText: "OK"
            };
            alert(options)['then'](function () {
                _this.routerExtensions.navigateByUrl("");
            });
        });
    };
    QuestionFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "lg-question-form",
            templateUrl: "question-form.component.html",
            styleUrls: ["question-form.component.scss"]
        }),
        __metadata("design:paramtypes", [question_service_1.QuestionService,
            router_1.RouterExtensions])
    ], QuestionFormComponent);
    return QuestionFormComponent;
}());
exports.QuestionFormComponent = QuestionFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxvRUFBa0U7QUFFbEUsc0RBQStEO0FBUS9EO0lBTUUsK0JBQ1UsZUFBZ0MsRUFDaEMsZ0JBQWtDO1FBRGxDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUDVDLGFBQVEsR0FBYTtZQUNuQixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDO0lBSUMsQ0FBQztJQUNKLHdDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxPQUFPLEdBQUc7Z0JBQ1osS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLDZCQUE2QjtnQkFDdEMsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQztZQUNGLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXZCVSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDNUMsQ0FBQzt5Q0FRMkIsa0NBQWU7WUFDZCx5QkFBZ0I7T0FSakMscUJBQXFCLENBd0JqQztJQUFELDRCQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFF1ZXN0aW9uU2VydmljZSB9IGZyb20gXCJ+L3NyYy9zZXJ2aWNlcy9xdWVzdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcIn4vc3JjL2Fzc2V0cy9tb2RlbHMvcXVlc3Rpb25cIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6IFwibGctcXVlc3Rpb24tZm9ybVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcInF1ZXN0aW9uLWZvcm0uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInF1ZXN0aW9uLWZvcm0uY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRm9ybUNvbXBvbmVudCB7XHJcbiAgcXVlc3Rpb246IFF1ZXN0aW9uID0ge1xyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICBib2R5OiBcIlwiLFxyXG4gICAgZGF0ZTogbnVsbFxyXG4gIH07XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uU2VydmljZTogUXVlc3Rpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgKSB7fVxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgdGhpcy5xdWVzdGlvbi5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHRoaXMucXVlc3Rpb25TZXJ2aWNlLnNhdmUodGhpcy5xdWVzdGlvbikuc3Vic2NyaWJlKHF1ZXN0aW9uID0+IHtcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocXVlc3Rpb24pKTtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgdGl0bGU6IFwiTmljZSFcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlF1ZXN0aW9uIHNlbnQgc3VjY2Vzc2Z1bGx5IVwiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgIH07XHJcbiAgICAgIGFsZXJ0KG9wdGlvbnMpWyd0aGVuJ10oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKFwiXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=