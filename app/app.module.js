"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_client_1 = require("nativescript-angular/http-client");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var http_service_1 = require("~/src/services/http.service");
var homepage_component_1 = require("~/src/components/homepage/homepage.component");
var question_service_1 = require("~/src/services/question.service");
var question_form_component_1 = require("~/src/components/question-form/question-form.component");
var websocket_service_1 = require("./src/services/websocket.service");
var forms_2 = require("@angular/forms");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_client_1.NativeScriptHttpClientModule,
                forms_1.NativeScriptFormsModule,
                forms_2.FormsModule
            ],
            declarations: [app_component_1.AppComponent, homepage_component_1.HomepageComponent, question_form_component_1.QuestionFormComponent],
            providers: [http_service_1.HttpService, question_service_1.QuestionService, websocket_service_1.WebsocketService],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdFQUFnRjtBQUNoRixnRkFBOEU7QUFDOUUsaURBQStDO0FBQy9DLDZDQUFpRDtBQUNqRCw0REFBMEQ7QUFDMUQsbUZBQWlGO0FBQ2pGLG9FQUFrRTtBQUNsRSxrR0FBK0Y7QUFDL0Ysc0VBQW9FO0FBQ3BFLHdDQUE2QztBQWtCN0M7SUFIQTs7TUFFRTtJQUNGO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBaEJyQixlQUFRLENBQUM7WUFDUixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsMENBQTRCO2dCQUM1QiwrQkFBdUI7Z0JBQ3ZCLG1CQUFXO2FBQ1o7WUFDRCxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLHNDQUFpQixFQUFFLCtDQUFxQixDQUFDO1lBQ3RFLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsa0NBQWUsRUFBRSxvQ0FBZ0IsQ0FBQztZQUMzRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwifi9zcmMvc2VydmljZXMvaHR0cC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIb21lcGFnZUNvbXBvbmVudCB9IGZyb20gXCJ+L3NyYy9jb21wb25lbnRzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUXVlc3Rpb25TZXJ2aWNlIH0gZnJvbSBcIn4vc3JjL3NlcnZpY2VzL3F1ZXN0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IFF1ZXN0aW9uRm9ybUNvbXBvbmVudCB9IGZyb20gXCJ+L3NyYy9jb21wb25lbnRzL3F1ZXN0aW9uLWZvcm0vcXVlc3Rpb24tZm9ybS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdlYnNvY2tldFNlcnZpY2UgfSBmcm9tIFwiLi9zcmMvc2VydmljZXMvd2Vic29ja2V0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCwgSG9tZXBhZ2VDb21wb25lbnQsIFF1ZXN0aW9uRm9ybUNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0h0dHBTZXJ2aWNlLCBRdWVzdGlvblNlcnZpY2UsIFdlYnNvY2tldFNlcnZpY2VdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==