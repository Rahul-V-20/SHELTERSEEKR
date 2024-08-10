import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelDescription, HotelPhotosList, Result } from '../models/hotels';
import { PlacesService } from '../places.service';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel!: Result;
  hotelphotoslist!: HotelPhotosList;
  hotelDescription!:HotelDescription;
  
  

  constructor(private route: ActivatedRoute, private placesService: PlacesService,private auth:AuthService) {}

  ngOnInit(): void {
    
    this.hotel = history.state.hotel;
    console.log('Hotel id:', this.hotel.hotel_id); 
    this.fetchHotelPhotos();
    this.fetchHotelDescription();
    
  }

  redirectToBooking(): void {
    if (this.hotel && this.hotel.url) {
      window.open(this.hotel.url, '_blank'); 
    } else {
      console.error('Hotel URL not available.');
      
    }
  }
  fetchHotelPhotos() {
    
    this.placesService.getHotelPhotos(this.hotel.hotel_id).subscribe(
      (data: HotelPhotosList) => {
        this.hotelphotoslist = data;
        console.log('Hotel Photos Object:',this.hotelphotoslist)
      },
      error => {
        console.error('Error fetching hotel Photos:', error);
      }
    );
  }

  fetchHotelDescription() {
    
    this.placesService.getHotelDescription(this.hotel.hotel_id).subscribe(
      (data: HotelDescription) => {
        this.hotelDescription = data;
        console.log('Hotel Description Object:',this.hotelDescription)
      },
      error => {
        console.error('Error fetching hotel description:', error);
      }
    );
  }
  logout(){
    this.auth.logout()
  }
}
