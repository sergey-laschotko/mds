import { Component, OnInit } from '@angular/core';
import { DeliveryService } from "../delivery.service";
import { RoutesService } from "../routes.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [RoutesService, DeliveryService]
})
export class ReportComponent implements OnInit {
  report: object;

  constructor(private deliveryService: DeliveryService,
    private routesService: RoutesService) { }

  ngOnInit() {
    this.getReport();
  }

  getReport() {
    this.report = this.deliveryService.getReport();
    console.log(this.report);
    console.log(this.routesService.getRoutes());
  }

  createReport() {
    this.deliveryService.fillService();
    this.getReport();
  }

}
