import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ChatMessage} from '../../../models/ChatMessage';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
    formGroup: FormGroup;

    @Output() message = new EventEmitter<ChatMessage>();

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            text: ['']
        });
    }

    sendMessage() {
        const msg = new ChatMessage();
        msg.text = this.formGroup.get('text').value;
        this.message.next(msg);
    }

}
