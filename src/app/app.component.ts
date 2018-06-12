import { Component, OnInit } from '@angular/core';
import {Http , Response } from '@angular/http';
import {HttpResponse, HttpRequest } from 'selenium-webdriver/http';
import { AppServices, Ip } from './app.services';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  ipIngresado = '';
  ipClase: Ip[];
  constructor(private appServices: AppServices, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ipIngresado = params['ipIngresado'];

      if (this.ipIngresado) {
        this.appServices.getbuscarip(this.ipIngresado).then(d => this.ipClase = d);
      }
    });
  }
}



