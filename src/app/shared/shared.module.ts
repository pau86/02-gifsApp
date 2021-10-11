import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [ // Todos los componentes que van a componer este módulo
    SidebarComponent
  ],
  exports: [ // Todo lo que quiero que sea visible fuera de este módulo
    SidebarComponent
  ],
  imports: [ // Todos los módulos que nos hacen falta, por ejemplo el CommonModule que nos servirá para poder usar el *ngIf y *ngFor
    CommonModule
  ]
})
export class SharedModule { }
