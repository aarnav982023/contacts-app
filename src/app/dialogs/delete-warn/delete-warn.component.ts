import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-delete-warn',
  templateUrl: './delete-warn.component.html',
  styleUrls: ['./delete-warn.component.scss'],
})
export class DeleteWarnComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}

  ngOnInit(): void {}
}
