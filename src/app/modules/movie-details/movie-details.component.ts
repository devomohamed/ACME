import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  url:string = 'https://image.tmdb.org/t/p/w500//'
  id!:number
  data!:Movie
  constructor(private route:ActivatedRoute,private moviesService:MoviesService){
    this.route.params.subscribe(params => {
      //console.log(params['id']) //log the value of id
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

  ngOnInit(): void {
    this.getMovieDetails()
  }
}
