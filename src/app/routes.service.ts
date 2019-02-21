import { transliterate as slugify } from "transliteration";

import { genID } from "./service/lib/lib";
import { Injectable } from '@angular/core';
import { IRoute } from "./service/routes";


@Injectable()
export class RoutesService {
  routes: IRoute[] = [];

  constructor() { }

  getRoutes() {
    return this.routes;
  }

  createRoute(title: string) {
    let route = {
      title: title,
      slug: slugify(title),
      id: genID()
    };

    this.routes.push(route);
  }

  editRoute(route: IRoute) {
    let filteredRoutes = this.routes.filter((r: IRoute) => r.id !== route.id);
    filteredRoutes.push(route);
    this.routes = filteredRoutes;
  }

  deleteRoute(route: IRoute) {
    let filteredRoutes = this.routes.filter((r: IRoute) => r.id !== route.id);
    this.routes = filteredRoutes;
  }
}
