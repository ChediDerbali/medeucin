import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  table = [];


  constructor(public patientService: PatientService) {
    this.table = patientService.getPatient();
    console.log(this.table);
  }

  ngOnInit() {
  }

}
