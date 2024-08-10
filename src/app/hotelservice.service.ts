import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelserviceService {

  
  constructor(private httpClient: HttpClient) {}

  getHotelDetails(formData: any): Observable<Hoteldetails> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json') // Adjust headers as per your API requirements
      .set('Authorization', 'Bearer your_access_token');

    // Convert form data to appropriate types and formats as needed
    const params = new HttpParams()
      .set('checkin_date', formData.checkin)
      .set('checkout_date', formData.checkout)
      .set('order_by', 'popularity')
      .set('filter_by_currency', 'INR')
      .set('number_of_children', formData.children.toString())
      .set('number_of_rooms', formData.rooms.toString())
      .set('dest_id', formData.selectedDestId.toString())
      .set('dest_type', formData.selectedDestType)
      .set('number_of_adults', formData.adults.toString())
      .set('pagenumber', '0')
      .set('locale', 'en-gb')
      .set('units', 'metric');

    return this.httpClient.get<Hoteldetails>(envvariables.hotelsbaseURL, { headers, params }).pipe(
      catchError(error => {
        console.error('Error fetching hotel details:', error);
        throw error; // Handle error as per your application's needs
      })
    );
  }
}
}
