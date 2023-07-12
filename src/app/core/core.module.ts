import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { PersonService } from './services/person.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[MoviesService,PersonService]
})
export class CoreModule { }
