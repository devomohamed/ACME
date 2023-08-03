import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../core/services/person.service';
import { Person } from '../../shared/models/person';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../shared/models/movie';
import { MoviesService } from '../../core/services/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.scss']
})
export class PersondetailsComponent implements OnInit {

  url:string = 'https://image.tmdb.org/t/p/w500//'
  person!:Person
  movies!:Movie[]
  id!:number
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }


  constructor(private route:ActivatedRoute,private personService:PersonService,private MoviesService:MoviesService){
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

  getMovieCredits(){
    this.MoviesService.getMovieCredits(this.id).subscribe((movies:any)=>{
      console.log(movies);
      this.movies = movies.cast
    },(e)=>{
      console.log(e);
    })
  }

  ngOnInit(): void {
    this.getMostPopular()
    this.getMovieCredits()
  }


}


