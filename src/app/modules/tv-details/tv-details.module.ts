import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvDetailsRoutingModule } from './tv-details-routing.module';
import { TvDetailsComponent } from './tv-details.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TvDetailsComponent
  ],
  imports: [
    CommonModule,
    TvDetailsRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class TvDetailsModule { }
