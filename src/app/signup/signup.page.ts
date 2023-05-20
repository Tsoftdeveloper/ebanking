import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../userdata.service';
import { File } from '@ionic-native/file/ngx';
import { Filesystem, Directory, Encoding, FilesystemDirectory } from '@capacitor/filesystem';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Capacitor } from '@capacitor/core';
import { Photo } from '@capacitor/camera';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {


  email = "";
  password = "";
  fullname = "";
  bankAccountNumber = "";
  bankName = "";
  phoneNumber = "";
  status = false;
  storedUser: any;
  findex = 0;
  lindex = 0;
  imageUrl: SafeResourceUrl | null = null;
  uploadedfile = "";
  pass: boolean | undefined;
  image = "";

  bankList: string[] = [
    'ANZ',
    'Commonwealth Bank',
    'National Australia Bank',
    'Westpac',
    // add more banks as needed
  ];
    parsed: any;

  constructor(private router: Router, private userdata: UserService, private file: File, private sanitizer: DomSanitizer, private platform: Platform) {
 
  }

  ngOnInit() {
    this.loadFiles();
    
  }

  async loadFiles() {

    Filesystem.readdir({
      directory: Directory.Data,
      path: "uploads"
    }).then(result => {
      console.log("Here 1", result);
      this.loadfiledata(result.files);
    },
      async err => { console.log("err: " + err);

      Filesystem.mkdir({
        directory: Directory.Data,
        path: "uploads"
      }).then(result => {
        console.log("Here 2", result);},
        async err => { console.log("err: " + err); });

      });

  }

  async loadfiledata(fileNames: any[]) {

    const obj = Filesystem;

      for (let f in fileNames) {
        const filepath = "uploads/" + f;
        const readFiles = await Filesystem.readFile({
          directory: Directory.Data,
          path: filepath,
        });

        if (readFiles != null) {
          alert("Read files: " + readFiles);
        } else {
          console.log("Can't read files...");

        }
    }
  }

  async selectImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Data = await this.readAsBase64(file);
      console.log(base64Data);
      const saved = await this.savePicture(base64Data);
      console.log("Saved... " + saved);
    };
    reader.readAsDataURL(file);
  }


  async savePicture(base64Data: string) {
 
      const fileName = this.fullname.trim()+ '.jpeg';
    const path = "uploads";
    if (this.fullname != null  && this.fullname != "") {

     const savedFile = await Filesystem.writeFile({
        path: `${path}/${fileName}`,
       data: base64Data,
       directory: Directory.Data
      });



      if (savedFile) {
        console.log("File saved: " + savedFile.uri);
        alert("Uploaded! ");
        this.image = savedFile.uri;

      }

      return savedFile;
    } else {

      console.log("fullname is empty");
      return "";
    }  
   }

  async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path + "",
      });
      return file.data;
    } else {
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
    }
  }

   convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });


  async store(): Promise<boolean>{

    console.log(this.image);
    const user = {
      "email": this.email,
      "password": this.password,
      "fullname": this.fullname,
      "bank": this.bankName,
      "account": this.bankAccountNumber,
      "phone": this.phoneNumber,
      "balance": 60000.0,
      "image": this.image
    };


   
     await this.userdata.createUser(user);

     this.storedUser = await this.userdata.getUserDataByEmail(this.email);
  

    if (this.storedUser != null) {
      console.log(JSON.stringify(this.storedUser));
      this.status = true;
}
    else {
     this.status = false;
    }
    
    return this.status;

  }




  async onBtnSubmit() {

    if (await this.store() == true) {
      sessionStorage.setItem('email', this.storedUser.email);
      alert("User Created!");
      this.nextpage();
    }

    else {
      alert("User Creation Failed!");
    }

  }


  
  nextpage() {

  
    this.router.navigate(['/home']);

  }

}
