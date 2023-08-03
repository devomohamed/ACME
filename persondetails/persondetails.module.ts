import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersondetailsRoutingModule } from './persondetails-routing.module';
import { PersondetailsComponent } from './persondetails.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PersondetailsComponent
  ],
  imports: [
    CommonModule,
    PersondetailsRoutingModule,
    CoreModule,
    SharedModule,
  ]
})
export class PersondetailsModule { }
