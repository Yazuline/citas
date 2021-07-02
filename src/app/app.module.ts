import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearCitasComponent } from './componets/crear-citas/crear-citas.component';
import { LitarCitasComponent } from './componets/litar-citas/litar-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearCitasComponent,
    LitarCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
