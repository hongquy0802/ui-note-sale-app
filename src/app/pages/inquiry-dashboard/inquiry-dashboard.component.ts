import { Component, OnInit } from '@angular/core';
import { sourceData } from 'src/app/model/source.model';
import { statusData } from 'src/app/model/status.model';
import { CustomerService } from 'src/app/services/customer.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-inquiry-dashboard',
  templateUrl: './inquiry-dashboard.component.html',
  styleUrls: ['./inquiry-dashboard.component.scss']
})
export class InquiryDashboardComponent implements OnInit {
  sourceList = sourceData;
  statusList = statusData;
  userList: any = [];
  param = {
    name: '',
    mobile: '',
    source: '',
    status: ''
  }
  constructor(
    private customerService: CustomerService,
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  resetForm() {
    this.param = {
      name: '',
      mobile: '',
      source: '',
      status: ''
    }
  }

  getAll() {
    this.db.object('/customers').valueChanges().subscribe(data => {
      console.log(data);
      if (data) {
        this.userList = data;
      }
    });
  }

  search() {
    const params = {
      name: this.param.name ? this.param.name : null,
      mobile: this.param.mobile ? this.param.mobile : null,
      source: this.param.source ? this.param.source : null,
      status: this.param.status ? this.param.status : null,
    }
    console.log(params);
    this.db.object('/customers').valueChanges().subscribe(data => {
      console.log(data);
      if (data) {
        this.userList = data;
        if (params.name || params.mobile || params.source || params.status) {
          this.userList = this.userList.filter((element : any) => element.customerinfo.fullName === params.name || element.customerinfo.mobile === params.mobile || element.customerinfo.source === params.source || element.customerinfo.status === params.status);
        }
      }
    });
    
    console.log(this.userList);
    
  }

  removeUser(user: any) {
    console.log(user);
    
  }

  openInfoCustomer(info: any, id: any) {
    console.log(info);
    console.log('id ' + id);
    
    this.customerService.sendData(info, id);
  }
}
