export interface Movie{
  backdrop_path:string,
  id:number,
  poster_path:string,
  title:string,
  vote_average:number,
  overview:string,
  tagline:string,
  original_title:string,
  genres:[{
    name:string
  }]
}
