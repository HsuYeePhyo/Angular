import { Component, OnInit, OnDestroy } from '@angular/core';
import {Address} from '../app/model';
import { AddressService } from './address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Day1-AddressBook';

  addresses: Address[] = [];

  //Dependency injection
  constructor(private addressSvc: AddressService){} 
  //must put private or public => if not only param, not instantiation

  ngOnInit(){
    this.addressSvc.loadAddress()
    .then((addresses: Address[])=>{
      this.addresses = addresses;
    })
    .catch((err)=> {
      console.error("Error Loading ", err);
    })
  }

  ngOnDestroy(){}
  processAddress($event: Address){
    //Promise non-blocking asyn

    this.addressSvc.saveAddress($event)
    .then(()=> {
  console.log('Saved');
  this.addresses.push($event);
    })
    .catch((err)=>{
    console.error('Error ', err);
    });
    
    console.log(">>> ", $event);
  }

  deleteAddress($event){
    console.log(">>> delete Address: ", $event);
  }

}
