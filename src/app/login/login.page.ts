import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserService } from '../userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  useremail = '';
  pwd = '';
  storedUser: any;
  storedMail = "";
  storedPass = "";

  constructor(private router: Router, private navCtrl: NavController, private userdata: UserService) { }
  

  ngOnInit() {
  }
  nextpage() {
 
    this.router.navigate(['/home']);
  }


  async validate() {

    if (this.useremail != null && this.pwd) {
      this.storedUser = await this.userdata.getUserDataByEmail(this.useremail);

      if (this.storedUser != null) {
        this.storedPass = this.storedUser.password;
        this.storedMail = this.storedUser.email;


        if (this.useremail == this.storedMail && this.pwd == this.storedPass) {
          sessionStorage.setItem('email', this.storedMail);
          this.nextpage();

        } else {
          alert("Invalid email or password.");
          console.log("Not matched.", this.useremail, " and ", this.pwd);
        }


      } else {
        alert("User doesn't exist.");
        console.log("Not matched.", this.useremail, " and ", this.pwd);
      }
    }
    else {
      alert("Please enter email & password to login.");
    }


  }
 
}
