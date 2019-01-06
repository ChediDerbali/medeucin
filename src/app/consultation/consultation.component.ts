import { Component, OnInit } from '@angular/core';
import { ConsultationService } from 'app/services/consultation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  consTable = [];
  constructor(public consultationService: ConsultationService) {
    this.consTable = consultationService.getConsultation();
    console.log(this.consTable);
  }

  ngOnInit() {

  }

}
