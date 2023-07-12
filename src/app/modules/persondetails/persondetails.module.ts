import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersondetailsRoutingModule } from './persondetails-routing.module';
import { PersondetailsComponent } from './persondetails.component';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    PersondetailsComponent
  ],
  imports: [
    CommonModule,
    PersondetailsRoutingModule,
    CoreModule
  ]
})
export class PersondetailsModule { }
