import { Component, Input } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  url:string = 'https://image.tmdb.org/t/p/w500//'
  @Input() person!:Person
}
