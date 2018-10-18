"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("~/src/services/http.service");
var constants_1 = require("~/src/assets/constants");
var QuestionService = /** @class */ (function () {
    function QuestionService(httpService) {
        this.httpService = httpService;
    }
    QuestionService.prototype.fetchQuestions = function () {
        return this.httpService.get(constants_1.questionRoute);
    };
    QuestionService.prototype.save = function (question) {
        return this.httpService.post(constants_1.questionRoute, question);
    };
    QuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMkM7QUFDM0MsNERBQTBEO0FBQzFELG9EQUF1RDtBQUt2RDtJQUNFLHlCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFaEQsd0NBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBYSx5QkFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDhCQUFJLEdBQUosVUFBSyxRQUFrQjtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQVcseUJBQWEsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBVFUsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUVzQiwwQkFBVztPQURqQyxlQUFlLENBVTNCO0lBQUQsc0JBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIn4vc3JjL3NlcnZpY2VzL2h0dHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBxdWVzdGlvblJvdXRlIH0gZnJvbSBcIn4vc3JjL2Fzc2V0cy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcIn4vc3JjL2Fzc2V0cy9tb2RlbHMvcXVlc3Rpb25cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHt9XHJcblxyXG4gIGZldGNoUXVlc3Rpb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0PFF1ZXN0aW9uW10+KHF1ZXN0aW9uUm91dGUpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZShxdWVzdGlvbjogUXVlc3Rpb24pe1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdDxRdWVzdGlvbj4ocXVlc3Rpb25Sb3V0ZSxxdWVzdGlvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==