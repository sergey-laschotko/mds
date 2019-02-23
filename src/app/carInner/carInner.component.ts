import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-modal',
  templateUrl: './carInner.component.html',
  styleUrls: ['./carInner.component.css']
})
export class CarInnerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CarInnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]
  ) {
  }

  ngOnInit() {
  }

}
