import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { places1 } from './models/places';
import { envvariables } from './environment/environmentvariables';
import { HotelDescription, Hoteldetails, HotelPhotosList } from './models/hotels';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  constructor(private httpClient: HttpClient) {}

  getPlaces(searchTerm: string): Observable<places1[]> {
    if (!searchTerm.trim()) {
      return of([]); // Return empty array if search term is empty or whitespace
    }

    const headers = new HttpHeaders()
      .set(envvariables.xrapidapikeyname, envvariables.xrapidapikeyvalue)
      .set(envvariables.xrapidapihostname, envvariables.xrapidapihostvalue);

    const params = new HttpParams()
      .set('name', searchTerm)
      .set('locale', 'en-gb');

    return this.httpClient.get<any>(envvariables.PlacesbaseURL, { headers, params }).pipe(
      map(response => response || []),
      catchError(error => {
        console.error('Error fetching places:', error);
        return of([]); // Return empty array to prevent breaking the application
      })
    );


  }

  getHotelDetails(formData: any, selectedDestId: number, selectedDestType: string): Observable<Hoteldetails> {
    const headers = new HttpHeaders()
      .set(envvariables.xrapidapikeyname, envvariables.xrapidapikeyvalue)
      .set(envvariables.xrapidapihostname, envvariables.xrapidapihostvalue);
  
    let params = new HttpParams()
      .set('checkout_date', formData.checkout)
      .set('order_by', 'popularity')
      .set('filter_by_currency', 'INR');
  
    // Conditionally add 'children_number' parameter in the correct order
    if (formData.children > 0) {
      params = params.set('children_number', formData.children);
    }
  
    
    params = params
      .set('room_number', formData.rooms)
      .set('dest_id', selectedDestId)
      .set('dest_type', selectedDestType)
      .set('adults_number', formData.adults)
      .set('page_number', 0)
      .set('checkin_date', formData.checkin)
      .set('locale', 'en-gb')
      .set('units', 'metric');
  
    return this.httpClient.get<Hoteldetails>(envvariables.hotelsbaseURL, { headers, params }).pipe(
      catchError(error => {
        console.error('Error fetching hotel details:', error);
        throw error; // Handle error as per your application's needs
      })
    );
  }
  


  getHotelPhotos(Hotel_id:number): Observable<HotelPhotosList> {
    const headers = new HttpHeaders()
    .set(envvariables.xrapidapikeyname, envvariables.xrapidapikeyvalue)
    .set(envvariables.xrapidapihostname, envvariables.xrapidapihostvalue);

    
    const params = new HttpParams()
    .set('hotel_id', Hotel_id)
    .set('locale', 'en-gb');
    
      
     

    return this.httpClient.get<HotelPhotosList>(envvariables.hotelphotosbaseURL, { headers, params }).pipe(
      catchError(error => {
        console.error('Error fetching hotel photos:', error);
        throw error; 
      })
    );
  }





  getHotelDescription(Hotel_id:number): Observable<HotelDescription> {
    const headers = new HttpHeaders()
    .set(envvariables.xrapidapikeyname, envvariables.xrapidapikeyvalue)
    .set(envvariables.xrapidapihostname, envvariables.xrapidapihostvalue);

    
    const params = new HttpParams()
    .set('hotel_id', Hotel_id)
    .set('locale', 'en-gb');
    
      
     

    return this.httpClient.get<HotelDescription>(envvariables.hotelDescriptionbaseURL, { headers, params }).pipe(
      catchError(error => {
        console.error('Error fetching hotel Description:', error);
        throw error; 
      })
    );
  }
}
