import { Component } from '@angular/core';
import { AppServices } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  title = '';
  ipIngresado = '';
  IpClase = new Ip();

  constructor(private obj: AppServices) {}

  getDatosCiudad() {
    this.obj.getbuscarip(this.ipIngresado)
      .then((data) => (this.IpClase = data));
      console.log(this.IpClase);
  }
  }

export class Ip {
  ip: string;
  ciudad: string;
  region: string;
  pais: string;
  paisCode: string;
  regionCode: string;
  latitud: string;
 longitud: string;
}


