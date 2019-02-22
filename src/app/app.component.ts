import { Component } from '@angular/core';
import { RoutesService } from "./routes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen: boolean = false;

  constructor(private routesService: RoutesService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
