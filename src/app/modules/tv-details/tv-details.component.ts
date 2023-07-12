import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../../core/services/movies.service';
import { Tv } from '../../shared/models/tv';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {
  url:string = 'https://image.tmdb.org/t/p/w500//'
  id!:number
  data!:Tv
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
  constructor(private route:ActivatedRoute,private moviesService:MoviesService){
    this.route.params.subscribe(params => {
      //console.log(params['id']) //log the value of id
      this.id = parseInt(params['id'])
    });
  }

  // Get Movie Details
  getMovieDetails(){
    this.moviesService.getTvDetails(this.id).subscribe((tv:any)=>{
      this.data = tv
      console.log(tv);

    },(error)=>{console.log(error);
    })
  }

  ngOnInit(): void {
    this.getMovieDetails()
  }
}
