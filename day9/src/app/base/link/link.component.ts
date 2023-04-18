import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from 'src/app/papers/form/form.component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(FormComponent)
}
}
