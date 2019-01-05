import { Medecin } from './../models/medecin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  Agenda = [];
  profilMedecin: Medecin;
  recl = { date: null, message: '' };



  constructor() { }

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
