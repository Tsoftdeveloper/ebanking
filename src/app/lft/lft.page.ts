import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BenedataService } from '../benedata.service';
import { UserService } from '../userdata.service';

@Component({
  selector: 'app-lft',
  templateUrl: './lft.page.html',
  styleUrls: ['./lft.page.scss'],
})
export class LFTPage{

  beneAcc = "0000000000";
  amount = 0.0;
  email = "";
  fullname = "";
  account = "";
  bankName = "";
  balance = 0.0;
  profiledp = "";
  user: any;
  activeUser = "";
  start = "";
  end = "";
  updateBalance = 0.0;
  currentDateTime = "";
  beneBank = "";
  beneName = "";
  selectedItem = "";
  parse: any;

  bankList: string[] = [
    'ANZ',
    'Commonwealth Bank',
    'National Australia Bank',
    'Westpac',
    // add more banks as needed
  ];

  presentingElement = document.querySelector('.card');

  public alertButtons = ['OK'];

  itemSelected = "";
    data: any;
    storedBene: any;

  constructor(private userdata: UserService, private bene: BenedataService) {
  }


  ngOnInit() {
    this.fetchData();
 

  }


  makeselection() {
    console.log('Selected account title:', this.beneName);
    const matchedBene = this.findBeneByAccount(this.beneName);
    console.log(matchedBene.id);
    this.selectedItem = matchedBene.id;
  }


  findBeneByAccount(beneName: string): any {
    return this.storedBene.find((user: any) => user.title === beneName);
  }


  async displayAll() {
    this.storedBene = await this.bene.getBeneData("bene" + this.account);
    console.log(this.storedBene);
  }

  getCurrentDateTime() {
    const now = new Date();
    this.currentDateTime = now.toString();
  }

  async pay() {
    if (this.amount != null && this.amount > 0 && this.account != null && this.beneAcc != null) {

      const transaction = {
        "toAccount": this.selectedItem,
        "toAccName": this.beneName,
        "fromAccount": this.account,
        "amount": this.amount,
        "status": "Paid",
        "datetime": this.getCurrentDateTime(),
      }
      this.userdata.makePayment(transaction, 'trans' + this.account);

      console.log(this.userdata.viewPayment('trans' + this.account));

      if (this.userdata.viewPayment('trans'+this.account) != null) {
        this.balance = this.balance - this.amount;

        const UpdateBal = await this.userdata.updateUserBalance(this.balance, this.email);
        if (UpdateBal) {
          alert("Payment has been transferred successfully.");
        } else {
          alert("Transaction failed.");
        }
      }
      
    }
    else {
      alert("Please fill the fields to proceed.");
    }

  }

  async fetchData() {

    this.activeUser = sessionStorage.getItem('email')?.toString()!;

    this.user = await this.userdata.getUserDataByEmail(this.activeUser);
    if (this.user != null) {
      console.log(this.user);
      this.email = this.user.email;
      this.fullname = this.user.fullname;
      this.account = this.user.account;
      this.bankName = this.user.bankName;
      this.balance = this.user.balance;
      this.profiledp = this.user.image;

      this.displayAll();
    } else {
      console.log(JSON.stringify(this.user));
    }

  }



}

