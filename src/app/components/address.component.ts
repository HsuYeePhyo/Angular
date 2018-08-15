import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {Address} from '../model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input () address: Address;
  @Output () deleteAdd = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  delete(){
    this.deleteAdd.next(this.address.email);
    console.info(this.address.email);
  }
}
