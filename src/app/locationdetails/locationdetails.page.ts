import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-locationdetails',
  templateUrl: './locationdetails.page.html',
  styleUrls: ['./locationdetails.page.scss'],
})
export class LocationdetailsPage implements OnInit {
  placeName = "";
  latitude = 0;
  longitude = 0;
  params: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve the data from the query parameters or state
    this.route.queryParams.subscribe((params) => {
      this.placeName = this.params.name;
      this.latitude = this.params.latitude;
      this.longitude = this.params.longitude;
    });
  }
}
