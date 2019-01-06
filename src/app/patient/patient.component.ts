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

  table = [];
  profilePatient: Patient;
  patientMod = new Patient();
  modalRef : NgbModalRef;
  modindex: number;
  constructor(public patientService: PatientService, private modalService: NgbModal ) {
    this.table = patientService.getPatient();
  }

  ngOnInit() {
  }
  open(content,i) {
    this.modalRef = this.modalService.open(content, { centered: true, size: 'lg' });
    this.modindex=i;
    console.log(i);
  }
  close() {
    this.modalRef.close('');
  }
  validate(i) {
    this.patientService.setPatient(this.patientMod,i);
    console.log(this.patientMod);
    this.table = this.patientService.getPatient();
    this.patientMod = new Patient();
    this.close();
  }
}
