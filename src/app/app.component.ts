import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen: boolean = false;

  routes = [];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
