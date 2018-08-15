import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressEntryComponent } from './components/address-entry.component';
import { AddressComponent } from './components/address.component';
import {FormsModule} from '@angular/forms';
import { AddressService } from './address.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressEntryComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [AddressService], //adding Service into Array, can have more than 1 service
  bootstrap: [AppComponent]
})
export class AppModule { }
