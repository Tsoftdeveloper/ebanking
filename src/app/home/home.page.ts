import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicSlides, NavController } from '@ionic/angular';
import { UserService } from '../userdata.service';
import { Chart, PieController, registerables } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  email = "";
  fullname = "";
  iban = "";
  bankName = "";
  balance = 0.0;
  profiledp = "";
  user: any;
  activeUser = "";
  chart: any;
  transaction: any;
  lftId = "";
  debited = 10;
  display = "";

  swiperModules = [IonicSlides];
    transactionTime: any;
    lftAccount: any;
    lftTime: any;
    currentDateTime: any;
 


  constructor(private router: Router, private navCtrl: NavController, private userdata: UserService) {
    Chart.register(...registerables);

    Chart.register(PieController);

  }


  ngOnInit() {



    this.fetchData();
    this.displayChart();



  }

  displayChart() {
    const data: ChartData = {
      labels: ['Credited', 'Debited', 'Investment'],
      datasets: [{
        data: [300, this.debited, 0],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };

    const options: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
 
     
    };


    this.chart = new Chart('myChart', {
      type: 'pie',
      data: data,
      options: options
    });
  }
  getCurrentDateTime() {
    const now = new Date();
    this.currentDateTime = now.toString();
  }


  async loadTransactions() {
    const transfers = await this.userdata.viewPayment("trans"+this.iban);
    if (transfers != null) {
      console.log(transfers);
      this.lftTime = this.currentDateTime;
      this.lftAccount = transfers[1];
      this.lftId = transfers[0];
      this.debited = this.debited*20;
    }

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
      if (this.user.image == null || this.user.image == "") {
        this.profiledp = "assets/default.png";
      }

      this.loadTransactions();

      

    } else {
      console.log(JSON.stringify(this.user));
    }

  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
