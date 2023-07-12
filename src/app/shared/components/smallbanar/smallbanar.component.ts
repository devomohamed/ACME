import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smallbanar',
  templateUrl: './smallbanar.component.html',
  styleUrls: ['./smallbanar.component.scss']
})
export class SmallbanarComponent {
  @Input() image!:string
  @Input() title!:string
}
