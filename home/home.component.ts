import { Component } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../shared/models/movie';
import { Person } from '../../shared/models/person';
import { Tv } from '../../shared/models/tv';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PersonService } from '../../core/services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  movies!:Movie[]
  actors!:Person[]
  tvs!:Tv[]
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



  constructor(private moviesService:MoviesService,private personService:PersonService){}

  getMostPopular(){
    this.moviesService.getMostPopularMovies().subscribe((movies:any)=>{
      console.log(movies);
      this.movies = movies.results
    },(e)=>{
      console.log(e);
    })
  }

  getTvs(){
    this.moviesService.getTvList().subscribe((tv:any)=>{
      console.log(tv);
      this.tvs = tv.results
    },(e)=>{
      console.log(e);
    })
  }

  getPeople(){
    this.personService.getPeopleList().subscribe((person:any)=>{
      console.log(person);
      this.actors = person.results
    },(e)=>{
      console.log(e);
    })
  }

  ngOnInit(): void {
    this.getMostPopular()
    this.getTvs()
    this.getPeople()
  }

}
