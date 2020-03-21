import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-column-list',
    templateUrl: './column-list.component.html',
    styleUrls: ['./column-list.component.css']
})
export class ColumnListComponent implements OnInit {
    @Input() title: string;
    @Input() url: string;
    @Input() itemUrl: string;

    @Input() list: any[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
