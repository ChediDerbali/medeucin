import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients = [
    { id: 1, nom: 'moez1', prenom: 'zouari1', datenaissance: new Date, tel: 111111, email: 'mo@1.com', CNAM: 111 },
    { id: 2, nom: 'moez2', prenom: 'zouari2', datenaissance: new Date, tel: 222222, email: 'mo@2.com', CNAM: 222 },
    { id: 3, nom: 'moez3', prenom: 'zouari3', datenaissance: new Date, tel: 333333, email: 'mo@3.com', CNAM: 333 },
    { id: 4, nom: 'moez4', prenom: 'zouari4', datenaissance: new Date, tel: 444444, email: 'mo@4.com', CNAM: 444 },
    { id: 5, nom: 'moez5', prenom: 'zouari5', datenaissance: new Date, tel: 555555, email: 'mo@5.com', CNAM: 555 },
  ];
  patient = { id: null, nom: '', prenom: '', datenaissance: null, tel: null, email: '', CNAM: null };

  getPatient() {
    return this.patients;
  }
  /** */
  addPatient(p) {
    this.patient.id = p.id;
    this.patient.nom = p.nom;
    this.patient.prenom = p.prenom;
    this.patient.datenaissance = p.date;
    this.patient.tel = p.tel;
    this.patient.CNAM = p.CNAM;
    this.patients.push(this.patient)
    this.patient = { id: null, nom: '', prenom: '', datenaissance: null, tel: null, email: '', CNAM: null };


  }
  constructor(private http: HttpClient) { }


  getPatientById(id: string) {
    return this.http.get('')
  }
  deletePatientById(id) {
    for (let i = 0; i < this.patients.length; ++i) {
      if (this.patients[i].id === id) {
        this.patients.splice(i, 1);

      }
    }
  }
}
