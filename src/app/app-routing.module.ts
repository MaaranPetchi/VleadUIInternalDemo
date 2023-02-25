import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login/login.component';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';

const routes: Routes = [ { path: 'login', component: LoginComponent },
    { path: 'nav', component: NavbarComponent },
// { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
// { path: '**', component: PageNotFoundComponent }, ] // Wildcard route for a 404 page];
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
