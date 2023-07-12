import { Component } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  movies!:Movie[]



  constructor(private moviesService:MoviesService){}

  getMostPopular(){
    this.moviesService.getMostPopularMovies().subscribe((movies:any)=>{
      console.log(movies);
      this.movies = movies.results
    },(e)=>{
      console.log(e);
    })
  }

  ngOnInit(): void {
    this.getMostPopular()
  }

}
