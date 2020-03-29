import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SearchComponent } from './search/search.component'
import { ShareModule } from '../../share/share.module'
import { ContextBrowserComponent } from './context-browser/context-browser.component';
import { RobotComponent } from './my-bots/robot/robot.component';
import { MyFriendsComponent } from './my-friends/my-friends.component';
import { UserPageComponent } from './my-friends/user-page/user-page.component'

@NgModule({
    declarations: [
        SearchComponent,
        ContextBrowserComponent,
        RobotComponent,
        MyFriendsComponent,
        UserPageComponent
    ],
    imports: [CommonModule, ShareModule, RouterModule]
})
export class PrivateModule { }
