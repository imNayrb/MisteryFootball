import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { CartComponent } from './cart/cart.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'prodotti', component:ProdottiComponent},
    {path:'profilo', component:ProfiloComponent},
    {path:'cart', component:CartComponent},
    {path:'product/:id', component:ProductDetailsComponent},
];

