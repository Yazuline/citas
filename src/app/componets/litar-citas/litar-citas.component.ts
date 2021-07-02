import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './litar-citas.component.html',
  styleUrls: ['./litar-citas.component.css']
})
export class LitarCitasComponent implements OnInit {
 @Input() listadoCitas:any;
 @Output() deleteCita = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  eliminarCita(index:number){
   this.deleteCita.emit(index);
  }

}
