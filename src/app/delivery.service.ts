import { Injectable } from '@angular/core';
import { IReport } from "./service/delivery-manager";
import { SimulateOrderAccepter } from "./service/order-accepter";
import { DeliveryManager } from "./service/delivery-manager";
import { RoutesService } from "./routes.service";

let orders = [];
let report: IReport = {
  totalOrders: 0,
  totalKG: 0,
  totalSPackages: 0,
  totalLPackages: 0,
  totalSPackagesKG: 0,
  totalLPackagesKG: 0,
  packagesByRoutes: null
};
let setting: object;

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  accepter: SimulateOrderAccepter;
  manager: DeliveryManager;


  constructor(private routesService: RoutesService) {
    this.routesService.getRoutes();
  }

  fillService() {
    this.accepter = new SimulateOrderAccepter(this.routesService.getRoutes());
    this.accepter.simulateDay(2000);
    orders = this.accepter.transferOrders();
    this.manager = new DeliveryManager(this.routesService.getRoutes());
    this.manager.takeOrders(orders);
    report = this.manager.getReport();
    setting = this.manager.setToAutos();
  }

  getReport() {
    return report;
  }

  getSetting() {
    return setting;
  }

  deleteReport() {
    report = {
      totalOrders: 0,
      totalKG: 0,
      totalSPackages: 0,
      totalLPackages: 0,
      totalSPackagesKG: 0,
      totalLPackagesKG: 0,
      packagesByRoutes: null
    };
    setting = {};
  }
}
