import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class PortamuestraService {
    constructor(private client: HttpClient) {}
  
    GetLimitPortaMuestra(): Observable<PortaMuestra> {
      let url = apiUrl + '?id=' + '01JE4D8Y4KPDFQ10E585DXRQ3E';
      return this.client.get<PortaMuestra>(url);
    }
  }
  