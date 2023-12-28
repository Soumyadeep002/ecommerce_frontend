import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  PhNo = "+0000000000"
  gamil ="rrrrrrr@gmail.com"

  isDropdownOpen: boolean =false;
  
  
  toggleDropdown() {
    this.isDropdownOpen = this.isDropdownOpen = ! this.isDropdownOpen;
    console.log(this.isDropdownOpen)
  }
  

}
// console.log()
