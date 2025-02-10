import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  http = inject(HttpClient)

  getEmployees(){
    return this.http.get<any>(`${environment.api}/employees/list`).pipe(map(({ data }) => data))
  }
}
