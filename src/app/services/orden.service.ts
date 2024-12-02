import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orden } from '../dto/orden.dto';

@Injectable({
  providedIn: 'root',
})
export class OrdenService {
  constructor(private client: HttpClient) {}

//   postOrdenPortaMuestra(opt: Orden) {
//     debugger;
//     const response = this.client.post(
//       'https://localhost:44342/api/OrdenPortaMuestra',
//       opt
//     );
//     response.subscribe((x) => console.log(x));
//   }

  getAllOrden(): Observable<Orden[]> {
    return this.client.get<Orden[]>(
      'https://localhost:44342/api/OrdenPortaMuestra'
    );
  }

//   find(numero: number): Observable<IOrdenPortaMuestra> {
//     return this.client.get<IOrdenPortaMuestra>(
//       'https://localhost:44342/api/OrdenPortaMuestra/Find?numero=' + numero
//     );
//   }
}
