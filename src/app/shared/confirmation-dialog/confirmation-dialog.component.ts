import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.sass']
})
export class ConfirmationDialogComponent implements OnInit {
 // TODO implement better confirmation dialog -> Now using window.dialog
  constructor() { }

  ngOnInit() {
  }

}
