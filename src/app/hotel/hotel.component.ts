// hotel.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService } from '../booking-form.service';
import { PlacesService } from '../places.service';
import { Hoteldetails } from '../models/hotels';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  bookingform = this.bookingFormService.createBookingForm();
  filteredPlaces = this.bookingFormService.setupAutocomplete(this.bookingform);
  selectedDestId!: number;
  selectedDestType!: string;
  hotelDetails!: Hoteldetails;

  constructor(
    private bookingFormService: BookingFormService,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private auth:AuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.bookingform.patchValue({
        checkin: params['checkin'],
        checkout: params['checkout'],
        places: params['places'],
        adults: +params['adults'],
        children: +params['children'],
        rooms: +params['rooms']
      });
      this.selectedDestId = +params['selectedDestId'];
      this.selectedDestType = params['selectedDestType'];

      this.fetchHotelDetails();
    });
  }

  onOptionSelected(event: any) {
    const place = event.option.value;
    this.bookingform.get('places')!.setValue(place.label);
    this.selectedDestId = +place.dest_id;
    this.selectedDestType = place.dest_type;
  }

  fetchHotelDetails() {
    const formData = this.bookingform.value;
    this.placesService.getHotelDetails(formData,this.selectedDestId, this.selectedDestType).subscribe(
      (data: Hoteldetails) => {
        this.hotelDetails = data;
      },
      error => {
        console.error('Error fetching hotel details:', error);
      }
    );
  }

  onsubmit() {
    if (this.bookingform.value.checkin<=this.bookingform.value.checkout){
      this.fetchHotelDetails();
    }
    else {
      alert('Check in date is after Checkout date')
    }
  }

  logout(){
    this.auth.logout()
  }
}
