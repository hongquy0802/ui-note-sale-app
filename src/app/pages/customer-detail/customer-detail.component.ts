import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { favouriteData } from "src/app/model/favourite.model";
import { sourceData } from "src/app/model/source.model";
import { statusData } from "src/app/model/status.model";
import { CustomerService } from "src/app/services/customer.service";

@Component({
    selector: 'app-customer-detail',
    templateUrl: './customer-detail.component.html',
    styleUrls: ['./customer-detail.component.scss']
  })
  export class CustomerDetailComponent implements OnInit {
    sourceList = sourceData;
    statusList = statusData;
    favouriteList = favouriteData;
    isEdited = false;
    customerInfo: any = {};
    id = '';
    constructor(
        private fb: FormBuilder,
        private customerService: CustomerService,
        private db: AngularFireDatabase,
        private router: Router) {
        this.customerInfo = this.customerService.dataTranfer.getValue().info;
        this.id = '' + this.customerService.dataTranfer.getValue().id;
    }

    editForm!: FormGroup;
    ngOnInit(): void {
        this.editCustomerForm();
    }

    onSelectEdit() {
        this.isEdited = true;
    }

    editCustomerForm() {
        this.editForm = this.fb.group({
            name: [this.customerInfo.fullName ? this.customerInfo.fullName : ''],
            email: [this.customerInfo.email ? this.customerInfo.email : '', Validators.compose([Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
            mobile: [this.customerInfo.phone ? this.customerInfo.phone : '', Validators.compose([Validators.maxLength(11), Validators.pattern('^[0-9]+$')])],
            address: [this.customerInfo.address ? this.customerInfo.address : ''],
            source: [this.customerInfo.source ? this.customerInfo.source : ''],
            status: [this.customerInfo.status ? this.customerInfo.status : ''],
            favourite: [this.customerInfo.favourite ? this.customerInfo.favourite : ''],
            note: [this.customerInfo.note ? this.customerInfo.note : ''],
        });
    }

    get f() { return this.editForm.controls; }

    
    editFormSubmit() {
        const updatedItem = {
            address: this.editForm.controls.address.value,
            email: this.editForm.controls.email.value,
            favourite: this.editForm.controls.favourite.value,
            fullName: this.editForm.controls.name.value,
            note: this.editForm.controls.note.value,
            phone: this.editForm.controls.mobile.value,
            source: this.editForm.controls.source.value,
            status: this.editForm.controls.status.value,
        }
        this.db.object(`/customers/${this.id}/customerinfo`).update(updatedItem)
        .then(() => {
          console.log('Item updated successfully');
          alert("'Item updated successfully'");
          this.router.navigate(['/inquiry'])
        })
        .catch((error) => {
          console.error('Error updating item:', error);
        });
    }

    cancelEdit() {
        this.isEdited = false;
    }
  }