import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ExponenteComponent } from './exponente/exponente.component';
import { RaizComponent } from './raiz/raiz.component';

const routes: Routes = [
  { path: '', component: MainComponent },

  { path: 'raiz', component: RaizComponent },

  { path: 'exponente', component: ExponenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
