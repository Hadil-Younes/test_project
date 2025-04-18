import { Component } from '@angular/core';

@Component({
  selector: 'app-sidbare',
  templateUrl: './sidbare.component.html',
  styleUrls: ['./sidbare.component.css']
})
export class SidbareComponent {
  isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
  
}
