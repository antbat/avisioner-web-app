import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenComponent } from './pages/public/forbidden/forbidden.component';
import { NotFoundComponent} from './pages/public/not-found/not-found.component';
import {AboutComponent} from './pages/public/about/about.component';
import {CabinetComponent} from './pages/private/cabinet/cabinet.component';
import {AuthGuard} from './user/guard/auth.guard';


const routes: Routes = [
    { path: 'about', component: AboutComponent},
    { path: 'cabinet', component: CabinetComponent, canActivate: [AuthGuard]},

    { path: 'forbidden', component: ForbiddenComponent},

    { path: '', redirectTo: '/about', pathMatch: 'full'},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
