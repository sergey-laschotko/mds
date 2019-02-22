import { Injectable } from '@angular/core';
import { genID } from "./service/lib/lib";

export interface IAuto {
  driver: string;
  car: string,
  phone: string,
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  autos: IAuto[] = [];

  constructor() { }

  getAutos() {
    return this.autos;
  }

  addAuto(auto: IAuto) {
    this.autos.push(auto);
  }

  updateAuto(auto: IAuto) {
    let filteredAutos = this.autos.filter(a => a.id !== auto.id);
    filteredAutos.push(auto);
    this.autos = filteredAutos;
  }

  deleteAuto(auto: IAuto) {
    let filteredAutos = this.autos.filter(a => a.id !== auto.id);
    this.autos = filteredAutos;
  }
}
