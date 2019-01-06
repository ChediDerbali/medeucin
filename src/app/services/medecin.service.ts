
import { Injectable } from '@angular/core';
import { Medecin } from 'app/models/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  Agenda = [];
  profilMedecin: Medecin;
  recl = { date: null, message: '' };



  constructor() {
    this.profilMedecin = new Medecin();
    this.profilMedecin.nom = 'zweri';
    this.profilMedecin.prenom = 'moez';
    this.profilMedecin.datenaissance = new Date();
    this.profilMedecin.email = 'moez@mail.com';
    this.profilMedecin.publicCode = 10000;
    this.profilMedecin.type = 'specialist';
    this.profilMedecin.specialite = 'b3abes et pouments';

  }

  getInfo() {
    return (this.profilMedecin);
  }

  getAgenda() {
    return this.Agenda;
  }
  onadd(msg) {
    this.recl.date = new Date();
    this.recl.message = msg;
    this.Agenda.push(this.recl);
    this.recl = { date: null, message: '' };
  }

}
