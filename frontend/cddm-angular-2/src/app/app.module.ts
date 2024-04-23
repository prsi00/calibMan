import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { ViewEquipmentComponent } from './view-equipment/view-equipment.component';
import { CalibrateEquipmentComponent } from './calibrate-equipment/calibrate-equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentListComponent,
    AddEquipmentComponent,
    UpdateEquipmentComponent,
    ViewEquipmentComponent,
    CalibrateEquipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
