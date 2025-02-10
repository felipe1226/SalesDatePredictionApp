import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  http = inject(HttpClient)

  getProducts(){
    return this.http.get<any>(`${environment.api}/products/list`).pipe(map(({ data }) => data))
  }
}
