import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { HelpComponent } from './help/help.component';
import { MatematicalStepsComponent } from './matematical-steps/matematical-steps.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    HelpComponent,
    MatematicalStepsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
