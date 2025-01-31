import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { CartComponent } from './cart/cart.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';



export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'prodotti', component:ProdottiComponent},
    {path:'profilo', component:ProfiloComponent, canActivate: [AuthGuard]},
    {path:'cart', component:CartComponent},
    {path:'product/:id', component:ProductDetailsComponent},
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent}
];

