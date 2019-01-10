import { Component, OnInit } from '@angular/core';
import { ConsultationService } from 'app/services/consultation.service';
import { Consultation } from 'app/models/consultation';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  consTable = [];
  cons: Consultation;
  consultationMod = new Consultation();
  consultationAdd = new Consultation();
  modalRef: NgbModalRef;
  modindex: number;

  constructor(public consultationService: ConsultationService, private modalService: NgbModal) {
    this.consTable = consultationService.getConsultation();
    console.log(this.consTable);
  }

  ngOnInit() {

  }
  open(content, i) {
    this.modalRef = this.modalService.open(content, { centered: true, size: 'lg' });
    this.modindex = i;
  }
  close() {
    this.modalRef.close('');
  }
  validate(i) {
    this.consultationService.setConsultation(this.consultationMod, i);
    console.log(this.consultationMod);
    this.consTable = this.consultationService.getConsultation();
    this.consultationMod = new Consultation();
    this.close();
  }
  openNewCons(contentNew){
    this.modalRef = this.modalService.open(contentNew, { centered: true, size: 'lg' });
  }
  addNeWConsultation() {
    this.consultationService.addConsultation(this.consultationAdd);
    console.log(this.consultationAdd);
    this.consTable = this.consultationService.getConsultation();
    this.consultationAdd = new Consultation();
    this.close();
  }

}
