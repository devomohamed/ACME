import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

  api:string = "https://api.themoviedb.org/3/"        // api
  apiKey:string = "ce83825af7ac1ad3bc4fbc21691602e8"       // Api Key

  constructor(private http:HttpClient) { }

  // Get Most Popular Movies
  getMostPopularMovies(page:number = 1){
    return this.http.get(`${this.api}movie/popular?page=${page}&api_key=${this.apiKey}`)
  }


  // Get Movie Details
  getMovieDetails(id:number){
    return this.http.get(`${this.api}movie/${id}?&language=en-US&api_key=${this.apiKey}`)
  }


  // Get Tv List
  getTvList(page:number = 1){
    return this.http.get(`${this.api}tv/popular?page=${page}&language=en-US&api_key=${this.apiKey}`)
  }
  // Get tv Details
  getTvDetails(id:number){
    return this.http.get(`${this.api}tv/${id}?language=en-US&api_key=${this.apiKey}`)
  }

  // Get Movies Created By Actor
  getMovieCredits(id:any){
    return this.http.get(`${this.api}person/${id}/movie_credits?language=en-US&api_key=${this.apiKey}`)
  }

  // Get Movies Created By Actor
  getSimilarMovies(id:any){
    return this.http.get(`${this.api}movie/${id}/similar?language=en-US&api_key=${this.apiKey}`)
  }


}
