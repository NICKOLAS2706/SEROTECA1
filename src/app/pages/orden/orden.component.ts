import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-orden',
  standalone: true,
  imports: [TableModule ],
  templateUrl: './orden.component.html',
})
export class OrdenComponent implements OnInit{
  constructor(private ordenService:OrdenService ){}
  
  listOrden:any[]=[]

  ngOnInit() {
    this.ordenService.getAllOrden().subscribe((data:any[])=>{
      this.listOrden = data;
      console.log(data)
    });
  }


}
