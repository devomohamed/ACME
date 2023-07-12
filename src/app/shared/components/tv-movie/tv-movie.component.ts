import { Component, Input } from '@angular/core';
import { Tv } from '../../models/tv';

@Component({
  selector: 'app-tv-movie',
  templateUrl: './tv-movie.component.html',
  styleUrls: ['./tv-movie.component.scss']
})
export class TvMovieComponent {
  url:string = 'https://image.tmdb.org/t/p/w500//'
  @Input() tv!:Tv
}
