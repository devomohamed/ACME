import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private fb:FormBuilder){}

  contactForm = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.minLength(3),Validators.email]],
    message:['',[Validators.minLength(20)]],
  })

  sendData(){
    console.log(this.contactForm.value);

  }

}
