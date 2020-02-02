import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat/chat.service';
import {IAuthor} from '../../Interfaces/Author';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

    participants: IAuthor[];

  constructor(
      private chatService: ChatService
  ) { }

  ngOnInit() {
      this.chatService.participants.subscribe(authors => this.participants = authors);
  }

}
