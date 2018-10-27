"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("~/src/services/http.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
    }
    AppComponent.prototype.onTap = function () {
        console.log("tapped");
        console.log(this.httpService
            .get()
            .subscribe(function (data) { return console.log(data); }));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app-main",
            templateUrl: "app.component.html",
            styles: [
                "\n      button {\n        width: 100rem;\n        height: 50rem;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNERBQTBEO0FBYzFEO0lBQ0Usc0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUNoRCw0QkFBSyxHQUFMO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUNULElBQUksQ0FBQyxXQUFXO2FBQ2IsR0FBRyxFQUFFO2FBQ0wsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUN4QyxDQUFDO0lBQ0osQ0FBQztJQVRVLFlBQVk7UUFaeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsTUFBTSxFQUFFO2dCQUNOLGlGQUtDO2FBQ0Y7U0FDRixDQUFDO3lDQUVpQywwQkFBVztPQURqQyxZQUFZLENBVXhCO0lBQUQsbUJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIn4vc3JjL3NlcnZpY2VzL2h0dHAuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYXBwLW1haW5cIixcclxuICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwcmVtO1xyXG4gICAgICAgIGhlaWdodDogNTByZW07XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7fVxyXG4gIG9uVGFwKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0YXBwZWRcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgdGhpcy5odHRwU2VydmljZVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==