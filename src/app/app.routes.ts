
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Route Configuration
export const routes: Routes = [
  { path: 'ipIngresado', component: AppComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
