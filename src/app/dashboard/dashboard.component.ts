import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ConsultationService } from 'app/services/consultation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  consTable = [];
  constructor(public consultationService: ConsultationService) {
    this.consTable = consultationService.getConsultation();
    console.log(this.consTable);
  }

  ngOnInit() {

  }


}


