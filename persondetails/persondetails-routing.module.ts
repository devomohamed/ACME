import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersondetailsComponent } from './persondetails.component';

const routes: Routes = [{ path: '', component: PersondetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersondetailsRoutingModule { }
