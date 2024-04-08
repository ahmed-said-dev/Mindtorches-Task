import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { flippedCardComponent } from './components/flippedCard/flippedCard.component';

const routes: Routes = [
  {path : '' , component:FormComponent},
  {path : 'flippedcard' , component:flippedCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
