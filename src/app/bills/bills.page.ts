import { Component, OnInit } from '@angular/core';
import { UserService } from '../userdata.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.page.html',
  styleUrls: ['./bills.page.scss'],
})
export class BillsPage implements OnInit {
  amount = 0.0;
  email = "";
  fullname = "";
  account = "";
  bankName = "";
  balance = 0.0;
  profiledp = "";
  activeUser = "";
    user: any;
  constructor(private userdata: UserService) { }

  ngOnInit() {
    this.fetchData();
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


    } else {
      console.log(JSON.stringify(this.user));
    }

  }

}
