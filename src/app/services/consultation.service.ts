import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  cosultationTable = [
    { id: 1, date: new Date, patientID: 1, notes: "figoo ligoo" },
    { id: 2, date: new Date, patientID: 2, notes: "bagouette" },
    { id: 3, date: new Date, patientID: 3, notes: "conesultationne" },
    { id: 4, date: new Date, patientID: 4, notes: "baba sem7" },
  ];
  consultation = { id: null, date: null, patientID: null, notes: "" };
  getConsultation() {
    return this.cosultationTable;
  }
  addConsultation(cons) {
    this.consultation.id = cons.id;
    this.consultation.date = cons.date;
    this.consultation.patientID = cons.patientID;
    this.consultation.notes = cons.notes;
  }
  constructor() { }
}
