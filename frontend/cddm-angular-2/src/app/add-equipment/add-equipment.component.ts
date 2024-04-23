import { Component,OnInit } from '@angular/core';
import { EquipmentMaster } from '../equipment-master';
import { EquipmentIn } from '../equipment-in';
import { EquipmentId } from '../equipment-id';
import { EquipmentService } from '../equipment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  
  equipment = {
    id: {
      equipmentNo: '',
      equipmentType: '',
      locationOfUse: '',
      plant: '',
      section: ''
    },
    desiredAccuracy: '',
    equipmentDesc: '',
    frequency: '',
    status: '',
    intimitationDays: 0, // Assuming intimitationDays is a number
    lastCalib: new Date(), // Assuming lastCalib is a Date object
    rangeee: '',
    remarks: ''
  };

  constructor(private equipmentService:EquipmentService,private router:Router){}

  ngOnInit(): void {
      
  }
  saveEquipment(){
    this.equipmentService.postEquipment(this.equipment).subscribe(data=>{
      console.log(data);
      this.goToEquipmentList();
    });
  }
  goToEquipmentList(){
    this.router.navigate(['/view']);
  }

  onSubmit(){
    console.log(this.equipment);
    this.saveEquipment();

  }
  isFormValid(): boolean {
    // Check if the required fields are filled
    return !!this.equipment.id.equipmentNo
        && !!this.equipment.id.equipmentType
        && !!this.equipment.id.locationOfUse
        && !!this.equipment.id.plant
        && !!this.equipment.id.section;
  }


}
