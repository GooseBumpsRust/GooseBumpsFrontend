import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToMintPage() {
    this.router.navigate(['/reward']);
  }

}
