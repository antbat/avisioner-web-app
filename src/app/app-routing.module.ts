import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenComponent } from './pages/public/forbidden/forbidden.component';
import { NotFoundComponent} from './pages/public/not-found/not-found.component';
import {AboutComponent} from './pages/public/about/about.component';
import {CabinetComponent} from './pages/private/cabinet/cabinet.component';
import {AuthGuard} from './user/guard/auth.guard';
import {EnglishDictionaryComponent} from './pages/private/cabinet/english-dictionary/english-dictionary.component';
import {NotesComponent} from './pages/private/cabinet/notes/notes.component';
import {ContactsComponent} from './pages/private/cabinet/contacts/contacts.component';
import {PersonalComponent} from './pages/private/cabinet/personal/personal.component';
import {BotsComponent} from './pages/private/bots/bots.component';


const routes: Routes = [
    { path: 'about', component: AboutComponent},
    { path: 'bots', component: BotsComponent},
    {
        path: 'cabinet',
        component: CabinetComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '5e355482e413fb08e88f5208', component: EnglishDictionaryComponent },
            { path: '5e355482e413fb08e88f5209', component: NotesComponent },
            { path: '5e355482e413fb08e88f520a', component: PersonalComponent },
            { path: '5e355482e413fb08e88f520b', component: ContactsComponent},
            { path: '', component: ContactsComponent}
        ]
    },

    { path: 'forbidden', component: ForbiddenComponent},

    { path: '', redirectTo: '/about', pathMatch: 'full'},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
