import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'app/services/medecin.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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
