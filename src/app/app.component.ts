import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() { }

 

}
