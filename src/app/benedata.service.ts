import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Benef } from './models/Bene.model';


@Injectable({
  providedIn: 'root'
})
export class BenedataService {
  userslist: Benef[] = [];
  list: Benef[] = [];
  id = 0;
  fetch: any;

  constructor(private bene: Storage) {
    this.bene.create();
  }

  async createBene(title: string, user: any): Promise<void> {
    this.userslist = await this.bene.get(title); // Retrieve the existing userslist

    if (this.userslist != null) {
      // If userslist exists, append the new object to it
      this.userslist.push(new Benef(user.beneAccTitle, user.beneAccount, user.beneBank, user.beneofuser));
    } else {
      // If userslist doesn't exist, create a new array with the new object
      this.userslist = [new Benef(user.beneAccTitle, user.beneAccount, user.beneBank, user.beneofuser)];
    }

    console.log("userslist: " + JSON.stringify(this.userslist)); // Log the updated userslist

    await this.bene.set(title, this.userslist); // Store the updated userslist back into storage

  }



   getBeneData(title: string): Promise<any> {
    const data =  this.bene.get(title);
    console.log("data: " + data);
    return data;
  }


  async deleteBeneData(title: string): Promise<boolean>{
    const data = await this.bene.get(title);
    if (data != null) {
      this.bene.remove(title);
      console.log("Removed...");
      return true;
    } else {
      console.log("Cannot remove because data doesn't exists'...");
      return false;
    }
    
  }
  async displayAllData() {
    const keys = await this.bene.keys();

    for (const key of keys) {
      const value = await this.bene.get(key);
      console.log('Key:', key);
      console.log('Value:', value);
      console.log('---');
      // Or, display the data in the UI using an array or any other approach
    }
  }

}
