import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Trans } from './models/Trans.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: any;
  list:any;

  constructor(private storage: Storage) {
    this.storage.create();
  }

  async makePayment(payment: any, title: string): Promise<void> {
    try {
       this.list = await this.storage.get(title); // Retrieve the existing transList

      console.log(this.list);
      if (this.list != null) {
        // If transList exists, append the new object to it
        const userlist = [];
        userlist.push(
          payment.toAccount,
          payment.toAccName,
          payment.fromAccount,
          payment.amount,
          payment.status,
          payment.datetime);

        await this.storage.set(title, userlist);
       
      } else {
        // If transList doesn't exist, create a new array with the new object
        this.list = [
          new Trans(
            payment.toAccount,
            payment.toAccName,
            payment.fromAccount,
            payment.amount,
            payment.status,
            payment.datetime
          )
        ];

        await this.storage.set(title, this.list);
      }
         // Log the updated transList

   
    } catch (err) {
      console.log(err);
    }
  }


  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }


  async viewPayment(title: string): Promise<any> {
    const data = await this.storage.get(title);
    return data;
  }

  async updateUser(user: any): Promise<void> {
    await this.storage.set(user.email, user);
  }

  async createUser(user: any): Promise<void> {
    await this.storage.set(user.email, user);
  }

  async getUserDataByEmail(email: string): Promise<any> {
    const data = await this.storage.get(email);
    return data;
  }




  async updateUserBalance(newBalance: number, email:string): Promise<boolean> {
    try {
      const storedUser = await this.storage.get(email);

      if (storedUser) {
        storedUser.balance = newBalance;
        await this.storage.set(email, storedUser);

        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error updating user balance:', error);
      return false;
    }
  }
}
