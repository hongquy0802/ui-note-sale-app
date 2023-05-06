import { Component, OnInit } from '@angular/core';
import { sourceData } from 'src/app/model/source.model';
import { statusData } from 'src/app/model/status.model';

@Component({
  selector: 'app-inquiry-dashboard',
  templateUrl: './inquiry-dashboard.component.html',
  styleUrls: ['./inquiry-dashboard.component.scss']
})
export class InquiryDashboardComponent implements OnInit {
  sourceList = sourceData;
  statusList = statusData;
  param = {
    name: '',
    mobile: '',
    source: '',
    status: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
