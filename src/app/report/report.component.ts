import { Component, OnInit, ViewChild } from '@angular/core';
import { IReport } from "../service/delivery-manager";
import { IRoute } from "../service/routes";
import { DeliveryService } from "../delivery.service";
import { RoutesService } from "../routes.service";
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [RoutesService, DeliveryService]
})
export class ReportComponent implements OnInit {
  report: IReport = null;
  formattedData: object[];
  routes: IRoute[] = [];
  dataSource = null;
  displayedColumns: string[] = [
    "route", 
    "largePackages", 
    "largePackagesKG", 
    "smallPackages", 
    "smallPackagesKG", 
    "totalKG", 
    "totalPackages"
  ];

  constructor(
    private deliveryService: DeliveryService,
    private routesService: RoutesService
  ) {}

  ngOnInit() {
    this.getReport();
  }

  getReport() {
    this.report = this.deliveryService.getReport();
    this.routes = this.routesService.getRoutes();
    this.formattedData = this.formatData();
    this.dataSource = new MatTableDataSource(this.formattedData);
  }

  formatData() {
    let arrayReport: object[] = [];
    if (this.report.packagesByRoutes) {
      for (let key in this.report.packagesByRoutes) {
        arrayReport.push(this.report.packagesByRoutes[key]);
      }
      arrayReport.forEach((item: any) => {
        item.route = item.route.title;
      });
    }
    return arrayReport;
  }

  createReport() {
    this.deliveryService.fillService();
    this.getReport();
  }

  deleteReport() {
    this.deliveryService.deleteReport();
    this.getReport();
  }
}
