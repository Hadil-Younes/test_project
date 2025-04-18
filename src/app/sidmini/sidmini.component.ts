import { Component } from '@angular/core';

@Component({
  selector: 'app-sidmini',
  templateUrl: './sidmini.component.html',
  styleUrls: ['./sidmini.component.css']
})
export class SidminiComponent {
  showDropdown: boolean = false;
  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
}
}
