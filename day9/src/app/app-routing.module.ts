import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogcontentComponent } from './papers/dialogcontent/dialogcontent.component';
import { FormComponent } from './papers/form/form.component';

const routes: Routes = [
  {path:"dialog",component:DialogcontentComponent},
  {path:"form",component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
