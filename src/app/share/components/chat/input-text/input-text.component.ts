import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {ChatMessage, IAnswerOption, TypeofMessage} from '../../../models/ChatMessage';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatTabChangeEvent} from '@angular/material';
import {Bot} from '../../../models/Bot.model';
import {ChatService} from '../../../services/chat/chat.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
    formGroup: FormGroup;
    typeMessage = TypeofMessage;
    answers: ChatMessage;
    bot: Bot;
    selectedTab = new BehaviorSubject(0);

    @Output() message = new EventEmitter<ChatMessage>();
    @ViewChild('commentChatInput', {static: false}) inputCommentElement: ElementRef;
    @ViewChild('askChatInput', {static: false}) inputAskElement: ElementRef;
    @ViewChild('answerChatInput', {static: false}) inputAnswerElement: ElementRef;
    @ViewChild('commandChatInput', {static: false}) inputCommandElement: ElementRef;
    @ViewChild('searchChatInput', {static: false}) inputSearchElement: ElementRef;

    constructor(
        private formBuilder: FormBuilder,
        public chatService: ChatService
    ) { }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            text: ['']
        });
        this.chatService.bot.subscribe( bot =>
            this.bot = bot
        );
        this.chatService.question.subscribe( questionMessage => {
            if (questionMessage) {
                this.answers = questionMessage;
                this.selectedTab.next(2);
            }
        });
    }

    sendMessage(typeOfMessage: TypeofMessage) {
        const msg = new ChatMessage({
            typeOfMessage, text: this.formGroup.get('text').value
        });
        this.message.next(msg);
    }
    performCommand(text: string) {
        const msg = new ChatMessage({
            typeOfMessage: TypeofMessage.command,
            text
        });
        this.message.next(msg);
    }

    navigate() {
        console.log('navigate to ...');
    }

    createComment() {
        console.log('create comment ...');
    }

    tabSelected($event: MatTabChangeEvent) {
        console.log($event);
        this.selectedTab.next($event.index);

        const allInputsInTabElement = [
            this.inputCommandElement,
            this.inputAskElement,
            this.inputAnswerElement,
            this.inputCommentElement,
            this.inputSearchElement
        ];
        setTimeout(() => allInputsInTabElement[$event.index].nativeElement.focus(), 500);
    }

    sendAnswer(answer: IAnswerOption) {
        const msg = new ChatMessage({
            typeOfMessage: TypeofMessage.answer,
            text: answer.label,
            data: this.answers
        });
        this.message.next(msg);
    }
}
