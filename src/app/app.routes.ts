import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : 'home',
    loadComponent : () => loadRemoteModule('mfe1','./Dashboard')
    .then((m) => m.HomeComponent)
  },

  // { path: '**', redirectTo: 'home' },
  {
    path: 'users',
    loadComponent: () => loadRemoteModule('mfe1','./Users')
    .then((m) => m.UsersComponent)

  },

  {
    path: 'products',
    loadComponent: () => loadRemoteModule('mfe1','./Products')
   .then((m) => m.ProductsComponent)},

   {
    path: 'orders',
    loadComponent: () => loadRemoteModule('mfe1','./Orders')
    .then((m) => m.OrdersComponent)
   }

];
