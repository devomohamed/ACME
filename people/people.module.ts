import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class PeopleModule { }
