import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../core/services/person.service';
import { Person } from '../../shared/models/person';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.scss']
})
export class PersondetailsComponent implements OnInit {

  url:string = 'https://image.tmdb.org/t/p/w500//'
  person!:Person
  id!:number


  constructor(private route:ActivatedRoute,private personService:PersonService){
    this.route.params.subscribe(params => {
      //console.log(params['id']) //log the value of id
      this.id = parseInt(params['id'])
    });
  }

  getMostPopular(){
    this.personService.getPersonData(this.id).subscribe((person:any)=>{
      console.log(person);
      this.person = person
    },(e)=>{
      console.log(e);
    })
  }

  ngOnInit(): void {
    this.getMostPopular()
  }


}


