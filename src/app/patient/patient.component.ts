import { Component, OnInit } from '@angular/core';
import { PatientService } from 'app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  table = [];


  constructor(public patientService: PatientService) {
    this.table = patientService.getPatient();
  }

  ngOnInit() {
  }

}
