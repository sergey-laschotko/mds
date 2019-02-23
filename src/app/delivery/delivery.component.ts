import { Component, OnInit } from '@angular/core';
import { DeliveryService } from "../delivery.service";
import { IReport } from '../service/delivery-manager';
import { MatDialog } from "@angular/material";
import { CarInnerComponent } from "../carInner/carInner.component";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  report: IReport = null;
  setting = null;
  formattedSetting = [];

  constructor(private deliveryService: DeliveryService, private carDialog: MatDialog) { }

  ngOnInit() {
    this.getReport();
    this.getSetting();
  }

  getReport() {
    this.report = this.deliveryService.getReport();
  }

  getSetting() {
    this.setting = this.deliveryService.getSetting();
    this.formattedSetting = this.formatSetting();
  }

  formatSetting() {
    let settingArray = [];

    if (this.setting) {

      for (let key in this.setting) {
        settingArray.push(this.setting[key]);
      }

    }
    
    return settingArray;
  }

  showModal(car: any) {
    let ids = car.goods.map((good: any) => {
      return good.id;
    });
    
    this.carDialog.open(CarInnerComponent, {
      width: "600px",
      height: "400px",
      data: ids
    });
  }
}
