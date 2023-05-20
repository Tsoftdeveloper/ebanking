import { Component, OnInit } from '@angular/core';
import { UserService } from '../userdata.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.page.html',
  styleUrls: ['./statement.page.scss'],
})
export class StatementPage implements OnInit {

  email = "";
  fullname = "";
  iban = "";
  bankName = "";
  balance = 0.0;
  profiledp = "";
  user: any;
  activeUser = "";
  start = "";
  end = "";
  startdate: any;
  enddate: any;
  today: any;
  transList: any;
  lftTime = "";
  lftAccount= "";
  lftId = "";
   debited: any;
  amount:any;
  display = "hidden";
  transfers: any;


  constructor(private userdata: UserService) { }

  ngOnInit() {
    this.fetchData();

  }

  async loadTransactions() {
    this.transfers = await this.userdata.viewPayment("trans" + this.iban);
    console.log(this.transfers.length);
 
     
    if (this.transfers != null && this.transfers.length > 0) {

      const firstTransfer = this.transfers[0];
      this.lftId = firstTransfer.toAccount;
      this.amount = firstTransfer.amount;
    
      this.debited *= 20;
      this.display = "visible";
      } else {
      this.lftId = "";
      this.amount = 0;
      this.display = "hidden";
    }


  }

  generate() {
    this.startdate = new Date(this.start);
    this.enddate = new Date(this.end);
    const currentdate = new Date();
    this.today = new Date(currentdate.toISOString().split('T')[0]);


    if (this.enddate <= this.today) {
      if (this.startdate < this.enddate) {
        alert("Generating results..");
      }
     
    }
    if (this.startdate > this.enddate) {
      alert("Start Date should be less than End Date.")
    }
    if (this.enddate > this.today) {
      alert("End Date should be less or equal to Current Date.")

    }

  }

  async displayAll() {
    this.transList = await this.userdata.viewPayment("trans" + this.iban)
    console.log(this.transList);
  }

  async fetchData() {

    this.activeUser = sessionStorage.getItem('email')?.toString()!;

    this.user = await this.userdata.getUserDataByEmail(this.activeUser);
    if (this.user != null) {
      console.log(this.user);
      this.email = this.user.email;
      this.fullname = this.user.fullname;
      this.iban = this.user.account;
      this.bankName = this.user.bankName;
      this.balance = this.user.balance;
      this.profiledp = this.user.image;
      this.loadTransactions();

    } else {
      console.log(JSON.stringify(this.user));
    }

  }

}
