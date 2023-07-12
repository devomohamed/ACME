import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../shared/models/movie';
import { Person } from '../../shared/models/person';
import { PersonService } from '../../core/services/person.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  persons!:Person[]
  page:number = 1;
  lastPage:number = 5;


  constructor(private personService:PersonService){}

  getPeople(){
    this.personService.getPeopleList(this.page).subscribe((person:any)=>{
      console.log(person);
      this.persons = person.results
      this.lastPage = person.total_pages
    },(e)=>{
      console.log(e);
    })
  }


  nextPage(){
    if(this.page < this.lastPage){
      this.page += 1
      this.getPeople()
    }
  }

  previousPage(){
    if(this.page > 1){
      this.page -= 1
      this.getPeople()
    }
  }

  changePageTo(page:number){
    this.page = page
    this.getPeople()
  }

  ngOnInit(): void {
    this.getPeople()
  }


}

