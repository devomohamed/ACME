
export interface Person{
  adult:boolean,
  gender:number,
  id:number,
  known_for_department:string,
  place_of_birth:string,
  birthday:string,
  biography:string,
  name:string,
  profile_path:string
  known_for:[{
    first_air_date:string
  }]
}
