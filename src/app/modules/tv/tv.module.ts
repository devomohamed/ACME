import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvRoutingModule } from './tv-routing.module';
import { TvComponent } from './tv.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TvComponent
  ],
  imports: [
    CommonModule,
    TvRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class TvModule { }
