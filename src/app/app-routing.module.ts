import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenComponent } from './pages/public/forbidden/forbidden.component';
import { NotFoundComponent } from './pages/public/not-found/not-found.component';
import { AboutComponent } from './pages/public/about/about.component';

import { AuthGuard } from './user/guard/auth.guard';

import { BotsComponent } from './pages/private/my-bots/bots.component';

import { SearchComponent } from './pages/private/search/search.component';
import { ContextBrowserComponent } from './pages/private/context-browser/context-browser.component';
import { RobotComponent } from './pages/private/my-bots/robot/robot.component';
import { MyFriendsComponent } from './pages/private/my-friends/my-friends.component';
import { UserPageComponent } from './pages/private/my-friends/user-page/user-page.component';


const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'bots', component: BotsComponent },
    {
        path: 'search',
        component: SearchComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'myFriends',
        component: MyFriendsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'userPage/:id',
        component: UserPageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'room/:id',
        component: ContextBrowserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'robot/:id',
        component: RobotComponent,
        canActivate: [AuthGuard]
    },

    { path: 'forbidden', component: ForbiddenComponent },

    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
