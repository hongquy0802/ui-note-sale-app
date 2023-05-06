import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { favouriteData } from 'src/app/model/favourite.model';
import { sourceData } from 'src/app/model/source.model';
import { statusData } from 'src/app/model/status.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
  sourceList = sourceData;
  statusList = statusData;
  favouriteList = favouriteData;

  registerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required,
      Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      mobile: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.pattern('^[0-9]+$')])],
      address: ['', Validators.compose([])],
      source: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])],
      favourite: ['', Validators.compose([Validators.required])],
      note: ['', Validators.compose([Validators.required])],
    });
  }

  get f() { return this.registerForm.controls; }

  registerFormSubmit() {
    const data = {
      name: this.registerForm.controls.name.value ? this.registerForm.controls.name.value : null,
      email: this.registerForm.controls.email.value ? this.registerForm.controls.email.value : null,
      mobile: this.registerForm.controls.mobile.value ? this.registerForm.controls.mobile.value : null,
      address: this.registerForm.controls.address.value ? this.registerForm.controls.address.value : null,
      source: this.registerForm.controls.source.value ? this.registerForm.controls.source.value : null,
      status: this.registerForm.controls.status.value ? this.registerForm.controls.status.value : null,
      favourite: this.registerForm.controls.favourite.value ? this.registerForm.controls.favourite.value : null,
      note: this.registerForm.controls.note.value ? this.registerForm.controls.note.value : null,
    };

    if (!this.registerForm.invalid) {
      this.noteService.createNote(data).subscribe(res => {
        if (res) {
          console.log(res);
        }
      }, err => {
        console.log(err);
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
  }
}
