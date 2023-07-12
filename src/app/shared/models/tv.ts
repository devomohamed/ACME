export interface Tv{
  name:string,
  vote_average:number,
  poster_path:string,
  id:number,
  first_air_date:string,
  backdrop_path:string,
  genres:[{
    name:string
  }],
  original_name:string,
  overview:string,
  tagline:string
}
