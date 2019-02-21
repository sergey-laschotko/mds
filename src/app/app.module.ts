import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { RoutesService } from "./routes.service";
import { AutosService } from "./autos.service";
import { DeliveryService } from "./delivery.service";

import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { HomeComponent } from './home/home.component';
import { AutosComponent } from './autos/autos.component';
import { RoutesComponent } from './routes/routes.component';
import { ReportComponent } from './report/report.component';
import { DeliveryComponent } from './delivery/delivery.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "routes", component: RoutesComponent },
  { path: "autos", component: AutosComponent },
  { path: "report", component: ReportComponent },
  { path: "delivery", component: DeliveryComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutosComponent,
    RoutesComponent,
    ReportComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RoutesService, DeliveryService, AutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
