import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../shared/models/movie';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PersonService } from '../../core/services/person.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  url:string = 'https://image.tmdb.org/t/p/w500//'
  id!:number
  data!:Movie
  movies!:Movie[]
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
  constructor(private route:ActivatedRoute,private moviesService:MoviesService,private personService:PersonService){
    this.route.params.subscribe(params => {
      //console.log(params['id']) //log the value of id
      // console.log(params);
      this.getMovieDetails()
    this.getMovieCredits()

      this.id = parseInt(params['id'])
    });
  }

  // Get Movie Details
  getMovieDetails(){
    this.moviesService.getMovieDetails(this.id).subscribe((movie:any)=>{
      this.data = movie
      console.log(movie);

    },(error)=>{console.log(error);
    })
  }

  getMovieCredits(){
    this.moviesService.getSimilarMovies(this.id).subscribe((movies:any)=>{
      console.log(movies);
      this.movies = movies.results
    },(e)=>{
      console.log(e);
    })
  }


  ngOnInit(): void {
    this.getMovieDetails()
    this.getMovieCredits()
  }
}
