import {Component, OnInit, ElementRef, Directive, AfterViewInit} from '@angular/core';
import {ChatService} from '../../../services/chat/chat.service';
import {ChatMessage} from '../../../models/ChatMessage';

@Directive({
    selector: '[scroll-to-bottom]'
})
export class ScrollToBottomDirective {
    constructor(private _el: ElementRef) { }

    public scrollToBottom() {
        const el: HTMLDivElement = this._el.nativeElement;
        el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
    }
}


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit, AfterViewInit {

    public conversation: ChatMessage[] = [];

    constructor(
        private _el: ElementRef,
        public chatService: ChatService
    ) { }

    ngOnInit() {
        this.chatService
            .conversation
            .subscribe( conversation => {
                this.conversation = conversation;
                this.scrollDown();
            });
    }

    ngAfterViewInit(): void {
        this.scrollDown();
    }
    scrollDown() {
        setTimeout(()=>{
            const container = document.getElementById("scrollContainer");
            container.scrollTop = container.scrollHeight;
        }, 500);
    }
}
