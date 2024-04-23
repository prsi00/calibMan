import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { ViewEquipmentComponent } from './view-equipment/view-equipment.component';
import { CalibrateEquipmentComponent } from './calibrate-equipment/calibrate-equipment.component';

const routes: Routes = [
  {path:"view",component:EquipmentListComponent},
  {path:"add",component:AddEquipmentComponent},
  {path:"update",component:UpdateEquipmentComponent},
  {path:"",redirectTo:"",pathMatch:"full"},
  {path:"show",component:ViewEquipmentComponent},
  {path:"calibrate",component:CalibrateEquipmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
