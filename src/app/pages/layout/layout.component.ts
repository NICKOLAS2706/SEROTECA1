import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MenuModule,RouterModule,RouterOutlet ],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit{

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        { label: 'Seroteca',routerLink:'/seroteca'},
    ];
}
}
