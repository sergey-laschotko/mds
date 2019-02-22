import { Injectable } from '@angular/core';
import { SimulateOrderAccepter } from "./service/order-accepter";
import { DeliveryManager } from "./service/delivery-manager";
import { RoutesService } from "./routes.service";

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  accepter: SimulateOrderAccepter;
  manager: DeliveryManager;
  orders = [];
  report: object = {};
  setting: object;


  constructor(private routesService: RoutesService) {
  }

  fillService() {
    this.accepter = new SimulateOrderAccepter(this.routesService.getRoutes());
    this.accepter.simulateDay(2000);
    this.orders = this.accepter.transferOrders();
    this.manager = new DeliveryManager(this.routesService.getRoutes());
    this.manager.takeOrders(this.orders);
    this.report = this.manager.getReport();
    this.setting = this.manager.setToAutos();
  }

  getReport() {
    return this.report;
  }

  getSetting() {
    return this.setting;
  }

  deleteReport() {
    this.report = {};
    this.setting = {};
  }
}
