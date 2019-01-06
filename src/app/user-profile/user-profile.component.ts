import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'app/services/medecin.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profilMedecin: any;
  Agenda = [];
  modalRef: NgbModalRef;
  message = '';
  constructor(public medecinService: MedecinService, private modalService: NgbModal) {
    this.profilMedecin = medecinService.getInfo();
    this.Agenda = medecinService.getAgenda();

  }
  ngOnInit() {
  }
  open(content) {
    this.modalRef = this.modalService.open(content, { centered: true, size: 'lg' });
  }
  close() {
    this.modalRef.close('');
  }
}
