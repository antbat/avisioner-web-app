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


const routes: Routes = [
    { path: 'about', component: AboutComponent},
    {
        path: 'cabinet',
        component: CabinetComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dictionary', component: EnglishDictionaryComponent },
            { path: 'note', component: NotesComponent },
            { path: 'personal', component: PersonalComponent },
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
