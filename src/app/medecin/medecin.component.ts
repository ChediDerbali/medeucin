import { MedecinService } from './../services/medecin.service';
import { OnInit, Component } from '@angular/core';
import { Medecin } from '../models/medecin';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})

export class MedecinComponent implements OnInit {

  profilMedecin: Medecin;
  profilMod = new Medecin();
  message = '';
  modalRef: NgbModalRef;
  constructor(public medecinService: MedecinService, private modalService: NgbModal) {

    this.profilMedecin = medecinService.getInfo();

  }

  ngOnInit() {
  }

  open(content) {
    this.modalRef = this.modalService.open(content, { centered: true, size: 'lg' });
  }
  close() {
    this.modalRef.close('');
  }
  validate() {
    this.medecinService.setProfil(this.profilMod);
    console.log(this.profilMod);
    this.profilMedecin = this.medecinService.getInfo();
    this.profilMod = new Medecin();
    this.close();
  }
}
