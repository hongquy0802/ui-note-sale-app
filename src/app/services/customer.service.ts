import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/note-sale/'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  dataTranfer: BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor() { }

  sendData(info: any, id: any) {
    this.dataTranfer.next({info, id});
  }
}
