import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  api:string = "https://api.themoviedb.org/3/"        // api
  apiKey:string = "ce83825af7ac1ad3bc4fbc21691602e8"       // Api Key

  constructor(private http:HttpClient) { }

  // Get People List
  getPeopleList(page:number = 1){
    return this.http.get(`${this.api}person/popular?page=${page}&language=en-US&api_key=${this.apiKey}`)
  }

  // Get Person Data
  getPersonData(id:number){
    return this.http.get(`${this.api}person/${id}?language=en-US&api_key=${this.apiKey}`)
  }
}
