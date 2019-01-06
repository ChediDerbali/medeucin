import { MedecinService } from './../services/medecin.service';
import { OnInit, Component } from '@angular/core';
import { Medecin } from '../models/medecin';


@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})

export class MedecinComponent implements OnInit {

  profilMedecin: Medecin;
  profilMod = new Medecin();
  message = '';
  constructor(public medecinService: MedecinService) {

    this.profilMedecin = medecinService.getInfo();

  }

  ngOnInit() {
  }

}
