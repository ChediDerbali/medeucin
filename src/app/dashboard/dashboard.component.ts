import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ConsultationService } from 'app/services/consultation.service';
import { Consultation } from 'app/models/consultation';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  consTable = [];
  consultationPatient: Consultation;
  consultationMod = new Consultation();
  modalRef: NgbModalRef;
  modIndex: number;
  constructor(public consultationService: ConsultationService, private modalService: NgbModal) {
    this.consTable = consultationService.getConsultation();
    console.log(this.consTable);
  }

  ngOnInit() {

  }
  open(content, i) {
    this.modalRef = this.modalService.open(content, { centered: true, size: 'lg' });
    this.modIndex = i;
    console.log(i);
  }
  close() {
    this.modalRef.close('');
  }
  validate(i) {
    this.consultationService.setConsultation(this.consultationMod, i);
    this.consTable = this.consultationService.getConsultation();
    this.consultationMod = new Consultation();
    this.close();
  }

}


