import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { favouriteData } from 'src/app/model/favourite.model';
import { sourceData } from 'src/app/model/source.model';
import { statusData } from 'src/app/model/status.model';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
  sourceList = sourceData;
  statusList = statusData;
  favouriteList = favouriteData;
  userList: any = [];

  registerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
    this.getAll();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: [''],
      email: ['', Validators.compose([Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      mobile: ['', Validators.compose([Validators.maxLength(11), Validators.pattern('^[0-9]+$')])],
      address: [''],
      source: [''],
      status: [''],
      favourite: [''],
      note: [''],
    });
  }

  getAll() {
    this.db.object('/customers').valueChanges().subscribe(data => {
      console.log(data);
      if (data) {
        this.userList = data;
      }
    });
  }

  get f() { return this.registerForm.controls; }

  registerFormSubmit() {
    const customerinfo = {
      fullName: this.registerForm.controls.name.value ? this.registerForm.controls.name.value : null,
      email: this.registerForm.controls.email.value ? this.registerForm.controls.email.value : null,
      phone: this.registerForm.controls.mobile.value ? this.registerForm.controls.mobile.value : null,
      address: this.registerForm.controls.address.value ? this.registerForm.controls.address.value : null,
      source: this.registerForm.controls.source.value ? this.registerForm.controls.source.value : null,
      status: this.registerForm.controls.status.value ? this.registerForm.controls.status.value : null,
      favourite: this.registerForm.controls.favourite.value ? this.registerForm.controls.favourite.value : null,
      note: this.registerForm.controls.note.value ? this.registerForm.controls.note.value : null,
    };

    if (this.registerForm.invalid) {
      UIService.fireValidateForm(this.registerForm);
      return;
    }

    if (!this.registerForm.invalid) {
      let numberItem = this.userList.length;
      this.db.object('/customers/'+ numberItem).set({customerinfo: customerinfo}).then(() => {
        console.log('Item added successfully!');
        alert('Item added successfully!');
        this.resetForm();
      })
      .catch(error => {
        console.error('Error adding item:', error);
      })
    }
  }

  resetForm() {
    this.registerForm.controls.name.setValue('');
    this.registerForm.controls.email.setValue('');
    this.registerForm.controls.mobile.setValue('');
    this.registerForm.controls.address.setValue('');
    this.registerForm.controls.source.setValue('');
    this.registerForm.controls.status.setValue('');
    this.registerForm.controls.favourite.setValue('');
    this.registerForm.controls.note.setValue('');
    this.registerForm.controls.name.setErrors(null);
    this.registerForm.controls.name.reset();
    this.registerForm.controls.email.setErrors(null);
    this.registerForm.controls.email.reset();
    this.registerForm.controls.mobile.setErrors(null);
    this.registerForm.controls.mobile.reset();
    this.registerForm.controls.address.setErrors(null);
    this.registerForm.controls.address.reset();
    this.registerForm.controls.source.setErrors(null);
    this.registerForm.controls.source.reset();
    this.registerForm.controls.status.setErrors(null);
    this.registerForm.controls.status.reset();
    this.registerForm.controls.favourite.setErrors(null);
    this.registerForm.controls.favourite.reset();
    this.registerForm.controls.note.setErrors(null);
    this.registerForm.controls.note.reset();
  }
}
