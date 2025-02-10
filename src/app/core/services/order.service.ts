import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Subject, map, tap } from 'rxjs';
import { environment } from '../../../environment/environment';
import { JsonResponseDTO } from '../interfaces/json-response';
import { NewOrderDTO, OrderFiltersDTO, SalesDatePredictionDTO } from '../interfaces/orders.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  http = inject(HttpClient)

  private readonly _refresh$ = new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }
  
  getSalesDatePrediction(orderFilters: OrderFiltersDTO) {
    return this.http.post<JsonResponseDTO<SalesDatePredictionDTO[]>>(`${environment.api}/orders/sales-date-prediction`, orderFilters).pipe(map(({ data }) => data))
  }
  
  addNewOrder(data: NewOrderDTO) {
    return this.http.post<any>(`${environment.api}/orders/add-new-order`, data)
    .pipe(
      tap(() => {
        this._refresh$.next()
      })
    )
  }
}
