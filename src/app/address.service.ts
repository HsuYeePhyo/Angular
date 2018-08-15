import { Injectable } from "../../node_modules/@angular/core";
import Dexie from 'dexie';
import {Address} from './model';

@Injectable() // @Injectable ({ providedIn: "root"}) or declare in app.module.ts
export class AddressService{
    db: Dexie;

    constructor() {
        this.db = new Dexie('friends');
        this.db.version(1).stores({
            addresses: 'name, phone, email'
        });
    }

    loadAddress(): Promise<Address[]>{
        
            return this.db['addresses'].orderBy('name').toArray();
    }
    saveAddress(address: Address): Promise<any>{
        return this.db['addresses'].put(address);
    }

}