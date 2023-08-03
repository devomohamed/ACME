import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../shared/models/movie';
import { Tv } from '../../shared/models/tv';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  tvs!:Tv[]
  page:number = 1;
  lastPage:number = 5;


  constructor(private moviesService:MoviesService){}

  getMostPopular(){
    this.moviesService.getTvList(this.page).subscribe((tv:any)=>{
      console.log(tv);
      this.tvs = tv.results
      this.lastPage = tv.total_pages
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
