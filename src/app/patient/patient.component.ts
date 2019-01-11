import { Component, OnInit } from '@angular/core';
import { PatientService } from 'app/services/patient.service';
import { Patient } from 'app/models/patient';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  table: any;
  profilePatient: Patient;
  patientMod = new Patient();
  patientAdd = new Patient();
  modalRef: NgbModalRef;
  modindex: number;
  constructor(public patientService: PatientService, private modalService: NgbModal) {
  }

  ngOnInit() {this.patientService.getPatient()
    .subscribe( data => {
      this.table = data;
    });
};
  open(content, i) {
    this.modalRef = this.modalService.open(content, { centered: true, size: 'lg' });
    this.modindex = i;
    console.log(i);
  }
  openNew(contentNew) {
    this.modalRef = this.modalService.open(contentNew, { centered: true, size: 'lg' });
  }
  close() {
    this.modalRef.close('');
  }
  validate(i) {
    this.patientService.setPatient(this.patientMod, i);
    console.log(this.patientMod);
    this.table = this.patientService.getPatient();
    this.patientMod = new Patient();
    this.close();
  }
  addPatient() {
    this.patientService.addPatient(this.patientAdd);
    console.log(this.patientAdd);
    this.patientAdd = new Patient();
    //this.table = this.patientService.getPatient();
    this.close();


  }

}
