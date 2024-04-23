import { EquipmentId } from './equipment-id';

export class EquipmentMaster {
  
    id: EquipmentId;
    equipmentDesc: string;
    rangeee: string;
    desiredAccuracy: string;
    frequency: string;
    lastCalib: Date;
    intimitationDays: number;
    dueDate: Date;
    status: string;
    remarks: string;
  
}
