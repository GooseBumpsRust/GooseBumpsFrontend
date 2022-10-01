import { Component, OnInit } from '@angular/core';
import {CoreService} from "../../core.service";

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {
  isLoading = true;
  nftLink = '';
  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.mintNFT().subscribe((res: any) => {
      console.log(res);
      this.isLoading = false;
    })
  }

  goToOpenSea() {
    window.location.href = this.nftLink;
  }
}
