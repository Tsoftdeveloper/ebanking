import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BenedataService } from '../benedata.service';
import { Benef } from '../models/Bene.model';
import { UserService } from '../userdata.service';

@Component({
  selector: 'app-add-bene',
  templateUrl: './add-bene.page.html',
  styleUrls: ['./add-bene.page.scss'],
})
export class AddBenePage implements OnInit {
 amount = 0.0;
  email = "";
  fullname = "";
  account = "";
  bankName = "";
  balance = 0.0;
  profiledp = "";
  activeUser = "";
  beneBank = "";
  beneAccount = "";
  beneAccTitle = "";
  data: any;
  user: any;
  beneList: Benef[] = [];
  storedBene: any;


  bankList: string[] = [
    'ANZ',
    'Commonwealth Bank',
    'National Australia Bank',
    'Westpac',
    // add more banks as needed
  ];
  constructor(private userdata: UserService, private bene: BenedataService, private alertController: AlertController) { }

  ngOnInit() {
    this.fetchData();
  }


  public alertButtons = ['OK'];

  
  async presentConfirmationAlert(): Promise<Boolean> {
    return new Promise<Boolean>(async (resolve) => {
      const alert = await this.alertController.create({
        header: 'Delete All Beneficiaries',
        message: 'Are you sure you want to proceed?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              // Handle cancel action
              console.log('User clicked Cancel');
              resolve(false);
            }
          },
          {
            text: 'Confirm',
            handler: () => {
              // Handle confirm action
              console.log('User clicked Confirm');
              // Add your code for the confirmed action here
              resolve(true);
            }
          }
        ]
      });

      await alert.present();
    });
  }


  async deleteAll() {
    const del = await this.bene.deleteBeneData("bene" + this.account);
    const confirm = await this.presentConfirmationAlert();

    if (confirm) {
      if (del == true) {
        alert("Deleted All Linked Beneficiaries.");
      }
    }
      }


  async displayAll() {
    this.storedBene = await this.bene.getBeneData("bene" + this.account);
    console.log(this.storedBene);
  }


  async add() {
    
    if (this.beneAccount != null && this.beneAccTitle != null && this.beneBank) {
      this.data = {
        "beneAccTitle": this.beneAccTitle,
        "beneAccount": this.beneAccount,
        "beneBank": this.beneBank,
        "beneofuser" : this.account,
      }

      this.bene.createBene("bene"+this.account, this.data);

      const storedBene = await this.bene.getBeneData("bene" + this.account);
      if (storedBene != null) {
        console.log(storedBene);
        alert("Added!");
      }



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


    } else {
      console.log(JSON.stringify(this.user));
    }

  }
 
 
 




}
