// home.component.ts
import { Component, OnInit } from '@angular/core';
import { BookingFormService } from '../booking-form.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookingform = this.bookingFormService.createBookingForm();
  filteredPlaces = this.bookingFormService.setupAutocomplete(this.bookingform);
  selectedDestId?: string;
  selectedDestType?: string;

  constructor(private bookingFormService: BookingFormService, private router: Router,private auth:AuthService) {}

  ngOnInit() {}

  onOptionSelected(event: any) {
    const place = event.option.value;
    this.bookingform.get('places')!.setValue(place.label);
    this.selectedDestId = place.dest_id;
    this.selectedDestType = place.dest_type;
  }

  onsubmit() {
    const formData = this.bookingform.value;
    if (formData.checkin <= formData.checkout){
      const queryParams = { ...formData, selectedDestId: this.selectedDestId, selectedDestType: this.selectedDestType };
      this.router.navigate(['/hotels'], { queryParams });
    }
    else{
      alert('checkin date is after checkout date')
    }
   
  }

  logout(){
    this.auth.logout()
  }
}
