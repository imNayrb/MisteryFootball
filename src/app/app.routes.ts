import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { CartComponent } from './cart/cart.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';



export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:HomeComponent, title:"Home"},
    {path:'prodotti', component:ProdottiComponent, title:"Prodotti"},
    {path:'profilo', component:ProfiloComponent, title:"Profilo"},
    {path:'cart', component:CartComponent, title:"Carrello"},
    {path:'product/:id', component:ProductDetailsComponent},
];

