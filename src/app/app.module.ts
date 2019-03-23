import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { HelpComponent } from './help/help.component';
import { MatematicalStepsComponent } from './matematical-steps/matematical-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    HelpComponent,
    MatematicalStepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
