import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentMaster } from './equipment-master';
import { EquipmentIn } from './equipment-in';
import { EquipmentId } from './equipment-id';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private baseURL="http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { 

  }

  getEquipmentList():Observable<EquipmentMaster[]>{
    let finalUrl=this.baseURL+"viewAll";
    return this.httpClient.get<EquipmentMaster[]>(finalUrl);
  }
  postEquipment(equipment:EquipmentIn):Observable<Object>{
    let finalUrl=this.baseURL+"addEquipment";
    return this.httpClient.post(finalUrl,equipment);
  }

  getEquipmentById(id:EquipmentId):Observable<EquipmentMaster>{
    
      let finalUrl = `${this.baseURL}findById/${id.plant}/${id.section}/${id.locationOfUse}/${id.equipmentNo}/${id.equipmentType}`;
      
    
    return this.httpClient.get<EquipmentMaster>(finalUrl);
  }
  deleteEquipment(id:EquipmentId):Observable<Object>{
    let finalUrl = `${this.baseURL}delete/${id.plant}/${id.section}/${id.locationOfUse}/${id.equipmentNo}/${id.equipmentType}`;
    return this.httpClient.delete(finalUrl);
  }
}
