import { Component,OnInit } from '@angular/core';
import { EquipmentMaster } from '../equipment-master';
import { EquipmentService } from '../equipment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentId } from '../equipment-id';

@Component({
  selector: 'app-view-equipment',
  templateUrl: './view-equipment.component.html',
  styleUrls: ['./view-equipment.component.css']
})
export class ViewEquipmentComponent implements OnInit {


  equipment:EquipmentMaster = new EquipmentMaster();
  id:EquipmentId;
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




}
