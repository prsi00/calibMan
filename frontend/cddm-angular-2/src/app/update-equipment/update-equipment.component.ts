import { Component,OnInit } from '@angular/core';
import { EquipmentService } from '../equipment.service';
import { EquipmentMaster } from '../equipment-master';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentId } from '../equipment-id';

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.css']
})
export class UpdateEquipmentComponent implements OnInit {
  id:EquipmentId;

  equipment:EquipmentMaster=new EquipmentMaster();

  constructor(private equipmentService:EquipmentService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Extract parameters from the URL
      const plant = params.get('plant');
      const section = params.get('section');
      const locationOfUse = params.get('locationOfUse');
      const equipmentNo = params.get('equipmentNo');
      const equipmentType = params.get('equipmentType');

      // Create the EquipmentId JSON object
      this.id = {
        plant,
        section,
        locationOfUse,
        equipmentNo,
        equipmentType
      };

      this.equipmentService.getEquipmentById(this.id).subscribe(data=>{
        this.equipment=data;
      });
    });

    
      
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

}
