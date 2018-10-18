import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { HttpService } from "~/src/services/http.service";
import { HomepageComponent } from "~/src/components/homepage/homepage.component";
import { QuestionService } from "~/src/services/question.service";
import { QuestionFormComponent } from "~/src/components/question-form/question-form.component";
import { WebsocketService } from "./src/services/websocket.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    FormsModule
  ],
  declarations: [AppComponent, HomepageComponent, QuestionFormComponent],
  providers: [HttpService, QuestionService, WebsocketService],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
