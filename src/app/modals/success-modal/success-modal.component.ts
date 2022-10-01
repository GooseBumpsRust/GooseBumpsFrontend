import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {

  constructor(private router: Router, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  goToMintPage() {
    this.closeModal();
    this.router.navigate(['/reward']);

  }

  private closeModal() {
    this.matDialog.closeAll();

  }
}
