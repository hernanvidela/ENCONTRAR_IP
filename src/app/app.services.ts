import { Injectable } from '@angular/core';
import { Ip } from './app.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppServices {
  constructor(private http: HttpClient) { }

  getbuscarip(ipIngresado: string): Promise<Ip> {
    return new Promise((resolve, reject) => {
      const url: string = 'https://ipapi.co/' + ipIngresado + '/json/';
      this.http.get<InterfaceIp>(url).subscribe((res) => {
        if (res !== null) {
          console.log(res);
          resolve(this.parsear(res));
        } else {
          reject();
        }
      });
    });
  }
  parsear(res: InterfaceIp) {

    const ipClase: Ip = new Ip;
    ipClase.ip = res.ip;
    ipClase.pais = res.country_name;
    ipClase.ciudad = res.city;
    ipClase.latitud = res.latitude;
    ipClase.longitud = res.longitude;
    ipClase.paisCode = res.country;
    ipClase.regionCode = res.region_code;
    ipClase.region = res.region;

    return ipClase;
  }
}
export interface InterfaceIp {
  ip: string;
  city: string;
  region: string;
  country_name: string;
  country: string;
  region_code: string;
  latitude: string;
  longitude: string;
}
