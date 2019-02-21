import { NgModule } from "@angular/core";

import { MatCheckboxModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
    imports: [
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatListModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        DragDropModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatListModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        DragDropModule,
        MatFormFieldModule,
        MatInputModule,
    ]
})
export class MaterialModule {}