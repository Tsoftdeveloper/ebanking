import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map', { static: true }) 
  map: any;
  markers: any[] = [];

  ngOnInit() {
    this.getCurrentLocation();
  }
  constructor(private mapElement: ElementRef) { }
  getCurrentLocation() {
    Geolocation.getCurrentPosition()
      .then((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.initMap(latitude, longitude);
      })
      .catch((error) => {
        console.log('Error getting current location', error);
      });
  }

  initMap(latitude: number, longitude: number) {
    const mapOptions = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.fetchNearbyATMs(latitude, longitude);
  }

  fetchNearbyATMs(latitude: number, longitude: number) {
    // Make an API request or use any method to fetch nearby ATMs based on the provided latitude and longitude

    // Example: Fetching nearby ATMs using a mock data
    const nearbyATMs = [
      { name: 'ATM 1', latitude: 37.1234, longitude: -122.5678 },
      { name: 'ATM 2', latitude: 37.9876, longitude: -122.3456 },
      // Add more ATMs as needed
    ];

    // Add markers for each nearby ATM
    nearbyATMs.forEach((atm) => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(atm.latitude, atm.longitude),
        title: atm.name,
      });

      marker.setMap(this.map);
      this.markers.push(marker);

      // Add event listener for marker click
      marker.addListener('click', () => {
        this.showATMInfo(atm);
      });
    });
  }

  showATMInfo(atm: any) {
    // Implement the logic to display information about the selected ATM
    console.log('Selected ATM:', atm);
  }
}
