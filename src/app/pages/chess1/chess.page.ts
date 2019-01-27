import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-chess',
    templateUrl: './chess.page.html',
    styleUrls: ['./chess.page.scss'],
})
export class ChessPage implements OnInit {

    @ViewChild('board') el_board: ElementRef;

    maxRow = 4;
    maxCol = 4;

    board: any;

    constructor() {
        console.log('GameWithTabPage::constructor | ');

        this.board = [];

        /*
        for (var row = 0; row < this.maxRow; row++) {
            this.board[row] = [];
            for (var col = 0; col < this.maxCol; col++) {
                var result = Math.random() < .075;

                this.board[row][col] = result;
            }
        }
        */


    }

    ngOnInit() {
        console.log('GameWithTabPage::ngOnInit | board=', this.el_board.nativeElement);


        var space = 1;
        for (var r = 0; r < 8; r++) {
            var col = "";
            for (var c = 0; c < 8; c++) {
                col += "<td data-pos='" + space + "'></td>"; space++;
            }
            this.el_board.nativeElement. append("<tr>" + col + "</tr>");
        }
    }
}
