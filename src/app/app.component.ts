import {ChangeDetectorRef, Component} from '@angular/core';
import Web3 from 'web3';
import {Signer, utils, providers, Wallet, Contract, Event} from 'ethers';
import {environment} from "../environments/environment";
import * as contractAbi from './utils/contractABI.json';
import {CoreService} from "./core.service";

declare let window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goosebumps-app';
  contractAbiObj = (contractAbi as any)

  account: string= '';
  isInGoodNetwork: boolean = false;
  value: any;
  waves: any[] = [];

  constructor(private cdr: ChangeDetectorRef, private coreService: CoreService) {
    window.ethereum.on('accountsChange', (accounts: any) => {
      console.log(accounts);
    })
    window.ethereum.on('chainChanged', (id: any) => {
      console.log(id);
    })

  }

  async loadWeb3() {
    // this.provider = await detectEthereumProvider();
    await this.checkIfWalletIsConnected()
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum.currentProvider);
      let accounts = await window.ethereum.request({method: "eth_requestAccounts"});
      this.account = accounts[0]
      this.coreService.account = this.account;
      this.coreService.createUser(this.account).subscribe((res: any) => {
        console.log(res)
        this.coreService.userId = res.userId
      });
      console.log('account', accounts[0])
      this.checkIfWalletIsConnected();

    } else if (window.web3) {

      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You Should consider using MetaMask!');
    }
  }

  async checkIfWalletIsConnected() {
    const chainId = await window.ethereum.request({method: 'eth_chainId'});
    this.cdr.detectChanges()


  }


  disconnectWeb3() {
    window.ethereum.request({
      method: "eth_requestAccounts",
      params: [{eth_accounts: {}}]
    }).then(() => {
      this.account = '';
      this.isInGoodNetwork = false;
    })
  }
  
}
