"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var constants_1 = require("~/src/assets/constants");
var question_service_1 = require("~/src/services/question.service");
require('nativescript-websockets');
// const WebSocket = require("ws");
// (global as any).WebSocket = require('ws');
var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(questionService) {
        this.questionService = questionService;
        this.questions = [];
        this.subscriptions = [];
        this.label = "";
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.questionService.fetchQuestions().subscribe(function (questions) {
            _this.questions = questions;
        }));
        this.ws = new WebSocket(constants_1.wsUrl);
        this.ws.onopen = function () {
            // Web Socket is connected, send data using send()
            // protocol web socket
            // this.ws.send("Message to send");
            console.log("Connected...");
            _this.ws.send("test from client");
        };
    };
    HomepageComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELG9EQUErQztBQUUvQyxvRUFBa0U7QUFDbEUsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDbkMsbUNBQW1DO0FBQ25DLDZDQUE2QztBQU83QztJQUdFLDJCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFGcEQsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFFbkMsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUQ0QyxDQUFDO0lBR3hELG9DQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFNBQVM7WUFDdkQsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxTQUFTLENBQUMsaUJBQUssQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHO1lBQ2Ysa0RBQWtEO1lBQ2xELHNCQUFzQjtZQUN0QixtQ0FBbUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZLElBQUksT0FBQSxZQUFZLENBQUMsV0FBVyxFQUFFLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBekJVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzt5Q0FJcUMsa0NBQWU7T0FIekMsaUJBQWlCLENBMEI3QjtJQUFELHdCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IHdzVXJsIH0gZnJvbSBcIn4vc3JjL2Fzc2V0cy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwifi9zcmMvYXNzZXRzL21vZGVscy9xdWVzdGlvblwiO1xyXG5pbXBvcnQgeyBRdWVzdGlvblNlcnZpY2UgfSBmcm9tIFwifi9zcmMvc2VydmljZXMvcXVlc3Rpb24uc2VydmljZVwiO1xyXG5yZXF1aXJlKCduYXRpdmVzY3JpcHQtd2Vic29ja2V0cycpO1xyXG4vLyBjb25zdCBXZWJTb2NrZXQgPSByZXF1aXJlKFwid3NcIik7XHJcbi8vIChnbG9iYWwgYXMgYW55KS5XZWJTb2NrZXQgPSByZXF1aXJlKCd3cycpO1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiBcImxnLWhvbWVwYWdlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiaG9tZXBhZ2UuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcImhvbWVwYWdlLmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lcGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBxdWVzdGlvbnM6IFF1ZXN0aW9uW10gPSBbXTtcclxuICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcXVlc3Rpb25TZXJ2aWNlOiBRdWVzdGlvblNlcnZpY2UpIHt9XHJcbiAgbGFiZWwgPSBcIlwiO1xyXG4gIHdzO1xyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgIHRoaXMucXVlc3Rpb25TZXJ2aWNlLmZldGNoUXVlc3Rpb25zKCkuc3Vic2NyaWJlKHF1ZXN0aW9ucyA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBxdWVzdGlvbnM7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQod3NVcmwpO1xyXG5cclxuICAgIHRoaXMud3Mub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAvLyBXZWIgU29ja2V0IGlzIGNvbm5lY3RlZCwgc2VuZCBkYXRhIHVzaW5nIHNlbmQoKVxyXG4gICAgICAvLyBwcm90b2NvbCB3ZWIgc29ja2V0XHJcbiAgICAgIC8vIHRoaXMud3Muc2VuZChcIk1lc3NhZ2UgdG8gc2VuZFwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQuLi5cIik7XHJcbiAgICAgIHRoaXMud3Muc2VuZChcInRlc3QgZnJvbSBjbGllbnRcIik7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=