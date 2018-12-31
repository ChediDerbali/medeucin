import { MedecinService } from './../services/medecin.service';
import {  OnInit, Component } from '@angular/core';


@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})

export class MedecinComponent implements OnInit {

  profilMedecin: any;
  Agenda = [];
  message = '';
  constructor(public medecinService: MedecinService) {
    this.profilMedecin = medecinService.getInfo();
    this.Agenda = medecinService.getAgenda();

  }

  ngOnInit() {
  }

}
