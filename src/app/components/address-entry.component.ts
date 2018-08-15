import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Address} from '../model';

@Component({
  selector: 'app-address-entry',
  templateUrl: './address-entry.component.html',
  styleUrls: ['./address-entry.component.css']
})
export class AddressEntryComponent implements OnInit {
  
  @ViewChild('form') form:NgForm;

  @Output() newAddress= new EventEmitter<Address>();

  constructor() { }

  ngOnInit() {
  }

  processForm(){
    let address: Address;
    address = this.form.value;
    this.newAddress.next(address);
    console.log("Processing form ....", this.form.value);
    this.form.resetForm();
  }
}
