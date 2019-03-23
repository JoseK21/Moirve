import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { HistoryComponent } from './history/history.component';
import { MatematicalStepsComponent } from './matematical-steps/matematical-steps.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component:  MainComponent },
  { path: 'help', component: HelpComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'matematicalSteps', component: MatematicalStepsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  


 }
