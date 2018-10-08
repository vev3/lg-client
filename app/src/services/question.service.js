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
    QuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMkM7QUFDM0MsNERBQTBEO0FBQzFELG9EQUF1RDtBQUt2RDtJQUNFLHlCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFaEQsd0NBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBYSx5QkFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUxVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FFc0IsMEJBQVc7T0FEakMsZUFBZSxDQU0zQjtJQUFELHNCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gXCJ+L3NyYy9zZXJ2aWNlcy9odHRwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgcXVlc3Rpb25Sb3V0ZSB9IGZyb20gXCJ+L3NyYy9hc3NldHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCJ+L3NyYy9hc3NldHMvbW9kZWxzL3F1ZXN0aW9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvblNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7fVxyXG5cclxuICBmZXRjaFF1ZXN0aW9ucygpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldDxRdWVzdGlvbltdPihxdWVzdGlvblJvdXRlKTtcclxuICB9XHJcbn1cclxuIl19