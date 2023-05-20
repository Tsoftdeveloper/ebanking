import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers, Storage } from '@ionic/storage';
import { NgForm, NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './userdata.service';
import { RouterModule } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { BenedataService } from './benedata.service';;


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), RouterModule],

  providers: [UserService, BenedataService, File, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
