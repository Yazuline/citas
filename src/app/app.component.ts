import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ListCitas:any[]=[];

  agregarCita(cita: any){
    //console.log('Soy el Padre');
   // console.log(cita);
   this.ListCitas.push(cita);
   console.log(this.ListCitas);
  }
  eliminarCitaListado(index: number){
    this.ListCitas.splice(index,1)
  }

}
