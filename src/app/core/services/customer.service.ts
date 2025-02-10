import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  http = inject(HttpClient)

  getCustomerOrders(customerId: number){
    return this.http.get<any>(`${environment.api}/customers/orders?customerId=${customerId}`).pipe(map(({ data }) => data))
  }
}
