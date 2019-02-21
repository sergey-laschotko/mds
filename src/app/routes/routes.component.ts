import { Component, OnInit } from '@angular/core';
import { RoutesService } from "../routes.service";
import { IRoute } from "../service/routes";

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

  validateRoute() {
    return !(this.route.length > 0);
  }

  constructor(private routesService: RoutesService) { }

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
    } else {
      this.current = route;
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
  }

  removeRoute(route: IRoute) {
    this.routesService.deleteRoute(route);
    this.getRoutes();
  }

  editRoute(route: IRoute) {
    this.routesService.editRoute(route);
    this.getRoutes();
  }
}
