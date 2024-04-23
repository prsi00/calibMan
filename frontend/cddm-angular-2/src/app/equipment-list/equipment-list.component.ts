import { Component, OnInit } from '@angular/core';
import { EquipmentMaster } from '../equipment-master';
import { EquipmentService } from '../equipment.service';
import { EquipmentId } from '../equipment-id';
import { Router } from '@angular/router';


@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit{

  equipments: EquipmentMaster[];

  constructor(private equipmentService:EquipmentService,private router:Router){

  }
  ngOnInit():void{
    this.getEquipment();
  }
  private getEquipment(){
    this.equipmentService.getEquipmentList().subscribe(data => {
      this.equipments=data; 
    });
  }
  updateEquipment(equipmentID:EquipmentId){
    this.router.navigate(['update',equipmentID]);

  }
  viewEquipment(equipmentID:EquipmentId){
    this.router.navigate(['show',equipmentID]);

  }
  deleteEquipment(equimentID:EquipmentId){
    this.equipmentService.deleteEquipment(equimentID).subscribe(data=>{
      console.log(data);
      this.getEquipment();
    })
  }
  calibrateEquipment(equipmentID:EquipmentId){
    this.router.navigate(['calibrate',equipmentID]);
  }

}
