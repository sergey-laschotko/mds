import { Component, OnInit } from '@angular/core';
import { RoutesService } from "../routes.service";
import { IRoute } from "../service/routes";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
  providers: [RoutesService]
})
export class RoutesComponent implements OnInit {
  routes: IRoute[] = [];
  route: string = "";
  current: IRoute = {
    id: "",
    title: "",
    slug: ""
  };
  editingMode: boolean = false;

  validateRoute() {
    return !(this.route.length > 0);
  }

  constructor(private routesService: RoutesService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getRoutes();
  }

  makeCurrent(route: IRoute) {
    if (this.current.id.length > 0) {
      this.current = {
        id: "",
        title: "",
        slug: ""
      };
      this.editingMode = false;
    } else {
      this.current = route;
      this.editingMode = true;
    }
  }

  isCurrent(route) {
    return this.current.id === route.id;
  }

  getRoutes() {
    this.routes = this.routesService.getRoutes();
  }

  addRoute(title: string) {
    this.routesService.createRoute(title);
    this.route = "";
    this.getRoutes();
    this.snackBar.open("Маршрут добавлен", "", {
      duration: 3000
    })
  }

  removeRoute(route: IRoute) {
    this.routesService.deleteRoute(route);
    this.getRoutes();
    this.snackBar.open("Маршрут удален", "" ,{
      duration: 3000
    });
  }

  editRoute(route: IRoute) {
    this.routesService.editRoute(route);
    this.getRoutes();
    this.snackBar.open("Маршрут обновлен", "", {
      duration: 3000
    });
  }
}
