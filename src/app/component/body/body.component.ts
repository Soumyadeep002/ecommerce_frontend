import { CUSTOM_ELEMENTS_SCHEMA,Component } from '@angular/core';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class BodyComponent {

}
