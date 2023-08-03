import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies!:Movie[]
  page:number = 1;
  lastPage:number = 5;


  constructor(private moviesService:MoviesService){}

  getMostPopular(){
    this.moviesService.getMostPopularMovies(this.page).subscribe((movies:any)=>{
      console.log(movies);
      this.movies = movies.results
      this.lastPage = movies.total_pages
    },(e)=>{
      console.log(e);
    })
  }

  nextPage(){
    if(this.page < this.lastPage){
      this.page += 1
      this.getMostPopular()
    }
  }

  previousPage(){
    if(this.page > 1){
      this.page -= 1
      this.getMostPopular()
    }
  }

  changePageTo(page:number){
    this.page = page
    this.getMostPopular()
  }

  ngOnInit(): void {
    this.getMostPopular()
  }


}
