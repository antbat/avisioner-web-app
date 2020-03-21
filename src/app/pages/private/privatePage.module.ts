import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { NotesComponent } from './cabinet/notes/notes.component'
import { EnglishDictionaryComponent } from './cabinet/english-dictionary/english-dictionary.component'
import { ContactsComponent } from './cabinet/contacts/contacts.component'
import { PersonalComponent } from './cabinet/personal/personal.component'
import { ComplexDiagnosticComponent } from './cabinet/complex-diagnostic/complex-diagnostic.component'
import { SearchComponent } from './search/search.component'
import { ShareModule } from '../../share/share.module'
import { ContextBrowserComponent } from './context-browser/context-browser.component';
import { RobotComponent } from './my-bots/robot/robot.component';
import { MyFriendsComponent } from './my-friends/my-friends.component';
import { UserPageComponent } from './my-friends/user-page/user-page.component'

@NgModule({
    declarations: [
        NotesComponent,
        EnglishDictionaryComponent,
        ContactsComponent,
        PersonalComponent,
        ComplexDiagnosticComponent,
        SearchComponent,
        ContextBrowserComponent,
        RobotComponent,
        MyFriendsComponent,
        UserPageComponent
    ],
    imports: [CommonModule, ShareModule, RouterModule]
})
export class PrivateModule { }
