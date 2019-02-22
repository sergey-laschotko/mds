import { transliterate as slugify } from "transliteration";

import { genID } from "./service/lib/lib";
import { Injectable } from '@angular/core';
import { IRoute } from "./service/routes";

let routes: IRoute[] = [
  { title: "Витебск", slug: "vitebsk", id: "123456" },
  { title: "Гродно", slug: "grodno", id: "432321" },
  { title: "Гомель", slug: "gomel", id: "332255"}
];


@Injectable()
export class RoutesService {

  constructor() { }

  getRoutes() {
    return routes;
  }

  createRoute(title: string) {
    let route = {
      title: title,
      slug: slugify(title),
      id: genID()
    };

    routes.push(route);
  }

  editRoute(route: IRoute) {
    let filteredRoutes = routes.filter((r: IRoute) => r.id !== route.id);
    filteredRoutes.push(route);
    routes = filteredRoutes;
  }

  deleteRoute(route: IRoute) {
    let filteredRoutes = routes.filter((r: IRoute) => r.id !== route.id);
    routes = filteredRoutes;
  }
}
