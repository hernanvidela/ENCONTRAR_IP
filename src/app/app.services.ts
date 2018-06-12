import {Http , Headers } from '@angular/http';
import {HttpResponse, HttpRequest } from 'selenium-webdriver/http';
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppServices {
  constructor(private http: Http) { }

  getbuscarip(ipIngresado: string): Promise<Ip[]> {
    const url = 'https://ipapi.co/' + ipIngresado + '/json/';

    return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Ip[])
        .catch(this.handleError);
}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}
}

export interface Ip {
   ip: String;
   ciudad: String;
   region: String;
   pais: String;
   paisCode: String;
   regionCode: String;
   latitud: String;
  longitud: String;
}
