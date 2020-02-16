import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesComponent } from './cabinet/notes/notes.component';
import { EnglishDictionaryComponent } from './cabinet/english-dictionary/english-dictionary.component';
import { ContactsComponent } from './cabinet/contacts/contacts.component';
import { PersonalComponent } from './cabinet/personal/personal.component';
import { ComplexDiagnosticComponent } from './cabinet/complex-diagnostic/complex-diagnostic.component';

@NgModule({
  declarations: [
      NotesComponent,
      EnglishDictionaryComponent,
      ContactsComponent,
      PersonalComponent,
      ComplexDiagnosticComponent,
  ],
  imports: [
      CommonModule
  ]
})
export class PrivateModule { }
