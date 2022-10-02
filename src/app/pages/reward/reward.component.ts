import { Component, OnInit } from '@angular/core';
import {CoreService} from "../../core.service";

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {
  isLoading = true;
  nftLink = "https://testnets.opensea.io/assets?search[query]=";
  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.mintNFT().subscribe((res: any) => {
      this.nftLink += res.transactionHash
      this.isLoading = false;
    })
  }

  goToOpenSea() {
    window.open(
      this.nftLink,
      '_blank'
    );
  }
}
