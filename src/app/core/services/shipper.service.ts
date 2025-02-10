import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ShipperService {
  
  http = inject(HttpClient)

  getShippers(){
    return this.http.get<any>(`${environment.api}/shippers/list`).pipe(map(({ data }) => data))
  }
}
