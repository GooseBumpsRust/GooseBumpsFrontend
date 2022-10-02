import { Component, OnInit } from '@angular/core';
import {CoreService} from "../../core.service";

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {
  isLoading = true;
  nftLink = "https://testnets.opensea.io/de-DE/assets/goerli/0xf4910c763ed4e47a585e2d34baa9a4b611ae448c/42040629683490972667802350057265726773262769513393816794069375005593910116353";
  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.mintNFT().subscribe((res: any) => {
      // this.nftLink += res.transactionHash
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
