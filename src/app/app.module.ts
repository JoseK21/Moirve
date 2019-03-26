import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RaizComponent } from './raiz/raiz.component';
import { ExponenteComponent } from './exponente/exponente.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RaizComponent,
    ExponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
