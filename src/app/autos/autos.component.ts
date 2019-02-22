import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material";
import { MatTableDataSource } from "@angular/material";
import { genID } from "../service/lib/lib";

import { AutosService, IAuto } from "../autos.service";

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css'],
  providers: [AutosService]
})
export class AutosComponent implements OnInit {
  autos: any = [];
  gotAutos: boolean = false;
  autoOptions = [
    { value: "truck", viewValue: "Грузовик" },
    { value: "car", viewValue: "Легковая" }
  ];
  auto = {
    car: "",
    driver: "",
    phone: ""
  };
  showInput: boolean = false;
  current: any = {};
  displayedColumns = ["driver", "phone", "car"];

  constructor(private routesService: AutosService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAutos();
  }

  toggleForm() {
    this.showInput = !this.showInput;
    this.auto = {
      car: "",
      driver: "",
      phone: ""
    }
  }

  validate() {
    return !(this.auto.driver.length !== 0 && this.auto.phone.length !== 0 && this.auto.car.length !== 0);
  }

  makeCurrent(auto: any) {
    if (this.current.id === auto.id) {
      this.current = {};
    } else {
      this.current = auto;
    }
  }

  isCurrent(input: any) {
    return this.current.id === input.id;
  }

  onEdit(element: any) {
    this.auto = element;
  }

  getAutos() {
    this.autos = this.routesService.getAutos();
    this.autos = new MatTableDataSource(this.autos);
    if (this.autos.filteredData.length > 0) {
      this.gotAutos = true;
    }
  }

  postAuto(auto: any) {
    let newAuto = auto;
    newAuto.id = genID();

    this.routesService.addAuto(newAuto);
    this.getAutos();
    this.snackBar.open("Авто добавлен", "", {
      duration: 3000
    });
    this.auto = {
      driver: "",
      car: "",
      phone: ""
    };
    this.toggleForm();
  }

  updateAuto(auto: IAuto) {
    this.routesService.updateAuto(auto);
    this.getAutos();
    this.snackBar.open("Авто обновлен", "", {
      duration: 3000
    });
    this.current = {};
  }

  deleteAuto(auto: IAuto) {
    this.routesService.deleteAuto(auto);
    this.getAutos();
    this.snackBar.open("Авто удален", "", {
      duration: 3000
    });
  }

}
