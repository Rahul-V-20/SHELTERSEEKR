// booking-form.service.ts
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { PlacesService } from './places.service';
import { places1 } from './models/places';

@Injectable({
  providedIn: 'root'
})
export class BookingFormService {
  constructor(private placesService: PlacesService) {}

  createBookingForm(): FormGroup {
    return new FormGroup({
      checkin: new FormControl('', Validators.required),
      checkout: new FormControl('', Validators.required),
      places: new FormControl('', Validators.required),
      adults: new FormControl('', Validators.required),
      children: new FormControl('', Validators.required),
      rooms: new FormControl('', Validators.required)
    });
  }

  setupAutocomplete(form: FormGroup): Observable<places1[]> {
    return form.get('places')!.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(value => value && value.length > 0),
      switchMap(value => this.placesService.getPlaces(value).pipe(
        catchError(error => {
          console.error('Error fetching places:', error);
          return of([]); // Return empty array to prevent breaking the application
        })
      ))
    );
  }
}
